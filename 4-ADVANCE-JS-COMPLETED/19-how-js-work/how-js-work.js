//* =======================================
//*  How JavaScript Works?
//* ===================================


// 1. Parsing (Code ko samajhna) 📖

// JavaScript sabse pehle aapka code padhti hai aur check karti hai ke syntax sahi hai ya nahi. Agar syntax galat ho To error de degi.


// ------------------------------------------------------------------------------


// 2. Compilation (Code ko tayyar karna) ⚙️

// JavaScript code ko machine ke samajhne layak format me convert karti hai taake wo jaldi execute ho sake.

// Is process ko JIT (Just-In-Time Compilation) kehte hain.



// ------------------------------------------------------------------------------



// 3. Execution (Code chalana) ▶️

// Ab JavaScript code ko line by line chalati hai.
// Execution ke 2 Phases hote hain

// Phase 1: Creation Phase 🏗️  =>   Is phase me code run nahi hota, sirf tayari hoti hai.


// JavaScript:

// Memory banati hai.
// Variables ke liye jagah reserve karti hai.
// Functions ko memory me save karti hai.
// Hoisting isi phase me hoti hai.

// Example:
// console.log(a);             // undefined
// var a = 10;

// --------------------------------------------------------


// Phase 2: Execution Phase 🚀   =>   Ab code line by line chalta hai.


// Example:
// var a = 10;
// console.log(a);    //10


// ------------------------------------------------------------------------------

// Call Stack 📚

// Call Stack ek stack hai jo batata hai kaunsi function abhi chal rahi hai.

// function one() {
//   two();
// }

// function two() {
//   console.log("Hello");
// }

// one();


// Stack:

// one()
//  ↓
// two()
//  ↓
// console.log()

// Jab function complete hoti hai to stack se remove ho jati hai (LIFO - Last In, First Out).


// ------------------------------------------------------------------------------




// Heap Memory 📦

// Heap Memory me Objects, Arrays aur Functions store hote hain.


// ------------------------------------------------------------------------------

// Sirf itna yaad rakho ✅


// JavaScript Code
//       ↓
// 1. Parsing
// (Code ko samjha)

//       ↓
// 2. Compilation
// (Code ko machine ke liye tayyar kiya)

//       ↓
// 3. Execution
// (Code chalaya)

//       ↓
// Execution ke andar:

// Creation Phase
//       ↓
// - Memory allocate
// - Hoisting

// Execution Phase
//       ↓
// - Values assign
// - Functions execute

// Call Stack
//       ↓
// Functions ko manage karta hai.

// Heap Memory
//       ↓
// Objects aur Arrays ko store karti hai.



// JavaScript pehle code ko read karti hai (Parsing), phir usay execute karne ke liye prepare karti hai (Compilation), aur aakhir me line by line chalati hai (Execution). Execution se pehle Creation Phase me memory allocate aur hoisting hoti hai, phir Execution Phase me values assign hoti hain aur functions run hote hain.



// COMPLETED