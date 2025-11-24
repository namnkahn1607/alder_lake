import * as Map from './map.ts';

const composeSchedules = <A, B, C>(
    f: Map.Schedule<A, B>,
    g: Map.Schedule<B, C>
): Map.Schedule<A, C> => {
    return (input: A) => g(f(input));
}

export { composeSchedules };

/* APPROACH 1st */
const budgetsToSeats: Map.Schedule<Map.Money, Map.FlightCapacity>
    = (money) => Math.floor(money / 100); // $100 per seat

const seatsToMaxPassengers: Map.Schedule<Map.FlightCapacity, Map.PassengerCount>
    = (seats) => Math.floor(0.9 * seats); // 90% occupation for comfort

export { budgetsToSeats, seatsToMaxPassengers };

/* APPROACH 2nd */
const scheduleToBoarding: Map.Schedule<Map.FlightMeta, Map.FlightMeta>
    = (flights) => ({...flights, state: 'boarding'});

const boardingToDeparted: Map.Schedule<Map.FlightMeta, Map.FlightMeta>
    = (flights) => ({...flights, state: 'departed'});

export { scheduleToBoarding, boardingToDeparted };