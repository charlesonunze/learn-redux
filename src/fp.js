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