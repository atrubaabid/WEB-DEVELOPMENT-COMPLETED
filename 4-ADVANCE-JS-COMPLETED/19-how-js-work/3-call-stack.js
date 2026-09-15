//========================
// CALL-STACK IN JAVASCRIPT
//========================


// Call Stack ek list (stack) hai jahan JavaScript ye track karti hai ke is waqt kaunsa function chal raha hai.

// Call Stack = JavaScript ka "To-Do Stack" jahan chalne wale functions temporary store hote hain.


// function firstFunction() {
//     console.log("First function");
//     secondFunction();
// }

// function secondFunction() {
//     console.log("Second function");
//     setTimeout(() => {
//         console.log(`fun2 is starting`);
//     }, 3000);
//     thirdFunction();
// }

// function thirdFunction() {
//     console.log("Third function");
// }

// firstFunction();