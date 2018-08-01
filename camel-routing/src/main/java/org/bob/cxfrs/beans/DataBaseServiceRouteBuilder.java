package org.bob.cxfrs.beans;

import org.apache.camel.builder.RouteBuilder;


public class DataBaseServiceRouteBuilder extends RouteBuilder {


    public void configure() throws Exception {
        from("cxfrs://bean://databaseService")
                .process(new UserProcessor())
                .process(new DataBaseProcessor())
                .log("${body}")
                .recipientList(simple("sqlComponent: ${body}"));


    }

}
