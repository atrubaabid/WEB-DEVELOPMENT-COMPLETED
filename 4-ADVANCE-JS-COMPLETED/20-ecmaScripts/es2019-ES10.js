//* ==========================================
//*    ECMAScript Features (2019) / ES10
//* =========================================


// 1️⃣ Array.flat()   =>    nested array (array ke andar array) ko ek simple array me convert karta hai.

// const arr = [1, 2, [3, 4], 5];
// console.log(arr.flat());        //[1, 2, 3, 4, 5]


// -------------------------------------------



// Agar bohot zyada nested ho

// const arr = [1, [2, [3, [4, 0]]], 5];
// console.log(arr.flat(3));           // 3 => Matlab kitni levels tak flatten karna hai.



// ===================================================================================================================




// 2️⃣ flatMap()   =>    Pehle har item par function chalata hai, phir result ko flatten kar deta hai.


// const arr = ["My name", "is Syeda", "Atruba"];
// const result = arr.flatMap(item => item.split(" "));
// console.log(result);



// // Agar sirf map() use karte
// const result2 = arr.map(item => item.split(" "));
// console.log(result2);


// ===================================================================================================================



// 3️⃣ Object.fromEntries()   =>   Array ko object bana deta hai.


//  Object.entries()   =>   Pehle ES8 me aya tha Ye object ko array me convert karta hai.


// const person = {
//     name: "Atruba",
//     age: 20
// };
// console.log(Object.entries(person));


// // --------------------


// // Object.fromEntries()   =>   Ab ES10 me aya Ye ulta kaam karta hai.Array ko object bana deta hai.

// let entries = Object.entries(person);
// let newPerson = Object.fromEntries(entries);
// console.log(newPerson);


// // // Now Think & let me know Why 🤔,
// console.log(person == newPerson);      
// 
// //false QK dono alag objects hain. JavaScript object ko value se nahi, reference (memory address) se compare karti hai.


// ===================================================================================================================

// 4️⃣ trimStart()   =>   String ke start (left side) ki extra spaces remove karta hai.

// let text = "        Hello";
// console.log(text.trimStart());

// console.log("     Testing".trimStart());



// -------------------------------------------




// 5️⃣ trimEnd()   =>    Ye end (right side) ki spaces remove karta hai.


// let text = "   Hello      ";
// console.log(text.trimEnd());

// console.log("   Testing      ".trimEnd());



// ===================================================================================================================


// 6️⃣ Symbol.prototype.description   


// const id = Symbol("Student ID");
// console.log(id);
// console.log(id.description);


// Example

// const mySymbol = Symbol("Login Token");
// console.log(mySymbol.description);


// console.log(Symbol("text") !== Symbol("text"));    //kyunki har Symbol unique hota hai.



// ===================================================================================================================


// 7️⃣ Optional Catch Binding  

// let a = 15;
// try {
//     console.log(a);

// } catch (error) {
//     console.log(error);
// }


// ---------------------------------


// Lekin agar error object ki zarurat hi nahi

// try {
//     console.log(a);
// } catch {
//     console.log("a id not define");
// }


// ===================================================================================================================


// 📌 ES10 Summary

// flat()   =>   	Nested array ko simple array bana deta hai.
// flatMap()   =>   	map() + flat() ek saath karta hai.
// Object.fromEntries()   =>   	[key, value] array ko object bana deta hai.
// trimStart()   =>   	Left side ki extra spaces remove karta hai.
// trimEnd()   =>   	Right side ki extra spaces remove karta hai.
// Symbol.description   =>   	Symbol ka description (label) return karta hai.
// Optional catch binding   =>   	Agar error object ki zarurat na ho to catch(error) ki jagah sirf catch {} likh sakte hain.





// COMPLETED
















