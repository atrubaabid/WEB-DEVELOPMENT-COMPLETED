//=================
// 2. DATA TYPES
//=================





// PRIMITIVE DATA TYPES

// let a = 10;                      //number
// let b = "Atruba"                   //string
// let c = true;                     //boolean
// let d;                              //undefined
// let e = null;                     //null, types of object
// let f = 123456790127890n;          //BigInt
// let g = Symbol("qweerty");         //symbol



// console.log(a, typeof (a));
// console.log(b, typeof (b));
// console.log(c, typeof (c));
// console.log(d, typeof (d));
// console.log(e, typeof (e));
// console.log(f, typeof (f));
// console.log(g, typeof (g));


// ---------------------------------------------------------------

// PRACTICE


//  Convert a string to a number?

// var myFavNum = "10";
// console.log(typeof +myFavNum);
// console.log(typeof Number(myFavNum));


// ---------------------------------------------------------------


// Convert a number to a string?

// var str = 5;
// console.log(typeof String(str));


// ---------------------------------------------------------------


// Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓
//* In JavaScript, values are either considered "truthy" or "falsy" when evaluated in a boolean context.



//? Truthy values are treated as true when used in conditions. Examples include:

// 👉 true
// 👉 Any non-empty string ("hello")
// 👉 Any non-zero number (42)
// 👉 Arrays and objects, even if they're not empty

// Falsy values are treated as false in boolean contexts. Examples include:

// 👉 false
// 👉 0 (zero)
// 👉 '' (an empty string)
// 👉 null
// 👉 undefined
// 👉 NaN (Not a Number)





// if ("hello") {
//     console.log("True✅");

// } else {
//     console.log("False");

// }




// if ("") {
//     console.log("True");

// } else {
//     console.log("False✅");

// }


// ---------------------------------------------------------------

//* ========== parseInt & parseFloat Section ==========

// parseInt

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

// parseFloat

// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5



// // ! Here are more examples
// console.log(parseInt("123"));
// // 123 (default base-10)
// console.log(parseInt("123", 10));
// // 123 (explicitly specify base-10)
// console.log(parseInt("   123 "));
// // 123 (whitespace is ignored)
// console.log(parseInt("077"));
// console.log(parseFloat("077"));
// // 77 (leading zeros are ignored)
// console.log(parseInt("1.9"));
// +console.log(parseFloat("1.9"));
// // 1 (decimal part is truncated)
// console.log(parseInt("-123"));



// // ! When we will not get an Output
// console.log(parseInt("&123"));
// console.log(parseInt("xyz"));
// // NaN (input can't be converted to an integer)


// ---------------------------------------------------------------


//? What is the purpose of the NaN value in JavaScript❓
//? NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
//? Also, to check whether a value is number or not we can use isNaN() function.


// console.log(isNaN("Atruba"));
// console.log(parseInt("xyz"));
// console.log(parseInt("@#$"));



// //! NaN === NaN, Why is it false ❓


// if (NaN == NaN) {
//   console.log("both are equal ");
// } else {
//   console.log("not equal");
// }



// COMPLETED








