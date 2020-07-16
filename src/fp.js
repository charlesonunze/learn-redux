// Functional Programming
const { compose, pipe } = require('lodash/fp')

// 01. Higher Order Functions

function greet(fn) {
  console.log(fn());
}

function sayHello() {
  return function () {
    return 'Hello World!'
  }
}

greet(sayHello());

// Built in Higher Order Functions
setTimeout(() => console.log('Hello there!'), 1000);
const evenNumbers = [1, 3, 2, 5, 4, 6].filter((num) => num % 2 === 0)
console.log(evenNumbers);

// 02. Function Composition
const input = '   JavaScript   ';
const output = `<div>${input.trim()}</div>`; // Not functional

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`; // Funtional
const result = wrapInDiv(trim(input)); // Function composition in action

console.log('!functional', output);
console.log('functional!', result);

// Composition with Lodash
const composed = compose(wrapInDiv, trim);
console.log('Lodash Compose', composed(input));

const piedPiper = pipe(trim, wrapInDiv);
console.log('Pied Piper!', piedPiper(input));

// 03. Currying

// Currying Basics
function add(a) {
  return function (b) {
    return a + b;
  }
}

const addES6 = a => b => a + b;

console.log('sCURRY!', add(1)(5));
console.log('sCURRY!', addES6(1)(5));

const wrap = type => str => `<${type}>${str}</${type}>`;
console.log("sCURRR!", wrap('div')('Hello Haskell Curry'));

const piedPiper2 = pipe(trim, wrap('div'));
console.log('Pied Piper2!', piedPiper2(input));

// 04. Pure Functions
const pureFunction = (number) => number * 2;
const impureFunction = (number) => number * Math.random();

// 05. Immutability
const person = {
  firstName: 'John', lastName: 'Wick',
  likes: {
    pet: 'dog'
  }
};

const shallowCopy = Object.assign({}, person, { lastName: 'Wick!', likes: { pet: 'cat' } }); // shallow copy
const shallowCopy2 = { ...person, lastName: 'Wick!' }; // shallow copy
console.log('Immutablity:', shallowCopy);
console.log('Immutablity:', shallowCopy2);

const deepCopy = { ...person, lastName: 'Wick!!!', likes: { ...person.likes } }; // deep copy
console.log('Immutablity:', deepCopy);
