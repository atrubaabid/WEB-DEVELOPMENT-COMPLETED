//========================
// SCOPE IN JAVASCRIPT
//========================

// Scope ka matlab hai Variable ko kahan se access (use) kiya ja sakta hai.



// 1. Global Scope 🌍   =>    Jo variable function ya block ke bahar banaya jaye, usay Global Variable kehte hain.

// let name = "Ali";

// function show() {
//     console.log(name);
// }

// show();
// console.log(name);


// ✅ Global variable ko har jagah use kar sakte hain.


// --------------------------------------------------------------------------------------------------------------------------------------------------


// 2. Function Scope 🔧   =>   Jo variable function ke andar banaya jaye, wo sirf usi function ke andar use hoga.


// function show() {
//     let age = 20;
//     console.log(age);
// }

// show();

// console.log(age);           // ReferenceError: age is not defined


// ✅ age sirf function  ke andar use ho sakta hai.


// --------------------------------------------------------------------------------------------------------------------------------------------------


// 3. Block Scope 📦   =>   Jo variable {} ke andar let ya const se banaya jaye, wo sirf us block ke andar chalega.


// if (true) {
//   let city = "Lahore";
//   console.log(city);
// }

// console.log(city);              // ReferenceError: city is not defined


// ✅ city sirf if block ke andar use ho sakta hai.



// --------------------------------------------------------------------------------------------------------------------------------------------------




//* -------------------------
// * Lexical Scoping 📍
//* -------------------------


// Lexical Scope ka matlab Variable jahan declare hota hai, usi jagah se uska scope decide hota hai.


// let a = 10;

// function show() {
//     console.log(a);
// }

// show();


// show() ke andar a nahi hai, isliye JavaScript bahar dekh kar a ko use kar leti hai.


// --------------------------------------------------------------------------------------------------------------------------------------------------




//* -------------------------
//  * Scope Chaining 🔗
//* -------------------------

// Scope Chaining ka matlab JavaScript variable ko pehle current scope me dhoondti hai. Agar na mile to outer scope me dekhti hai. Ye process Global Scope tak chalta hai.

// let a = 10;

// function one() {
//     function two() {
//         console.log(a);
//     }

//     two();
// }

// one();


// JavaScript aise search karti hai:

// two()
//    ↓
// one()
//    ↓
// Global Scope ✅


// --------------------------------------------------------------------------------------------------------------------------------------------------

//! ------------------------------
// ! Interview Question
//! -----------------------------



// const globalVariable = "I'm a global variable";

// function myFunction() {
//     const functionVariable = "I'm a function variable";

//     if (true) {
//         const blockVariable = "I'm a block variable";
//         console.log(blockVariable); // ✅
//         console.log(globalVariable);   // ✅
//         console.log(functionVariable); // ✅


//     }

//     console.log(functionVariable); // ✅
//     console.log(globalVariable);   // ✅
//     console.log(blockVariable);    // ❌ Error
// }

// myFunction();



// --------------------------------------------------------------------------------------------------------




// let name = "Syeda Atruba";

// function outerFunction() {
//     let outerVar = " from outerFunction";

//     function innerFunction() {
//         var innerVar = " from innerFunction"; // global variable too
//         let innerBlockVar = "block -  from InnerFunction too";

//         console.log(
//             `My name is ${name}, I am  calling ${outerVar}, also ${innerVar} & from  ${innerBlockVar}`
//         ); // Access outerVar from the outer scope
//     }

//     innerFunction();

//     console.log(`My name is ${name}, I am  calling ${outerVar} `); // will work

//     // console.log(`My name is ${name}, I am  calling ${outerVar} also ${innerVar}`);        // will not work

//     // console.log(`${outerVar}, ${innerVar} , ${innerBlockVar}`);       // will not work
// }

// outerFunction();





// COMPLETED