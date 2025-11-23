package paradigms.objectoriented;

import java.util.ArrayList;
import java.util.List;

public class Flight {

    public String id;
    public String destination;
    public List<Passenger> passengers = new ArrayList<>();
    public String location;

    public Flight(String id, String destination, String location) {
        this.id = id;
        this.destination = destination;
        this.location = location;
    }

    public Flight(String id, String destination) {
        this(id, destination, "gate");
    }

    void boardPassenger(Passenger passenger) {
        passengers.add(passenger);
        passenger.travelTo(String.format("Flight-%s", id));
    }

    void depart() {
        location = destination;
        
        for (Passenger passenger : passengers) {
            passenger.travelTo(destination);
        }
    }
}