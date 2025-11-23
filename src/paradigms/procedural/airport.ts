/* airport as a series of processes operating on data structures */

import * as Model from './model.ts';

function airportProcedural() {
    const bookings: Model.BookingDatabase = {
        passengers: [],
        flights: []
    };

    function addPassenger(id: string, name: string, flightID: string) {
        bookings.passengers.push({id, name, flightID});

        const flight = bookings.flights.find(f => f.id == flightID);

        if (flight) {
            flight.passenger.push(id);
        }
    }

    function registerDeparture(flightID: string) {
        const index = bookings.flights.findIndex(f => f.id == flightID);

        if (index != -1) {
            bookings.flights.splice(index, 1);
            bookings.passengers = bookings.passengers.filter(
                (p) => p.flightID == flightID
            );
        }
    }

    return { addPassenger, registerDeparture, bookings };
}

const proc = airportProcedural();
proc.addPassenger('P2402', 'Harry', 'A224');

console.log('Passengers:', proc.bookings.passengers);

export { airportProcedural };