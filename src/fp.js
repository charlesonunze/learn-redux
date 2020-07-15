// Functional Programming


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

// Function Composition
const input = '   JavaScript   ';
const output = `<div>${input.trim()}</div>`; // Not functional

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`; // Funtional
const result = wrapInDiv(trim(input)); // Function composition in action

console.log('!functional', output);
console.log('functional!', result);