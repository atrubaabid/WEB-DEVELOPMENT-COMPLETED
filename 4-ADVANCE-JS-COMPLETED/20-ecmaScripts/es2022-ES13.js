//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================


// .at()
// Object.hasOwn()


// 1. .at() Method          =>      array ya string se kisi bhi index ki value nikalta hai.


// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]);      //Apple


// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.at(0));           //Apple


// Positive Index
// const numbers = [10, 20, 30, 40];
// console.log(numbers.at(2));


// Negative Index
// const numbers = [10, 20, 30, 40];
// console.log(numbers.at(-1));

// -----------------------------------------------------


// .at() with strings

// const name = "JavaScript";
// console.log(name.at(0));
// console.log(name.at(-1));




// ===================================================================================================================================


// 2. Object.hasOwn()      =>   property ko object me find kerta hy true or false result return kerta hy


// const book = {
//     name: "World Best JS Course",
//     author: "Thapa Technical"
// };

// console.log(Object.hasOwn(book, "name"));       //true
// console.log(Object.hasOwn(book, "price"));      //false






// firstly we use  Object.hasOwnProperty();  Qk ismy ager object.create method k through ager koi property assign kro tw vo find nhi kerta false result deta hy


// const student = Object.create(null);
// student.name = "Atruba";
// // console.log(student.hasOwnProperty("name"));       //ERROR
// // console.log(Object.hasOwn(student, "name"));      //True



// ===================================================================================================================================
    

// COMPLETED