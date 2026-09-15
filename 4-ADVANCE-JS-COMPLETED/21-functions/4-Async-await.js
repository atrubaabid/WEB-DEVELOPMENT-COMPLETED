//* ================================
//*  ASYNC AWAIT
//* ================================

// async aur await JavaScript ka promises ko easy tareeqe se handle karne ka syntax hai. Is se code zyada readable ho jata hai.

// async also return a promise


// Promise =>  Future me milne wali value.
// async =>  Function ko Promise-returning function bana deta hai.
// await =>  Promise ke complete hone tak wait karta hai, phir uski resolved value de deta hai.
// try{} = Success ka result receive karta hai.
// catch(){} = Error handle karta hai.







// WITH PROMISES

// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Loaded");
//         }, 2000);
//     });
// }

// function showData() {
//     console.log("1. Start");

//     getData()
//         .then((result) => {
//             console.log(result);
//             console.log("2. End");
//         })

// }

// showData();


// ==================================================================================


// WITH ASYNC-AWAIT

// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Loaded");
//         }, 2000);
//     });
// }

// async function showData() {
//     console.log("1. Start");
//     let result = await getData();
//     console.log(result);
//     console.log("2. End");
// }

// showData();


// ====================================================================================================================================================================

//  ASYNC-AWAIT another example

// let homeWorkDone = (sub) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${sub} work Completed`)
//         }, 1000)
//     })
// }

// WITH ASYNC-AWAIT
// async function workDone() {
//     let task1 = await homeWorkDone("English");
//     console.log(task1);
// }
// workDone()



// ------------------------------------------------------



// WITH PROMISES
// function workDone() {
//     homeWorkDone("English").then((data) => {
//         console.log(data);
//     })
// }
// workDone()



// ====================================================================================================================================================================





// WITH PROMISE .THEN AND .CATCH

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data Loaded");
//         }, 2000);
//     });
// }

// getData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// ------------------------------------------------------


//* ================================
//*  try  & catch => Error-handling
//* ================================


// WITH ASYNC-AWAIT TRY AND CATCH

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data Loaded!");
//         }, 2000);
//     });
// }

// async function showData() {
//     try {
//         let result = await getData();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// showData();


// COMPLETED


