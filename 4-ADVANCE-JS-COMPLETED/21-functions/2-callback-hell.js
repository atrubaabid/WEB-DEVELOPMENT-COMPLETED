//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.


// let alltasks = () => {
//     setTimeout(() => {
//         console.log("Task 1");
//         setTimeout(() => {
//             console.log("Task 2");
//             setTimeout(() => {
//                 console.log("Task 3");
//                 setTimeout(() => {
//                     console.log("Task 4");
//                     setTimeout(() => {
//                         console.log("Task 5");
//                         setTimeout(() => {
//                             console.log("Task 6");
//                             setTimeout(() => {
//                                 console.log("Task 7");
//                                 setTimeout(() => {
//                                     console.log("Task 8");
//                                     setTimeout(() => {
//                                         console.log("Task 9");
//                                         setTimeout(() => {
//                                             console.log("Task 10");
//                                         }, 1000)

//                                     }, 1000)

//                                 }, 1000)

//                             }, 1000)

//                         }, 1000)

//                     }, 1000)

//                 }, 1000)

//             }, 1000)

//         }, 1000)

//     }, 1000)
// }


// alltasks()




// COMPLETED