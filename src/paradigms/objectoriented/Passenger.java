package paradigms.objectoriented;

public class Passenger {

    private final String id;
    private final String name;
    private String location;

    public Passenger(String id, String name, String location) {
        this.id = id;
        this.name = name;
        this.location = location;
    }

    public Passenger(String id, String name) {
        this(id, name, "Home");
    }

    void travelTo(String destination) {
        location = destination;
    }

    String getID() {
        return id;
    }

    String getName() {
        return name;
    }

    String getLocation() {
        return location;
    }
}