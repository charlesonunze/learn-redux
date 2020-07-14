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