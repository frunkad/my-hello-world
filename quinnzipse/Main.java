public class Main {

    public static void main(String[] args) {
	    try{
	        throw new HelloWorldException();
        }
        catch (HelloWorldException e){
	        System.out.println(e.getMessage());
        }
    }
}
