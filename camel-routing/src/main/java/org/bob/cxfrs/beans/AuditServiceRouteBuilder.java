package org.bob.cxfrs.beans;

import org.apache.camel.builder.RouteBuilder;
import org.bob.cxfrs.beans.constants.Constants;


public class AuditServiceRouteBuilder extends RouteBuilder {


    public void configure() throws Exception {
        from("cxfrs://bean://auditService")
                .process(new UserProcessor())
                .process(new FileProcessor())
                .to(Constants.AUDIT_FILE_PATH);


    }

}
