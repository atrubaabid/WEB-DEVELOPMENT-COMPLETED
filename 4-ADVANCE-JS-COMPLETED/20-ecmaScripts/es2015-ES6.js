//* ======================================
//* Modern JavaScript - EcmaScript 2015
//* =====================================

//* ======================================
//* LET AND CONST - EcmaScript 2015
//* =====================================

// 1. let  =>  let is used to create a variable. Its value can be changed later, and it works only inside its own block {}

// let age = 20;
// age = 25;
// console.log(age);


// ========================================================================================



// 2. const  =>  const is used to create a variable. Its value cannot be changed after it is assigned.

// const pi = 3.14;


// ========================================================================================


// 3. var  =>  var is the old way to create a variable. It does not use block scope, so it can cause bugs.

// if(true){
//   var name = "Ali";
// }
// console.log(name); // Ali


// ========================================================================================


// 4. Template Literals (``)  =>  Template literals let you write variables and expressions inside a string easily.


// let name = "Ali";
// console.log(`Hello ${name}`);



// ========================================================================================


// 5. String Interpolation  =>  Inside ${}, you can write a variable or a calculation.


// let a = 5;
// console.log(`${a * 2}`);


// ========================================================================================


// 6. Multi-line String  =>  Backticks let you write multiple lines without using \n.


// let str = `Hello
// World`
// console.log(str);


// ========================================================================================


// 7. Default Parameters  =>  If you do not pass an argument, the function will use the default value.


// function sum(a = 10, b = 20) {
//     return a + b;
// }
// console.log(sum(1,1));
// console.log(sum());



// ========================================================================================


// 8. Arrow Function (=>)   =>    A short and modern way to write a function.

// let summ = (a, b) => {
//     return a + b
// }

// const sum = (a, b) => a + b;
// console.log(sum(1, 2));


// ========================================================================================


// 9. Object Shorthand  =>  If the variable name and property name are the same, you only need to write it once.

// const name = "Atruba";
// const age = 20;

// const person = { name: name, age: age };

//? Using shorthand notation for object property
// const person = { name, age };
// console.log(person);


// ========================================================================================



// 10. Array Destructuring  =>  Get array values directly into variables.

// const numbers = [10, 20, 30];
// // const first = numbers[0]; // Traditional way
// const [first, second, third] = numbers;   //modern way
// console.log(second);


// const [a,b]=[10,20];
// console.log(a);
// console.log(b);


//? 2: Ignoring elements:
// const [, , third] = numbers;
// console.log(third);


//! Write a program to swap two variables without using 3rd variable?

// let a = 10;
// let b = 30;

//? Mostly will do using 3rd var
// let c = b; //c=30
// b = a; // b=10
// a = c; //a=30

//? without using 3rd variable
// [a, b] = [b, a];
// console.log(a, b);


// ========================================================================================

// 11. Object Destructuring   =>    Get object properties directly into variables.

// const user = { name: "Atruba", age: 20 };

//? Extracting properties:
// const myName = user.name; // Traditional way
// const { age, name } = user;  ////modern way
// console.log(age, name);


//? Renaming properties:
// const { name: fullName, age } = user; // Rename "name" to "fullName"
// console.log(fullName);


// ========================================================================================


//* ==========================================
//*  Spread Operator - Modern JavaScript
//* =========================================

// JavaScript ES6 (ECMAScript 6) introduced the spread operator. The syntax is three dots(...) followed by the array (or iterable*).

// It is used to copy or merge an array or object.

// //? 1. Copying an array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// let newFruits = [...fruits];
// fruits[0] = "a"
// console.log(fruits);
// console.log(newFruits);



//? 2: Concatenating arrays / Combining arrays / Array Merge
// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [4, 5, 6];
// const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);


//? 3: Adding Elements to existing array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// fruits.push("guava", "grapes");
// fruits.push(...["guava", "grapes"]);
// console.log(fruits);



//! One more useCases  /  String Spread
//? In JavaScript, when you spread a string using the spread syntax (...), it converts the string into an array of its individual characters.

// //? Traditional way
// const country = "PAKISTAN";
// console.log(country.split(""));

// //? New way of doing it
// // const country = "PAKISTAN";
// console.log([...country]);

// ========================================================================================


//* ==========================================
//*  Rest parameters  - Modern JavaScript
//* =========================================

//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept varying numbers of arguments.

// It collects all extra function arguments into an array.


//? traditional way of doing it
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };


//? with rest parameters
// const sum = (a, b, ...numbers) => {
//     // console.log(typeof numbers);
//   return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
// };

// console.log(sum(1, 2, 3, 4));

//TODO NOTE: A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
// function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg2, arg3) {}



// ========================================================================================



// 📌 Short Revision

// let   =>   Value change ho sakti hai, block scope.
// const   =>   Value change nahi hoti.
// var   =>   Purana method, block scope nahi.
// Template Literal   =>   Backticks se string likhna.
// ${}   =>   Variable ya expression string me likhna.
// Default Parameter   =>   Argument na ho to default value.
// Arrow Function   =>   Short function syntax.
// Object Shorthand   =>   name: name ki jagah name.
// Array Destructuring   =>   Array se values nikalna.
// Object Destructuring   =>   Object se properties nikalna.
// Swap   =>   [a,b]=[b,a]
// Spread (...)   =>   Copy, merge aur expand.
// Rest (...)   =>   Extra arguments ko array me lena.
// reduce()   =>   Sab values ko combine karke ek value banana.


// ========================================================================================

// COMPLETED






