//========================
// HOISTING IN JAVASCRIPT
//========================

// Hoisting ka matlab hai JavaScript code chalane se pehle variables aur functions ko pehle hi dekh leti hai. Lekin sab ko ek jaisa treat nahi karti.

//Hoisting = JavaScript code chalne se pehle declarations ko memory me rakh deti hai.


// Hoisting Summary

// Declaration Type------------------------Hoisted?-----------------------Can use before declaration?

// var	                                    ✅ Yes	                    ✅ Yes (value is undefined)
// let                                  	✅ Yes	                    ❌ No (ReferenceError)
// const                                	✅ Yes	                    ❌ No (ReferenceError)
// Function Declaration                  	✅ Yes	                    ✅ Yes

// Function Expression                    	✅ Variable only            	❌ No
// (const greet = function(){})

// Arrow Function                           ✅ Variable only             ❌ No
// (const greet = () => {})



// ============================================================================================

// Example 1: Function Declaration ✅


// hello();   // =>Its run Kyunki function pehle hi memory me ready hota hai.

// function hello() {
//   console.log("Hello");
// }



// ---------------------------------------------------------------------


// Example 2: let aur const ❌

// console.log(a);   // ReferenceError  =>  Kyunki let aur const memory me to hote hain, lekin unki value baad me milti hai.

// let a = 10;



// ---------------------------------------------------------------------

// Example 3: var ✅

// console.log(a);   // undefined => Kyunki var ko pehle hi undefined value mil jati hai.

// var a = 10;


// ---------------------------------------------------------------------


// Function Declaration → Pehle bhi call ho sakti hai. ✅
// var → Pehle use kar sakte ho, output undefined aata hai. ✅
// let / const → Pehle use nahi kar sakte. ❌ (ReferenceError)



// COMPLETED