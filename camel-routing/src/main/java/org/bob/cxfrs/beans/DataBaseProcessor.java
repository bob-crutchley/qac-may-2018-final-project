package org.bob.cxfrs.beans;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.bob.cxfrs.beans.constants.Constants;

public class DataBaseProcessor implements Processor {
    public void process(Exchange exchange) throws Exception {
        User user = exchange.getIn().getBody(User.class);
        exchange.setProperty("id", user.getId());
        exchange.setProperty("name", user.getName());
        System.out.println(user.getName());
        exchange.setProperty("score", user.getScore());
        System.out.println(user.getScore());
        exchange.getOut().setBody("INSERT INTO user(user_id, user_name, user_score) VALUES ('"+exchange.getProperty("id")+"' , '"+exchange.getProperty("name")+"' , '"+exchange.getProperty("score")+"')");

    }
}
