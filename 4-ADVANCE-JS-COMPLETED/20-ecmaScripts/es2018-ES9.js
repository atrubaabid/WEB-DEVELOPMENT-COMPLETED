//* ==========================================
//*    ECMAScript Features (2018) / ES9
//* =========================================

// ES9 allows Rest and Spread operators to work with objects too.

//? Object and Rest Operator
// const student = {
//     age: 10,
//     name: "Atruba",
//     isStudent: true,
// };

// // age is extracted, and the remaining properties are stored in others.

// const { age, ...others } = student;
// console.log(age);
// console.log(others);


// -------------------------------------------

//? Object and Spread operator

// const obj1 = { a: 10, b: 20, c: 50 };
// const obj2 = { c: 30, d: 40 };

// // Both objects are merged, and if the same key exists, the value from the last spread object (obj1) is used.

// const newObj = { ...obj2, ...obj1 };
// console.log(newObj);


// -------------------------------------------



// Promise.finally()

// finally() runs after a Promise finishes, whether it is successful or failed.



// -------------------------------------------


// COMPLETED