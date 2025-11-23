type PassengerData = {
    id: string,
    name: string,
    flightID: string
};

type FlightData = {
    id: string,
    destination: string,
    passenger: Array<string>
};

type BookingDatabase = {
    passengers: Array<PassengerData>,
    flights: Array<FlightData>
};

export type { PassengerData, FlightData, BookingDatabase };