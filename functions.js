// What is a function
// A block of code uded to perform specific tasks


// Basic syntax of a JavaScript function
function nameOfFunction () {
    // You function body or logic
}

// Types of Functions
// 1. Named Functions (Declarations)
// 2. Arrow Functions
// 3. Anonymous Functions
// 4. Callback Functions
// 5. High Ordered Functions
// 6. Async Function

// Calling the function
sayHello()


// 1. Named Functions (Declarations)
function sayHello() {
    console.log("Hello Class")
}

// 2. Arrow functions => ES6 introduced a new and shorter way of declaring an anonymous function
const declareHello = () => {
    console.log("Hello Students")
}

declareHello();

const greeting = () => console.log("Good Evening");
greeting()


const multiply = (a,b) => {
    return a*b
}

console.log(multiply(2,3))


// 3. Anonymous functions => Functions that does not have a name or identifier
setTimeout(function () {
    console.log("This runs after 8 seconds")
}, 8000)


// 4. High Order Functions => Function that takes one or more functions as arguments
function higherOderFunction (functionToExecute) {
    console.log("I can do everything")
    functionToExecute()
}

higherOderFunction(sayHello);


// Callback function

// A function can accept another function as a parameter.
// Callbacks allow one function to call another at a later time.
// A callback function can execute after another function has finished

function greet(name, callback) {
    console.log("Hello" + name);
    callback();
}

function sayBye() {
    console.log("GoodBye!")
}

greet("Angela", declareHello)