//* ==============================
//* Object in JavaScript
//* ==============================



//* ==============================
//* Creating Objects:
//* ==============================

// const product = {
//     id: 1,
//     pName: "laptop",
// };

// console.log(product);





// ---------------------------------------------------------------------------------------------------------------------------------



//* ==============================
//* Accessing Properties:
//* ==============================



// let person = {
//     name: "person",
//     age: 30,
//     isStudent: false,
//     greet: function () {
//         console.log("Welcome to World Best CSS Course");
//         return "the code is run"
//     },
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.greet());



// ---------------------------------------------------------------------------------------------------------------------------------


//* =================================
//* Adding and Modifying Properties:
//* =================================



// let person = {
//     name: "person",
//     age: 30,
//     isStudent: false,
//     greet: function () {
//         console.log("Welcome to World Best CSS Course");
//         return "the code is run"
//     },
// };

// person["job"] = "web dev";          //Adding
// person.job = "web dev";             //Adding
// console.log(person);



// person[`age`] = 17                        //Modifying
// person.age = 18                        //Modifying
// console.log(person);


// ---------------------------------------------------------------------------------------------------------------------------------


//* =================================
//* Methods:
//* =================================

// Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:


// let person = {
//     name: "person",
//     age: 30,
//     isStudent: false,
//     greet: function () {
//         console.log("Welcome to World Best CSS Course");
//         return "the code is run"
//     },
// };


// person.greet();



// ---------------------------------------------------------------------------------------------------------------------------------




//* ========================================
//* We can add dynamic keys in an object
//* ========================================


// let key = "city";

// let obj = {
//     [key]: "Lahore",
// };

// console.log(obj);


// -----------------------------------



// let idType = "studentId";

// let student = {
//     [idType]: "A123456", // Dynamic key based on idType
//     sName: "person",
//     sAge: 29,
//     isStudent: true,
//     greet: function () {
//         console.log(
//             `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
//         );
//     },
// };

// student.greet();

//? useCase: when we want to get the user name and value in react



// ---------------------------------------------------------------------------------------------------------------------------------


//* =================================
//* Data Modeling:
//* =================================

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.


// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2022,
//     start: function () {
//         console.log("Engine started!");
//     },
// };



// ---------------------------------------------------------------------------------------------------------------------------------





//* =====================================
//*  Interview Question
//* ======================================

//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.


//? *Passing by value*: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.


// let a = 10;
// const modifyValue = (x) => (x = 20);
// console.log(modifyValue(a));
// console.log(a);



// -----------------------------------------


//? *Passing by reference*: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.


// let obj = { id: 5, name: "kodyfier" };

// let obj1 = obj;

// obj1.name = "Atruba";
// obj1.id = 1;

// console.log(obj1);
// console.log("original", obj);



// To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator (...):


//? Object.assign() is used to copy properties from one or more source objects to a target object.



// let obj = { id: 5, name: "kodyfier" };
// let obj2 = { job: "web dev", Companyname: "codyy" };


// // we can also add like that
// // let obj1 = {};
// // let newObj = Object.assign(obj1, obj);

// let newObj = Object.assign({}, obj, obj2);

// newObj.name = "Atruba";
// newObj.id = 1;
// console.log(newObj);
// console.log("original", obj);


// ---------------------------------------------------------


// spread operator (...) is used to copy properties from one or more source objects to a target object.


// let obj = { id: 5, name: "kodyfier" };
// let obj2 = { job: "web dev", Companyname: "codyy" };

// let newObjSpread = { ...obj, ...obj2 };


// newObjSpread.name = "Atruba";
// newObjSpread.id = 1;
// console.log(newObjSpread);
// console.log("original", obj);




// ---------------------------------------------------------------------------------------------------------------------------------

//* =====================================
//* Comparison by Reference:
//* ======================================



// const obj1 = { name: "Rida" };
// const obj2 = { name: "Rida" };
// const obj3 = obj1;

// // const isEqual = obj1 == obj2 ? true : false;
// // const isEqual = obj1 == obj2 ? true : false;       //false
// const isEqual = obj1 == obj3 ? true : false;          //true
// console.log(isEqual);



// ---------------------------------------------------------------------------------------------------------------------------------



//* =====================================
//* JSON (JavaScript Object Notation):
//* ======================================


// let student = {
//     id: 1,
//     sName: "Atruba",
//     sAge: 20,
//     isStudent: false,
//     greet: function () {
//         console.log(
//             `hey my id is ${student.id} & my name is ${student.sName}`
//         );
//     },
// };


// JSON.stringify()   =>   convert js to string
// let jsonData = JSON.stringify(student);
// console.log(jsonData);

// JSON.parse   =>   convert string to js
// let parsedObject = JSON.parse(jsonData);
// console.log(parsedObject);


//* =====================================
//* "this" Object
//* ======================================

//? In JavaScript, the this keyword refers to an object.

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.



// 1. Object Method me  =>   this refers to the object

// const obj = {
//     name: "Atruba",

//     greet: function () {
//         console.log(this);
//         console.log(this.name);
//     },
// };

// obj.greet();


// ---------------------------------------------------------


// 2. Arrow Function  =>   arrow function me this obj return nh kerta this refers to the global object.

// const obj = {
//     name: "Atruba",

//     greet: () => {
//         console.log(this);
//         console.log(this.name);
//     }
// };

// obj.greet();


// ---------------------------------------------------------


// 3. Function ke andar  =>   In a function, this refers to the global object.

// function callme() {
//     console.log(this);
// }

// callme();


// ---------------------------------------------------------


// 4. Strict Mode  =>  In a function, in strict mode, this is undefined.


// "use strict";

// function callme() {
//     console.log(this);
// }

// callme();


// ---------------------------------------------------------


// 5. Alone this  =>  Alone, this refers to the global object.

// console.log(this);



// ---------------------------------------------------------


// 7. Event me this  =>  In an event, this refers to the element that received the event

// let button = document.querySelector("button")
// button.addEventListener("click", function () {
//     console.log(this);

// })


// ---------------------------------------------------------



// Methods like call(), apply(), and bind() can refer this to any object.


// 18-thisConcepts.js  => watch this for this concepts


// ---------------------------------------------------------------------------------------------------------------------------------



//* =====================================
//* Objects Useful Methods
//* ======================================


// const product = {
//     id: 1,
//     name: "Laptop",
//     category: "Computers",
//     brand: "ExampleBrand",
//     price: 999.99,
//     stock: 50,
//     description:
//         "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
//     image: "image link will be added during projects",
// };


// 1: Object.keys()  =>  Returns an array of the object's keys

// let keys = Object.keys(product);
// console.log(keys);


// ---------------------------------------------------------



// 2: Object.values()  =>  Returns an array of the object's value

// let value = Object.values(product);
// console.log(value);


// ---------------------------------------------------------



// 3: Object.entries()  =>  Returns an array of key-value pairs for an object.

// let entries = Object.entries(product);
// console.log(entries);


// ---------------------------------------------------------


// 4: Object.hasOwnProperty()  =>  Checks if an object has a specific property directly on itself and give boolean value.


// console.log(product.hasOwnProperty("name")); // Output: true
// console.log(product.hasOwnProperty("isStudent")); // Output: false


// ---------------------------------------------------------


// 5: Object.assign()  =>  Copies properties from one or more objects into a target object.

// const target = { a: 1, b: 5 };
// const source = { b: 3, c: 4 };
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }


// ---------------------------------------------------------


// 6: Object.freeze()  =>   Locks an object so its properties cannot be added, changed, or deleted.

// Object.freeze(product);
// product.id = "5656";
// console.log(product);



// ---------------------------------------------------------



//* =====================================
//* Interview Question - Objects
//* ======================================

//! 1: What will be the output?

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const mergedObject = Object.assign({}, target, source);
// console.log(mergedObject);



//* ===============================================
//* Interview Question - Object Manipulation:
//* ================================================

//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?



// let student = {
//     name: "Bob",
//     age: 20,
//     grades: {
//         math: 90,
//         science: 85,
//         history: 88,
//     },
// };


// const addSubjectGrade = (student, subject, marks) => {
//     if (!student.grades) {
//         student.grades = {};
//     }

//     return (student.grades[subject] = marks);
// };

// addSubjectGrade(student, "computer", 92);
// console.log(student);


//* ===============================================
//* Interview Question - Object Comparison:
//* ================================================

//! Problem: Write a function that compares two objects to determine if they have the same properties and values.


// const areObjectsEqual = (obj1, obj2) => {
//     //   if (obj1.length != obj2.length) {
//     //     console.log("hi");
//     //     return false;
//     //   }
//     let o1 = Object.keys(obj1);
//     let o2 = Object.keys(obj2);

//     if (o1.length != o2.length) {
//         console.log("There keys are not same");
//         return false;
//     }

//     for (let key in obj1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }

//     return true;
// };

// // // Example usage:
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false


//* ===============================================
//* Interview Question - Object Transformation:
//* ================================================

//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.


// let inputArray = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" },
// ];

// const arrayToObj = (arr) => {
//     let obj = {};
//     for (let key of arr) {

//         // console.log(key.id, key);
//         obj[key.id] = key;
//     }
//     return obj;
// };

// console.log(arrayToObj(inputArray));



// Should print: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }



// COMPLETED
