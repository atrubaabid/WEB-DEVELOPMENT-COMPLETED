//* ==========================================
//*    ECMAScript Features (2020) / ES11
//* =========================================

// ✅ BigInt
// ✅ Nullish Coalescing Operator (??)
// ✅ Optional Chaining (?.)
// ✅ Promise.allSettled()



// 1️⃣ BigInt   =>    JavaScript ka Number bohat bade numbers ko accurately store nahi kar sakta.

// console.log(Number.MAX_SAFE_INTEGER);  //9007199254740991    =>   Ye JavaScript ka maximum safe integer hai.


// bhot sy number galat print huye isliye ES11 me BigInt introduce hua.
// console.log(9007199254740992);
// console.log(9007199254740993);
// console.log(9007199254740994);
// console.log(9007199254740995);
// console.log(9007199254740996);
// console.log(9007199254740997);
// console.log(9007199254740998);



// -------------------------------------------



// BigInt kaise banate hain?

// // Method 1 (sabse easy)

// const num = 123456789012345678901234567890n;
// console.log(num);



// // Method 2
// const num2 = BigInt("123456789012345678901234567890");
// console.log(num2);



// // Type check
// console.log(typeof num);
// console.log(typeof num2);



// -------------------------------------------



// EXAMPLE 

// // get the max safe number save in js
// let maxNumber = Number.MAX_SAFE_INTEGER;
// console.log(maxNumber);

// // convert the max save number into bigint
// maxNumber = BigInt(maxNumber);
// console.log(maxNumber);


// let num = maxNumber + 9n;

// console.log(num);


// -------------------------------------------



// Important Rule ⚠️    =>    BigInt aur Number ko directly add nahi kar sakte.

// ❌ Wrong   =>   10n + 5
// ✅ Correct    =>   10n + 5n


// ===================================================================================================================


// 2️⃣ Nullish Coalescing Operator (??)       =>     Ye operator sirf null ya undefined ko check karta hai. Agar left side ki value null ya undefined ho to right side wali value use karta hai.

// // Example 1
// let name = null;
// console.log("Guest" ?? name);


// // Example 2
// let name = "Ali";
// console.log(name ?? "Guest");

// IMPORTANT Example 
// let favNum = 0;
// console.log(favNum || 10);     //Kyuki 0 falsy hota hai.


// let favNum = 0;
// console.log(favNum ?? 10);   //Sirf null aur undefined check karta hai.


// || → Falsy values check karta hai.
// ?? → Sirf null aur undefined check karta hai.


// Difference

// Value ========================||========================??=================
// 0        =>           Default use karega         0 hi use karega 
// ""        =>          Default use karega         Empty string hi use karega 
// false         =>      Default use karega         false hi use karega 
// null      =>          Default use karega         Default use karega 
// undefined     =>      Default use karega         Default use karega 



// ===================================================================================================================


// 3️⃣ Optional Chaining (?.)     =>    Ye operator tab use hota hai jab hame pata na ho ke koi property exist karti hai ya nahi.Agar property nahi mili to error nahi aata, balki undefined return hota hai.


// const person = {
//     name: "John"
// };
// console.log(person.address?.city);    // undefined


// -------------------------------------------


// const person = {
//     name: "John",
//     address: {
//         // city: 0,
//         zipCode: 12345,
//     },
// };

// // const city = person.address?.city;
// // console.log(city);


// // with the ?? Operator
// const res = person.address?.city ?? "City not present";
// console.log(res);


// -------------------------------------------


// Deeply Nested Example

// const person = {
//     address: {
//         coordinates: {
//             latitude: 40.7
//         }
//     }
// }

// console.log(person.address?.coordinates?.latitude);


// ===================================================================================================================


// 4️⃣ Promise.allSettled()    =>    Ye multiple promises ko ek sath handle karta hai.

// Sab promises complete hone ka wait karta hai. no matter its succes or fail Ye sabka result deta hai.

// const p1 = Promise.resolve("Success");
// const p2 = Promise.reject("Failed");
// const p3 = Promise.resolve("Done");

// Promise.allSettled([p1, p2, p3]).then(result => {
//     console.log(result);
// });


// -------------------------------------------


// Promise.all() vs Promise.allSettled()

// Promise.all()  =>  Agar ek bhi promise fail ho gaya to poora operation fail ho jata hai.

// Promise.all([
//     Promise.resolve("A"),
//     Promise.reject("B"),
//     Promise.resolve("C")
// ]).then(res => { console.log(res) })



// Promise.allSettled()  =>   Sab promises ka result milta hai.

// Promise.allSettled([
//     Promise.resolve("A"),
//     Promise.reject("Error"),
//     Promise.resolve("C")
// ]).then(res => {
//     console.log(res);
// })



// ===================================================================================================================





// 📌 ES11 Summary

// BigInt   =>   Bohat bade integers ko safely store aur calculate karne ke liye use hota hai.

// ?? (Nullish Coalescing)   =>   Sirf null ya undefined hone par default value use karta hai.

// ?. (Optional Chaining)   =>   Agar property ya object exist na kare to error ki jagah undefined return karta hai.

// Promise.allSettled()   =>   Sab promises ke complete hone ka wait karta hai aur har promise ka result deta hai, chahe wo success ho ya fail.



// COMPLETED