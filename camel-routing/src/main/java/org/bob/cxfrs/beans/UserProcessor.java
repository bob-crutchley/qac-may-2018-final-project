package org.bob.cxfrs.beans;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import org.bob.cxfrs.beans.util.JSONUtil;


public class UserProcessor implements Processor {
    public void process(Exchange exchange) throws Exception {

        String msg = exchange.getIn().getBody(String.class);
        System.out.println(msg);
        User user = new JSONUtil().getObjectForJSON(msg, User.class);
        exchange.getOut().setBody(user);

    }
}
