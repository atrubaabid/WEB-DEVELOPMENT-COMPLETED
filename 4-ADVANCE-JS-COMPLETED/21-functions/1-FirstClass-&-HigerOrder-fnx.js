//* ---------------------------------------------------
//*  First-Class Function - it's just a concept
//* ---------------------------------------------------

// A "first-class function" means that functions can be treated as values, assigned to variables, and passed around as arguments.


// Function declaration
// function sayHello(name) {
//     return "Hello, " + name + "!";
// }


// Assigning the function to a variable
// var greetFunction = sayHello;


// Using the variable as a function
// console.log(greetFunction("Atruba"));



//* -------------------------------
//*  Higher-Order Functions:
//* -------------------------------

// A higher-order function is a function that takes one or more functions as arguments or returns a function as a result.


//* -------------------------------
//*  Callback Functions:
//* -------------------------------

// A callback function is a function passed as an argument to another function and is executed after the completion of a task.

//* Here is the example ✅

// // Callback function
// function processUserInput(name, greetUser) {
//     console.log("Received input: " + name);
//     greetUser(name);
// }

// // Function to be used as a callback
// function greetUser(name) {
//     console.log(`Hello! ${name}`);
// }

// // Higher-Order Function
// processUserInput("Atruba", greetUser);



// processUserInput is a higher-order function because it takes another function (callback) as an argument.
// greetUser is a callback function because it's passed as an argument to processUserInput and gets executed after the completion of the main task


//* -------------------------------
//*  Closure:
//* -------------------------------

// A closure is created when an inner function has access to the variables of its outer function, even after the outer function has finished executing.


// function multiplier(factor) {
//     return function (number) {
//         console.log(number, factor);
//         return number * factor;
//     };
// }

// const double = multiplier(2);
// console.log(double(5));



// -------------------------------------------------------


// //* also one more example
// function outerFunction() {
//     var outerVariable = "I'm from outer";

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }

// console.log(outerFunction());                   //Print innerFunction 
// var closureFunction = outerFunction();          //save return fnx in a variable
// closureFunction();                              // Outputs: "I'm from outer"



//* ===================================
//* Interview Question:
//* ===================================

// Write a program to perform mathematical operations using callback functions and two variables in JavaScript.

// const mathOperation = (a, b, operation) => {
//     return operation(a, b);
// };

// const add = (a, b) => {
//     return a + b;
// };

// const sub = (a, b) => {
//     return b - a;
// };

// console.log(mathOperation(5, 15, add));
// console.log(mathOperation(5, 15, sub));





// COMPLETED