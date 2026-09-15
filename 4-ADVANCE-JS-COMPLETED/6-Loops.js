//* ===============================
// LOOPS
//* ===============================




//* ===============================
// WHILE LOOP
//* ===============================



// var num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }


// ---------------------------------------------


// var num = 1;
// while (num <= 10) {
//     console.log("5 * " + num + " = " + 5 * num);
//     //   console.log(`5 * ${num} = ${5 * num}`);
//     num++;
// }



// ================================================================================================================================================================================================================================================================================================================================



//* ===============================
// DO-WHILE LOOP
//* ===============================





// var num = 1;
// do {
//     console.log(num);
//     num++;
// } while (num <= 10)


// ---------------------------------------------


// let userInput;
// let positiveNumber;
// do {
//     userInput = prompt("enter any positive number");
//     positiveNumber = parseFloat(userInput);
// } while (isNaN(positiveNumber) || positiveNumber < 0);
// console.log("You entered a valid positive number:", positiveNumber);



// ================================================================================================================================================================================================================================================================================================================================



//* ===============================
// FOR LOOP
//* ===============================



// for (var num = 1; num <= 10; num++) {
//     console.log(num);
// }




// ---------------------------------------------




//* The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {}.

//* use case: Game Development:
//? In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.




// for (; ;) {
//     // Update game logic and render frames
// }



// ---------------------------------------------


// var sum = 0;
// debugger;                    // can see the iteration
// for (var num = 1; num <= 10; num++) {
//     var sum = sum + num;
// }
// console.log(sum);


// ---------------------------------------------


// for (var num = 1; num <= 10; num++) {
//   console.log("5 * " + num + " = " + 5 * num);
// }


// ---------------------------------------------


//!1: program To check if a year is a leap year🧑‍💻
//? If a year is divisible by 4 and not divisible by 100, or
//? If a year is divisible by 400,
// then it is a leap year. Otherwise, it is not a leap year.


// var year = 2020;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(year, "it's a leap year");
// } else {
//     console.log(year, "it's not a leap year");
// }


// ---------------------------------------------


// for (var i = 1; i <= 5; i++) {
//     var pattern = "";
//     for (var j = 1; j <= i; j++) {
//         pattern = pattern + " *";
//     }
//     console.log(pattern);
// }






// COMPLETED
