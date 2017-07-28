package ua.golovchenko.artem.web.api;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created by artem on 28.07.17.
 */

@Path("home")
    public class Resource {
        @GET
        @Path("hello")
        @Produces(MediaType.TEXT_PLAIN)
        public String helloWorld() {
            return "Hello, world 2!";
        }

}
