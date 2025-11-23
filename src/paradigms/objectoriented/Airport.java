package paradigms.objectoriented;

import java.util.ArrayList;
import java.util.List;

public class Airport {
    
    public String name;
    public List<Flight> flights = new ArrayList<>();

    public Airport(String name) {
        this.name = name;
    }

    void addFlight(Flight flight) {
        flights.add(flight);
    }

    public static void main(String[] args) {
        Airport airport = new Airport("Melbourne");
        Flight flight = new Flight("A224", "SF");
        Passenger harry = new Passenger("P2402", "Harry");

        airport.addFlight(flight);
        flight.boardPassenger(harry);
        System.out.printf(
            "%s is now at %s\n", harry.getName(), harry.getLocation()
        );

        flight.depart();
        System.out.printf(
            "%s is now at %s\n", harry.getName(), harry.getLocation()
        );
    }
}