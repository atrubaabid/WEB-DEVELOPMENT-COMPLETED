//* ==========================================
//*  Promise in JavaScript
//* ==========================================

// Promise ek object hai jo batata hai ke future me koi kaam complete hoga ya fail hoga.


// 3 States of promise

// Pending  =>  Kaam chal raha hai
// Fulfilled (Resolved)  =>  Kaam successful ho gaya
// Rejected  =>  Kaam fail ho gaya


//              Create Promise
//                     │
//                     ▼
//                  Pending
//                     │
//               ┌─────┴─────┐
//               ▼           ▼
//            resolve()   reject()
//               ▼           ▼
//            .then()     .catch()


// Promise = Future me milne wala result.
// resolve() = Success.
// reject() = Error.
// .then() = Success ka result receive karta hai.
// .catch() = Error handle karta hai.
// .finally() = no matter what this must be run
// setTimeout() = Asynchronous kaam ko simulate karne ke liye use hota hai.


// Real life example:

// Socho tumne Foodpanda se pizza order kiya.
// Ab 3 possibilities hain:
// 🍕 Pizza mil gaya → Resolved
// ❌ Pizza cancel ho gaya → Rejected
// ⏳ Pizza abhi aa raha hai → Pending



// Example 1 (Success) ===================================

// let myPromise = new Promise((resolve, reject) => {
//     resolve("Data Successfully Loaded");
// });

// console.log(myPromise);


// Example 2 (Failure) ===================================

// let myPromise = new Promise((resolve, reject) => {
//     reject("Server Error");
// });

// console.log(myPromise);


// Example 3 (Pending) ===================================

// let myPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Data Loaded");
//     }, 2000);

// });

// console.log(myPromise);   // yhn promise srf pending state me print hoga qk 2sec bad dubara ye console nhi chlega tw uska result get kerny k liye hmy .then use kerna hota hy

// myPromise.then((data) => {
//     console.log(myPromise);
//     console.log(data);
// });


// ===================================================================================================================================================================




//* ==========================================
//*  .then & .catch
//* ==========================================

// .then() = Success ka result receive karta hai.
// .catch() = Error handle karta hai.




// .then() => to get the data of resolved(success) state

// let mypromise = new Promise((res, rej) => {
//     res("welcome");
// })

// mypromise.then((data) => {
//     console.log(mypromise);
//     console.log(data);

// })


// =================================================================


// .catch() =>  to get the data of rejected(error) state

// let mypromise = new Promise((res, rej) => {
//     rej("Something Went Wrong");
// })

// mypromise.catch((data) => {
//     console.log(mypromise);
//     console.log(data);
// })


// ===================================================================================================================================================================


// Success + Error Example

// let myPromise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("Login Success");
//     }
//     else {
//         reject("Login Failed");
//     }

// });

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// =============================================================


// Real Life Example

// let mark = +prompt("Enter your marks hto checj you fail or pass")

// let result = new Promise((resolve, reject) => {

//     if (mark >= 50) {
//         resolve("Congratulations your pass")
//     } else {
//         reject("your fail")
//     }


// })

// result.then((msg) => {
//     console.log(result);
//     console.log(msg);

// }).catch((err) => {
//     console.log(result);
//     console.log(err);

// })

// =============================================================


// let getData = new Promise((resolve, reject) => {

//     // setTimeout(() => {

//     //     resolve("User Data Received");

//     // }, 3000);

//     setTimeout(() => {

//         reject("User Data is not Received");

//     }, 3000);
// });

// getData
//     .then((data) => {
//         console.log(getData);
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(getData);
//         console.log(error);
//     });


// =============================================================


// THESE ALL PRESESNT TOGETHER IN THAT ONE CODE

// Promise = Future me milne wala result.
// resolve() = Success.
// reject() = Error.
// .then() = Success ka result receive karta hai.
// .catch() = Error handle karta hai.
// .finally() = no matter what this must be run
// setTimeout() = Asynchronous kaam ko simulate karne ke liye use hota hai.



// let studentName = "Atruba";
// const enrollStudent = (studentName) => {
//     return new Promise((resolve, reject) => {

//         // Simulating asynchronous enrollment process
//         setTimeout(() => {
//             const isSuccessful = Math.random() > 0.4;

//             if (isSuccessful) {
//                 resolve(`Enrollment successful for ${studentName}`);
//             } else {
//                 reject(`Enrollment failed for ${studentName}. Please try again.`);
//             }
//         }, 2000);
//     });
// };

// enrollStudent(studentName)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Enrollment process completed.");
//     });



// =============================================================
//* ==========================================
//* PROMISE-CHAINING
//* ==========================================


// let mycode = (taskNumber, time) => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task " + taskNumber)
//         }, time)

//     })

// }

// mycode(1, 1000).then((data) => {
//     console.log(data);
//     mycode(2, 1000).then((data) => {
//         console.log(data);
//         mycode(3, 1000).then((data) => {
//             console.log(data);
//             mycode(4, 1000).then((data) => {
//                 console.log(data);
//                 mycode(5, 1000).then((data) => {
//                     console.log(data);
//                     mycode(6, 1000).then((data) => {
//                         console.log(data);

//                     })

//                 })

//             })

//         })

//     })

// })





// =============================================================

//* ==========================================
//* Promise Methods
//* ==========================================

//? Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.

//? Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.

//? Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.



// const promise1 = new Promise((resolve, reject) =>
//     setTimeout(() => resolve("First"), 2000)
// );

// const promise2 = new Promise((resolve) =>
//     setTimeout(() => resolve("Second"), 2000)
// );

// const promise3 = new Promise((resolve) =>
//     setTimeout(() => resolve("Third"), 1000)
// );

// const promise4 = new Promise((resolve, reject) =>
//     setTimeout(() => reject("Failed"), 100)
// );


// Promise.all() => run only when all the promises give the success resolved output

// Promise.all([promise1, promise3, promise2])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// --------------------------------------------------------------------------

// Promise.allSettled() => run no matter the result is rejected or resolved

// Promise.allSettled([promise1, promise2, promise3, promise4])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// --------------------------------------------------------------------------



// Promise.race() => run when its get their firstly complete output no matter its resolved or rejected

// Promise.race([promise1, promise2, promise3, promise4])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.error(error);
//     });




// COMPLETED


