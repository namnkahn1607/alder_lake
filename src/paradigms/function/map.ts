/* APPROACH 1st */
type Money = number;
type PassengerCount = number;
type FlightCapacity = number;

type Schedule<A, B> = (input: A) => B;

export type { Money, PassengerCount, FlightCapacity, Schedule };

/* APPROACH 2nd */
type FlightState = 'scheduled' | 'boarding' | 'departed';

type FlightMeta = {
    id: string,
    state: FlightState,
    passengerIds: Array<string>
};

export type { FlightState, FlightMeta };