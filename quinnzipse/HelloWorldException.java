public class HelloWorldException extends Exception{
    private static final String message = "Hello World!";

    public HelloWorldException(){
        super(message);
    }
}
