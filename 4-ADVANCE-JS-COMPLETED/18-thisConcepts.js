//* ==============================
//* This Concepts
//* ==============================


// 1. this kya hai  =>  this ek keyword hai jo current object ko refer karta hai.



// const person = {
//     name: "Ali",

//     greet: function () {
//         console.log(this.name);
//         console.log(this.greet);
//     }
// };

// person.greet();



// =========================================================================================================


// now see this function

// function greet(message) {
//     console.log(`${message}, ${this.name}!`);
// }

// greet("Hello");



// yahn this.name likha hua hai. Lekin function ke andar koi object hi nahi hai. To JavaScript ko kaise pata chalega. this kis object ko refer kare? Isi problem ko solve karte hain
// call()
// apply()
// bind()



// CALL()   =>    function.call(object, arguments)


// // object{}
// const person = {
//     name: "Atruba",
// };


// // function()
// function greet(message) {
//     console.log(`${message}, ${this.name}!`);
// }


// // call()  =>  yhn person this ban jaega mtlb this ab object refer kregy or this.name ki value print hojaegi
// greet.call(person, "Hello");



// =========================================================================================================


// APPLY()   =>  function.apply(object,[arguments])

// ye bhi same call() ki trah kam kerta hy bss arguments likhny ka tareqa alg hy call me ham alg alg aruments likhty hyn lke this:
// greet.call(person, "Hello", "!");

// or apply me
// greet.apply(person, ["Hello", "!"]);



// // // object{}
// const person = {
//     name: "Atruba",
// };


// // // function()
// function greet(message) {
//     console.log(`${message}, ${this.name}!`);
// }


// // // apply()  =>  yhn person this ban jaega mtlb this ab object refer kregy or this.name ki value print hojaegi
// greet.apply(person, ["Hello"]);


// =========================================================================================================

// watch this Examples of call() and apply()


// const person = {
//     name: "Atruba",
// };

// function greet(message, punctuation) {
//     console.log(message, this.name, punctuation);
// }

// // call()
// greet.call(person, "Hello", "!")

// // apply()
// greet.apply(person, ["Hello", "!"])




// =========================================================================================================


// BIND()  =>   function.bind(object,arguments)


// object{}
// const person = {
//     name: "Atruba",
// };


// function()
// function greet(message) {
//     console.log(`${message}, ${this.name}!`);
// }


// bind()

// yhn kuch bhi print nhi hoga qk bind function ko run nhi kerta ye srf Ek naya function bana deta hai.

// greet.bind(person, "Hello");


// ab function chal jaega
// let result = greet.bind(person, "Hello");
// result()


// =========================================================================================================


// Method Borrowing => ek object apna function temporary dusre object ko de deta hy


// OBJECT 1
// const bioData = {
//     name: "personName",
//     age: 20,
//     gender: "female",

//     greet: function () {
//         console.log(
//             `Hi, I'm ${this.name}. I'm ${this.age} years old, and I identify as ${this.gender}.`
//         );
//     },
// };


// OBJECT 2
// let student = {
//     name: "Atruba",
//     age: 20,
//     gender: "female"
// }


// CALL
// bioData.greet.call(student);

//APPLY  => Difference? Koi arguments nahi hain.Isliye same output.
// bioData.greet.apply(student);

//BIND
// student = bioData.greet.bind(student);
// student()



// =========================================================================================================



// Last Example

// function greet(message) {
//     console.log(`${message}, ${this.name}!`);
// }


// const person = {
//     name: "Atruba"
// }

// // CALL
// greet.call(person, "Hello");


// // APPLY
// greet.apply(person, ["Hey"]);


// // BIND
// const anotherWay = greet.bind(person, "hello");
// anotherWay()


// COMPLETED