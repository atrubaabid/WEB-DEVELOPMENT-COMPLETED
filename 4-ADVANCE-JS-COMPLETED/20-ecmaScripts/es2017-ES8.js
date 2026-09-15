//* ==========================================
//*    ECMAScript Features (2017) / ES8
//* =========================================

// ES8 me JavaScript me kuch naye features add huye jo coding ko easy, clean aur readable banate hain.


// 1. String Padding  =>   ➡️ String Padding ka matlab hai string ke start ya end me extra characters ya spaces add karna taake string ki length fixed ho jaye.

// let name = "Ali";
// console.log(name.padStart(6));
// console.log(name.padStart(6, "*"));

// -------------------------------------------



// 2. padEnd()  =>  String ke end (right side) me spaces ya koi character add karta hai.

// let name = "Ali";
// console.log(name.padEnd(6,));
// console.log(name.padEnd(6, "*"));



// Original String

// ➡️ padStart() aur padEnd() original string ko change nahi karte, balki new string return karte hain.


// ===================================================================================================================

// 3. Trailing Commas  =>  Last item ke baad comma , lagana Trailing Comma kehlata hai. Ye error nahi deta aur future me new items add karna easy ho jata hai.

// // Function Parameters
// function greet(name, age, ) {
// console.log(name);
// console.log(age);
// }

// greet("Ali", 20, );


// // Array
// const colors = [
//   "Red",
//   "Green",
//   "Blue",
// ];
// // Last comma allowed hai.


// // Object
// const person = {
//   name: "Ali",
//   age: 20,
// };
// // Last comma allowed hai.


// Use Case  =>  ➡️ Jab baad me new value add karni ho to code edit karna easy ho jata hai aur Git me unnecessary changes bhi kam hote hain.



// ===================================================================================================================

// 4. Object.values()  =>  Object ki sirf values ko array ki form me return karta hai.

// const person = {
//     name: "Ali",
//     age: 20
// };

// console.log(Object.values(person));


// ===================================================================================================================

// 5. Object.entries()  =>  Object ki key aur value dono ko array ki form me return karta hai.

// const person = {
//   name: "Ali",
//   age: 20
// };

// console.log(Object.entries(person));


// ===================================================================================================================


// 6. Async Await (Async Functions)   =>   async aur await asynchronous code ko simple aur synchronous jaisa likhne ke liye use hote hain.

// async   =>   Kisi function ko asynchronous banata hai.


// async function getData(){

// }


// await   =>   Promise complete hone tak wait karta hai, phir next line chalti hai.

// let data = await fetch(url);   // =>  "Pehle data aane ka wait karo, phir agla code chalao."


// ===================================================================================================================





// 📌 Short Revision
// String Padding → String ke start ya end me extra spaces/characters add karna.
// padStart() → Left side me add karta hai.
// padEnd() → Right side me add karta hai.
// Trailing Comma → Last item ke baad comma lagana.
// Object.values() → Sirf values return karta hai.
// Object.entries() → Keys aur values dono array me return karta hai.
// async → Function ko asynchronous banata hai.
// await → Promise complete hone ka wait karta hai.


// ===================================================================================================================


// COMPLETED




