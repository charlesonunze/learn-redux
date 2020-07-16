// Functional Programming
const { compose, pipe } = require('lodash/fp')
const { Map, isImmutable } = require('immutable')
const { produce } = require('immer')

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

// Immutablity in Objects
const shallowCopy = Object.assign({}, person, { lastName: 'Wick!', likes: { pet: 'cat' } }); // shallow copy
const shallowCopy2 = { ...person, lastName: 'Wick!' }; // shallow copy
console.log('Immutablity:', shallowCopy);
console.log('Immutablity:', shallowCopy2);

const deepCopy = { ...person, lastName: 'Wick!!!', likes: { ...person.likes } }; // deep copy
console.log('Immutablity:', deepCopy);

// Immutablity in Arrays

// Adding
const numbers = [1, 2, 3];

const added = [...numbers, 4]; // add element at the end
const added2 = [4, ...numbers]; // add element at the beginning
const index = numbers.indexOf(2);
const added3 = [...numbers.slice(0, index), 4, ...numbers.slice(index)]; // add elemet at a particular index
console.log('Immutablity:', added);
console.log('Immutablity:', added2);
console.log('Immutablity:', added3);

// Removing
const removed = numbers.filter(n => n !== 2);
console.log('Immutablity:', removed);

// Updating
const updated = numbers.map(n => n === 2 ? 20 : n);
console.log('Immutablity:', updated);

// 06. Using Libraries that enforce Immutability

// ImmutableJS
let book = Map({ title: 'Pale Blue Dot' });

function publish(book) {
  return book.set('isPublished', true)
}

function publish2(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = false
  })
}

book = publish(book);
console.log('Immutable.js', book.toJS());

// Immer
let book2 = { title: 'Pale Blue Dot' };

book2 = publish2(book2);
console.log('Immer', book2);
