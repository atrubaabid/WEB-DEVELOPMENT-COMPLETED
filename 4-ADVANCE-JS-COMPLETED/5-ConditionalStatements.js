
//* ===============================
//* 5. Conditional statement Section
//* ===============================





//* ===============================
//* IF, ELSE STATEMENT
//* ===============================



// var temperature = 25;
// if (temperature > 30) {
//   console.log("lets go to beach");
// } else {
//   console.log("tv dekhte hai yr");
// }



// =================================================================================================



//* ===============================
//* IF, ELSE IF, ELSE STATEMENT
//* ===============================




// var temperature = 15;
// if (temperature >= 30) {
//   console.log("lets go to beach");
// } else if (temperature >= 20 && temperature < 30) {
//   console.log("tv dekhte hai yr");
// } else {
//   console.log("kambhal oodo so jawo");
// }


// =================================================================================================


//* Interview Question



//* ===============================
// NESTED IF-ELSE STATEMENT
//* ===============================



// let userAge = 19;
// let isCitizen = true;
// let isRegistered = true;


// if (userAge >= 18) {
//     if (isCitizen) {
//         if (isRegistered) {
//             console.log("You are eligible to vote");
//         } else {
//             console.log("You are not eligible due to registration status");
//         }
//     } else {
//         console.log("you are not eligible due to citizenship status");
//     }
// } else {
//     console.log("You are not eligible to vote (Younger)");
// }


// ---------------------------------------------------------------------------------------------------



//! 1: Write a program to check if a number is even or odd.



// var num = "7";
// if (num % 2 === 0) {
//   console.log("Num is even");
// } else {
//   console.log("Num is odd");
// }


// ---------------------------------------------------------------------------------------------------


//! 2: Write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.


// var num = 13;
// var isPrime = true;

// for (var i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log("Num is prime");
// } else {
//     console.log("Num is not prime");
// }



// ---------------------------------------------------------------------------------------------------


//! 3: Write a program to check if a number is positive, negative, or zero.

// var num = -10;
// if (num === 0) {
//     console.log("NUm is zero");
// } else if (num > 0) {
//     console.log("NUm is positive ");
// } else {
//     console.log("NUm is negative ");
// }


// ---------------------------------------------------------------------------------------------------



//* ===============================
//* Switch Statement
//* ===============================


// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// let opt = prompt("what operation you want to apply +,-,*,/,%")

// switch (opt) {
//     case '+':
//         console.log(num1 + num2);
//         break;
//     case '-':
//         console.log(num1 - num2);
//         break;
//     case '*':
//         console.log(num1 * num2);
//         break;
//     case '/':
//         console.log(num1 / num2);
//         break;
//     case '%':
//         console.log(num1 % num2);
//         break;
//     default:
//         console.log("you entered invalid Operator");
//         break;

// }



//?=========================
// ? Challenge time
//? ==========================



// var areaOfShapes = "square";
// var a = 5;
// var b = 10;
// switch (areaOfShapes) {
//     case "square":
//         console.log(a * a);
//         break;

//     case "rectangle":
//         console.log(a * b);
//         break;

//     case "circle":
//         var r = 2;
//         console.log(3.142 * (r * r));
//         break;

//     default:
//         console.log("No shape matches");
// }







// COMPLETED





































































