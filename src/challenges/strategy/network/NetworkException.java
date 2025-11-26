package challenges.strategy.network;

public class NetworkException extends RuntimeException {
    
    public NetworkException(String msg) {
        super(msg);
    }
}

class Request {
    
    private final String message;

    public Request(String message) {
        this.message = message;
    }

    public Request() {
        this("Anonymous");
    }

    public String getMessage() {
        return message;
    }
}

class Response {

    private final String message;

    public Response(String message) {
        this.message = message;
    }

    public Response() {
        this("Anonymous");
    }

    public String getMessage() {
        return message;
    }
}