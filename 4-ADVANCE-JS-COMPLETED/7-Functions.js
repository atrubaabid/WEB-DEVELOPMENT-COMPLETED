//* ===============================
//* Function in JavaScript
//* ==============================



// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 5));
// console.log(sum(15, 50));
// console.log(sum(25, 750));


// =============================================================================================================================================================================================================================



//* ===============================
//* Function Declaration:
//* ==============================


// function greet() {
//   console.log("Hello Guys, Welcome to JS Course ");
// }



//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

// greet();



//* ==============================
//* Function Parameter:
//* ==============================


// function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }


//* ==============================
//* Function Argument:
//* ==============================


//? functionName(argument1, argument2, ...);


//* ==============================
//* Function expressions
//* ==============================


// var result = function sum(a, b) {
//     console.log(a + b);
// };

// result(10, 15);


//* ==============================
//*  Anonymous Function
//* =============================

// var result = function (a, b) {
//     console.log(a + b);
// };

// result(10, 15);


//* ==============================
//*  Return Keyword
//* =============================

// The return statement stops the execution of a function and sends a value back to the caller


// function sum(a, b) {
//     console.log(a + b);
//     return a + b;
//     console.log("hello I am function");   //after return its not execute
// }

// var result = sum(5, 5);
// console.log(result);


// =========================================================================================================================================================================================



//* ==============================
//* IIFE - immediately invoked function expression
//* =============================



// Syntax
// (function () {
//     // code to be executed
// })();




// ----------------------------------------------------------


// var result = (function (a, b) {
//   console.log(a + b);
//   return a + b;
// })(5, 10);

// console.log("the sum of two number is " + result);



//* ==============================
//*  Arrow Function
//* =============================



// const calculator = (num1, num2, operator) => {
//     let result;
//     switch (operator) {
//         case "+":
//             return num1 + num2;

//         case "-":
//             result = num1 - num2;
//             return result;

//         case "*":
//             result = num1 * num2;
//             return result;

//         case "/":
//             if (num2 === 0 || num1 === 0) {
//                 return "0 is not allowed";
//             } else {
//                 result = num1 / num2;
//                 return result;
//             }

//         default:
//             return "no operator found";
//     }
// };

// console.log(calculator(5, 2, "+")); // Output: 7
// console.log(calculator(8, 4, "-")); // Output: 4
// console.log(calculator(10, 10, "*")); // Output: 100
// console.log(calculator(0, 10, "/")); // Output: 0 is not allowed



// ----------------------------------------------------------


//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.


// const isReverse = (str) => {
//     let reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
//     return reverse;
// };

// console.log(isReverse("Syeda Atruba"));



// ----------------------------------------------------------


//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

// level => level
// sis => sis


// const isPalindrome = (str) => {
//     let reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }

//     //   if (str === reverse) {
//     //     return "word is Palindrome";
//     //   } else {
//     //     return "word is not Palindrome";
//     //   }

//     return str === reverse ? "word is Palindrome" : "word is not Palindrome";
// };

// console.log(isPalindrome("level"));





// COMPLETED
















