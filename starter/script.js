'use strict';

const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5 Method
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//     console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// const flight = 'LH451';
// const noah = {
//   name: 'Noah Sherman',
//   passport: 123456789,
// };

// Check in function

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH456';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 123456789) {
//     alert('Checked in');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkIn(flight, noah);
// console.log(flight);
// console.log(noah);

// ^^ is the same as doing..
// const flightNum = flight;
// const passenger = noah;

// function newPassport(person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(noah);
// checkIn(flight, noah);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`transformed string ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// // JS executes callback functions frequently
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// ! Functions returning functions

// TODO my answer

// const micCheck = test => {
//   return number => {
//     console.log(`${test} ${number}`);
//   };
// };

// const result = micCheck('MIC CHECKKKK')('1 2 1 222222222');

// TODO Course answer

// const micCheck = test => number => console.log(`${test} ${number}`);

// micCheck('MIC CHECK')('1 2 1 2222222');

const luftHansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flight, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flight}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flight}`, name });
  },
};

luftHansa.book(239, 'Noah Sherman');
luftHansa.book(456, 'Shermain Dupri');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = luftHansa.book;

book.call(eurowings, 23, 'Leroy Henry');
console.log(eurowings);

book.call(luftHansa, 236, 'Booby Miles');
console.log(luftHansa);

const flightData = [583, 'Billy Rae Cyrus'];
book.apply(eurowings, flightData);
console.log(eurowings);
