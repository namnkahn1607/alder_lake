/* airport as a transformation pipeline and compositions of functions */

import * as Map from './map.ts';
import * as Reduce from './reduce.ts';

/* APPROACH 1st */
const airportFunctional = (availableMoney: Map.Money) => {
    const moneyToMaxPassengers = Reduce.composeSchedules(
        Reduce.budgetsToSeats, Reduce.seatsToMaxPassengers
    );

    const maxPassengers = moneyToMaxPassengers(availableMoney);
    console.log(`$${availableMoney} -> ${maxPassengers} max passengers`);

    const canBook = (requests: Map.PassengerCount): boolean => {
        return requests <= maxPassengers;
    };

    return { canBook, maxPassengers };
};

// Client code
const airportSystem = airportFunctional(50000) // $50,000 budget

const attempts = [300, 400, 500].map(
    (requests) => airportSystem.canBook(requests)
);
console.log(attempts);

/* APPROACH 2nd */
const scheduleToDeparted = Reduce.composeSchedules(
    Reduce.scheduleToBoarding, Reduce.boardingToDeparted
);

const initialFlight: Map.FlightMeta = {
    id: "F100",
    state: 'scheduled',
    passengerIds: ['P1', 'P2']
};

const departedFlight = scheduleToDeparted(initialFlight);
console.log(
    `Flight went from "${initialFlight.state}" → "${departedFlight.state}"`
);