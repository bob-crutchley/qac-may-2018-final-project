package org.bob.cxfrs.beans;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.bob.cxfrs.beans.constants.Constants;

public class DataBaseProcessor implements Processor {
    public void process(Exchange exchange) throws Exception {
        User user = exchange.getIn().getBody(User.class);
        exchange.setProperty("name", user.getName());
        exchange.setProperty("score", user.getScore());
        exchange.getOut().setBody("INSERT INTO user(user_name, user_score) VALUES ('"+exchange.getProperty("name")+"' , '"+exchange.getProperty("score")+"')");

    }
}
