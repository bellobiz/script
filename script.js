var a, b;

a = Math.floor(Math.random() * 1000);
b = Math.floor(Math.random() * 1000);

function values(a, b) {
    console.log(`a = ${a}; b = ${b}`);
}

function add(a, b) {
    console.log(`Addition = ${a + b}`);
}

function subtract(a, b) {
    console.log(`Subtraction = ${a - b}`);
}

function multiply(a, b) {
    console.log(`Multiplication = ${a * b}`);
}

function divide(a, b) {
    console.log(`Division = ${a / b}`);
}

function increase(a) {
    console.log(`Increment a (by one) = ${a + 1}`);
}

function decrease(a) {
    console.log(`Decrement (by one) = ${a - 1}`);
}

function output() {
    values(a, b);
    add(a, b);
    subtract(a, b);
    multiply(a, b);
    divide(a, b);
    increase(a);
    decrease(a);
}

output();