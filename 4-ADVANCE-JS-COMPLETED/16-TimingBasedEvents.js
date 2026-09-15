//* =========================================
//*  Timing Based Events in JavaScript
//* =========================================



//* 1. setTimeout() => run only one time after given time


// setTimeout(() => {
//     console.log("Atruba");
// }, 1000)


// -------------------------------------------------------

// function delayedFunction(x) {
//     console.log("This function was delayed by 2000 milliseconds (2 seconds).", x);
// }

// setTimeout(delayedFunction, 2000);              //undefined
// setTimeout(() => delayedFunction(5), 2000);     //run after 2s


// =========================================================================================================================================

//* 2. setInterval() => run repeatedly after given time

// let i = 0;
// setInterval(() => {
//     console.log("Atruba", i++);
// }, 1000)


// -------------------------------------------------------


// function repeatedFunction() {
//     console.log(
//         "This function will be repeated every 1000 milliseconds (1 second)."
//     );
// }

// setInterval(repeatedFunction, 1000);


// =========================================================================================================================================



// 3. clearTimeout() => Cancle the execution of setTimeout()

// function delayedFunction() {
//     console.log("This function was delayed by 2000 milliseconds (2 seconds).");
// }
// const myWork = setTimeout(delayedFunction, 2000);
// clearTimeout(myWork);



// =========================================================================================================================================




// 4. clearInterval() =>  Cancle the execution of setInterval()


// function repeatedFunction() {
//     console.log("This function repeats every 1000 milliseconds (1 second).");
// }

// const intervalID = setInterval(repeatedFunction, 1000);

// clearInterval(intervalID);


// =========================================================================================================================================


//* =========================================
//*  Challenge Time
//* =========================================


//! Write a JavaScript program that defines a function called repeatedFunction. This function should log the message "This function repeats every 1000 milliseconds (1 second)" to the console. Then, set up an interval using setInterval() to call repeatedFunction every 1000 milliseconds.  Additionally, after 5 seconds have elapsed, use setTimeout() to clear the interval previously set up. Make sure to log the message "Interval cleared after 5 seconds." when the interval is cleared.



// let repeatedFnx = () => {
//     console.log("repeated function");
// }

// let interval = setInterval(repeatedFnx, 1000)

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)



// COMPLETED


