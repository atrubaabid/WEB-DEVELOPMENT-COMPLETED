//============================
// CLOSURE IN JAVASCRIPT
//============================

//? A closure is created when an inner function has access to the variables of its outer function, even after the outer function has finished executing.


// Closure JavaScript ka feature hai jisme inner function, outer function ke variables ko yaad rakhta hai, chahe outer function khatam ho chuka ho.

// Inner function apne parent function ke variables ko kabhi nahi bhoolta.



// function outerFunction() {
//     var outerVariable = "I'm from outer";

//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     return innerFunction;
// }


// var closureFunction = outerFunction();
// // console.log(closureFunction);

// console.dir(closureFunction);
// closureFunction();


// =====================================================================================



// function multiplier(factor) {
//     return function (number) {
//         console.log(number, factor);
//         return number * factor;
//     };
// }

// const double = multiplier(2);
// // console.log(double);

// console.log(double(5));



// COMPLETED