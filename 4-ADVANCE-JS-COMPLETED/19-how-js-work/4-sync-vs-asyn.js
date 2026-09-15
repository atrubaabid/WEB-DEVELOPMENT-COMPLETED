//============================
// SYNC & ASYNC IN JAVASCRIPT
//============================

//* Synchronous code executes line by line, blocking further execution until each line is completed, while asynchronous code allows other code to continue executing while it waits for an asynchronous operation to complete.


// SYNCHRONOUS---------------code run line by line-------------------------------------

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");


// -------------------------------------

// const fun2 = () => {
//     console.log("fun2 starts and ends");
// };

// const fun1 = () => {
//     console.log("fun1 is start");
//     fun2();
//     console.log("fun1 ends");
// };

// fun1();





// ===================================================================================================================





// ASYNCHRONOUS--------------perform all the tasks individually-------------------------------------


// console.log("Task 1");

// setInterval(() => {

//     console.log("Task 2");
// }, 1000)

// console.log("Task 3");


// -------------------------------------


// const fun2 = () => {
//     setTimeout(() => {
//         console.log("fun2 starts and ends");
//     }, 2000);
// };

// const fun1 = () => {
//     console.log("fun1 is start");
//     fun2();
//     console.log("fun1 ends");
// };
// fun1();