package ua.golovchenko.artem;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.servlet.ServletContainer;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {


        /// CONFIG SERVER
        //System.out.println( "Hello World!" );
        ResourceConfig config = new ResourceConfig();
        config.packages("ua.golovchenko.artem.web.api");
        ServletHolder servlet = new ServletHolder(new ServletContainer(config));

        Server server = new Server(2222);
        server.setHandler(new HelloHandler());
        ServletContextHandler context = new ServletContextHandler(server, "/*");
        context.addServlet(servlet, "/*");


        ///  ADD HANDLER   source https://examples.javacodegeeks.com/enterprise-java/jetty/jetty-resource-handler-example/
        // https://stackoverflow.com/questions/14958251/map-jetty-resourcehandler-to-a-url

        //1.Creating the resource handler
        ResourceHandler resourceHandler = new ResourceHandler();

        //2.Setting Resource Base
        resourceHandler.setResourceBase("./web-server/web");

        System.out.println("resourceHandler PATH: " + resourceHandler.getBaseResource());
        //3.Enabling Directory Listing
       /* resourceHandler.setDirectoriesListed(true);*/


        //4.Setting Context Source
        ContextHandler contextHandler= new ContextHandler("/myApplication");

        //5.Attaching Handlers
        contextHandler.setHandler(resourceHandler);
        server.setHandler(contextHandler);

        System.out.println("contextHandler PATH:" + contextHandler.getContextPath());


        try {
            server.start();
            server.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
        server.destroy();
    }
    }
}
