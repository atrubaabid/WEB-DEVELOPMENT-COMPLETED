//* ==========================================
//*    ECMAScript Features (2021) / ES12
//* =========================================


// replaceAll()
// Logical Assignment Operators (||=, &&=, ??=)
// Numeric Separators (_)
// Promise.any()


// 1. String.prototype.replaceAll()         =>     string ke har (all) matching word ko replace karta hai.


// const text = "Hello Ali, Hello Ahmed";
// const result = text.replaceAll("Hello", "Hi");
// console.log(result);
// console.log(text);


// const text = "I     love      JavaScript";
// const result = text.replaceAll(/\s+/g, " ");
// console.log(result);


// const text = "I     love      JavaScript";
// const result = text.replaceAll(/\s+/g, " ");
// console.log(result);



// ===================================================================


// 2. Logical Assignment Operators     =>   Ye operators code ko short bana dete hain.

// ||=
// &&=
// ??=


// A) ||= (OR Assignment)----------------------------------

// Agar left side Falsy ho to right side ki value assign karo.


// let x = "";
// x ||= "Guest";
// console.log(x);


// let x = "Ali";
// x ||= "Ahmed";
// console.log(x);


// B) &&= (AND Assignment)----------------------------------

// Agar left side Truthy ho tabhi right side assign hogi.

// let x = true;
// x &&= false;
// console.log(x);



// let y = 0;
// y &&= 20;       // =>   y = y && 20; 
// console.log(y);


// let y = 5;
// y &&= 20;
// console.log(y);


// C) ??= (Nullish Assignment)-------------------------------

//  ye srf null ya undefined pr assign kerta hy


// let user = null;
// user ??= "Guest";
// console.log(user);


// let age = 0;
// age ??= 18;
// console.log(age);


// ===================================================================


// 3. Numeric Separators (_)

// Bade numbers padhna mushkil hota hai. tw srf readability k liye _ Underscore use kerty hyn.


// const amount = 1_000_000;
// console.log(amount);


// const price = 99_999;
// console.log(price);



// ===================================================================

// 4. Promise.any()

// Sirf first successful (resolved) promise dekhta hai.  or ager first promise reject hogya tw usy ignore krdega



// const promise1 = new Promise((resolve, reject) =>
//     setTimeout(() => reject("Promise 1"), 200)
// );

// const promise2 = new Promise((resolve, reject) =>
//     setTimeout(() => reject("Promise 2"), 100)
// );

// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(() => reject("Promise 3"), 300)
// );

// Promise.any([promise1, promise2, promise3])
//     .then((value) => console.log(value)).catch((err) => console.log(err))


// ------------------------------------------------------


// Promise.any() vs Promise.race()


// Promise.race()     =>    Jo promise pehle complete hoga (resolve ya reject), wahi result dega.

// Promise.race([
//     Promise.reject("Error"),
//     Promise.resolve("Success")
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);

// })




// Promise.any()    =>     Sirf successful (resolved) promise dekhta hai.


// Promise.any([
//     Promise.reject("Error"),
//     Promise.resolve("Success")
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);

// })



// ===================================================================



// 📌 Short Revision

// replaceAll()     =>  	String me har matching word ko replace karta hai.
// ||=              =>      Agar left side Falsy ho to right side ki value assign karo.
// &&=              =>      Agar left side Truthy ho tabhi right side assign hogi.
// ??=	            =>      Sirf null ya undefined ho to nayi value assign karo.
// 1_000_000        =>      Sirf number ko readable banata hai.
// Promise.any()    =>  	Jo pehla successful promise ho, uska result return karta hai.
// Promise.race()   => 	    Jo promise sabse pehle complete ho (resolve ya reject), uska result return karta hai.



// COMPLETED