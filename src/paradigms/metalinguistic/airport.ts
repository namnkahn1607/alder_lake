/* a new domain-specific language for modeling airports */

import { AirportDSL  } from './dsl.ts';

const airportMetalinguistic = () => {
    const dsl = new AirportDSL();

    dsl
        .entity('passenger', () => ({ location: 'home', hasTicket: false }))
        .entity('flight', () => ({ status: 'scheduled', passengers: [] }))
        .constraint(() => {
            console.log(
                'validating: all passengers boarded before departure'
            );
        })
        .constraint(() => {
            console.log(
                'validating: budget constraints'
            );
        });

    const checkIn = dsl.transition(
        'check-in', 'home', 'gate',
        () => console.log('passenger checked in')
    );

    const board = dsl.transition(
        'board', 'gate', 'airborne',
        () => console.log('passenger boarded')
    );

    return { dsl, checkIn, board }; 
};

// Client code
const { dsl, checkIn, board } = airportMetalinguistic();
dsl.validate();
console.log(
    'Transition: ', checkIn.name, checkIn.from, '->', checkIn.to
);