package mx.uv;
import static spark.Spark.*;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class App 
{
    public static void main( String[] args )
    {

        options("/*",(request,response)->{
        String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");
        if(accessControlRequestHeaders!=null){
        response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
        }
        String accessControlRequestMethod=request.headers("Access-Control-Request-Method");
        if(accessControlRequestMethod!=null){
        response.header("Access-Control-Allow-Methods",accessControlRequestMethod);
        }
        return "OK";
        });
        
        before((request,response)->response.header("Access-Control-Allow-Origin","*"));
        String[] datos=new String[2];
        get("/", (request,response)->"Hola");
        get("/ruta2",(request,response)->{
             String nombre=request.queryParams("nombre");
             String apellido=request.queryParams("apellido");
             datos[0]=nombre;
             datos[1]=apellido;
            JsonObject respuesta= new JsonObject();            
            respuesta.addProperty("nombre",nombre);
            respuesta.addProperty("apellido", apellido);
            response.type("application/json");
            return respuesta;
         });
         
            get("/ruta3",(request,response)->{
             String nombre= datos[0];
             String apellido=datos[1];
            JsonObject respuesta= new JsonObject();            
            respuesta.addProperty("nombre",nombre);
            respuesta.addProperty("apellido", apellido);
            response.type("application/json");
            return respuesta;
         });

         get("/ruta4",(request,response)->{
             String nombre= datos[0]=" ";
             String apellido=datos[1]=" ";
            JsonObject respuesta= new JsonObject();            
            respuesta.addProperty("nombre",nombre);
            respuesta.addProperty("apellido", apellido); 
            response.type("application/json");
            return respuesta;
         });

        get("/ruta5",(request,response)->{
            String nombre=request.queryParams("nombre");
             String apellido=request.queryParams("apellido");
              nombre= datos[0]=nombre;
              apellido=datos[1]=apellido;
            JsonObject respuesta= new JsonObject();            
            respuesta.addProperty("nombre",nombre);
            respuesta.addProperty("apellido", apellido);
            response.type("application/json");
            return respuesta;
         });
    }
}