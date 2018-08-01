package org.bob.cxfrs.beans;

import org.apache.camel.builder.RouteBuilder;
import org.bob.cxfrs.beans.constants.Constants;


public class EMailServiceRouteBuilder extends RouteBuilder {


    public void configure() throws Exception {
        from("cxfrs://bean://emailService")
                .process(new UserProcessor())
                .process(new EMailProcessor())
                .log("${body}")
                .setHeader("subject", simple("Congratulations!"))
                .log("its cool benny ${header.email}")
                .log("MOAR")
                .recipientList(simple("smtps:smtp.gmail.com:465?username="+Constants.EMAIL+"&password="
                        +Constants.EMAIL_PASSWORD +"&to=${header.email}&mail.smtp.auth=true"));
    }

}
