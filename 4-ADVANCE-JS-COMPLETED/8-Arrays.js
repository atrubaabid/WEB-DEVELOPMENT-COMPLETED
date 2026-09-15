//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================



//* ======================================
//*  Creating Arrays:
//* =====================================


//? Using Array constructor
// let fruits = new Array('apple', 'orange', 'banana')
// console.log(fruits);



//? Using array literal
// let fruits2 = ["apple", "orange", "banana"];
// console.log(fruits2);



//? we can also create an empty array
// let arr = [];
// console.log(typeof arr);



//* ======================================
//*  Accessing Elements:
//* =====================================


// let fruits = ["apple", "orange", "banana"];
// console.log(fruits[2]);
// console.log(fruits[fruits.length - 1]);




//* ======================================
//*  Modifying Elements:
//* =====================================

// let fruits = ["apple", "orange", "banana"];
// fruits[2] = "mango";
// console.log(fruits);



//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================

// USING FOR OF LOOP

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// for (let item of fruits) {
//     console.log(item);
// }



// ----------------------------------------


// USING FOR LOOP



// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }



// ----------------------------------------

// USING FOR IN LOOP



// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// for (let item in fruits) {
//     console.log(item, fruits[item]);
// }



// ----------------------------------------

// USING FOR-EACH METHOD


//use for Dom manipulation




// let fruits = ["apple", "orange", "mango", "grapes", "banana"];



// const myForEachArr = fruits.forEach((curElem, index, arr) => {

//     // return `${curElem} nnn ${index}`;       //foreach kuch return nhi kerta undefined deta hy 
//       console.log(curElem);
//       console.log(index);
//       console.log(arr);
// });


// console.log(myForEachArr);   // that's not work for forEach



// ----------------------------------------



// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// fruits.forEach((item, index, arr) => {
//     // console.log(item);
//     // console.log(index);
//     // console.log(arr);
//     // console.log(`${item} ${index} ${arr}`);
//     // console.log(item, index, arr);


// })


// ----------------------------------------



// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// let res = fruits.forEach((item, index, arr) => {
//     return `${item} ${index} ${arr}`;

// })

// //foreach kuch return nhi kerta undefined deta hy that's why console not work for forEach


// console.log(res);


// =================================================================================================================================================================================


// USING MAP METHOD


//use for Dom manipulation and make new array 



// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// const myMapArr = fruits.map((curElem, index, arr) => {
//     // console.log(curElem);
//     return ` my fav fruit is ${curElem} ${index}`;

//     //   console.log(arr);
// });

// console.log(myMapArr);




// =================================================================================================================================================================================




//! write a program to Multiply each element with 2
// // forEach -  Performs an action on each element
// // map -  Creates a new array with transformed elements


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((item, index) => {
//     console.log(item * 2);

// })


// ----------------------------------------



// let res = numbers.map((item, index) => {
//     // console.log(item * 2);
//     return item * 2;

// })

// console.log(res);


//* Use Case:
//? forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.

//? map: Used when you want to create a new array based on the transformation of each element in the original array.


//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD)
//* ==========================================================================


// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// // ? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava"));
// console.log(fruits);
// // The push() method returns the new length.


// // ? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop());
// console.log(fruits);


// // ? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava"));
// console.log(fruits);


// // ? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift());
// console.log(fruits);


//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements
//* ==========================================================================


// let fruits = ["apple", "orange", "banana", "mango"];
// console.log(fruits.splice(1, 1, "grapes"));  //returns remove value
// console.log(fruits);

//! what if you want to add the element at the end
// fruits.splice(-1, 0, "grapes");
// fruits.splice(1, 0, "grapes");
// console.log(fruits);



//* =========================================
//*  Searching in an Array
//* =========================================


//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.


// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// console.log(numbers.indexOf(6));       //4
// console.log(numbers.indexOf(6, 5));    //6
// console.log(numbers.indexOf(11, 5));    //-1    cz its not found



// ----------------------------------------


//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.


// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.indexOf(6);
// console.log(result);        //3
// const result1 = numbers.lastIndexOf(6);
// console.log(result1);       //6
// const result3 = numbers.indexOf(6, 5);
// console.log(result3);       //6
// const result4 = numbers.lastIndexOf(6, 4);
// console.log(result4);       //3



// ----------------------------------------


//? 3: The includes method checks whether an array includes a certain element, returning true or false.

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(5);
// console.log(result);        //true

// const result1 = numbers.includes(5, 6);
// console.log(result1);       //false



// ----------------------------------------

//todo Challenge time
//? 1: Add Dec at the end of an array?
//? 2: What is the return value of splice method?
//? 3: Update march to March (update)?
//? 4: Delete June from an array?


// const months = ["Jan", "march", "April", "June", "July"];
// // 1
// console.log(months.splice(months.length, 0, "Dec"));
// console.log(months);
// // 2
// // // When used to add elements, the splice method returns an empty array ([]).
// // 3
// console.log(months.splice(1, 1, "March"));
// console.log(months);
// // 4
// console.log(months.splice(3, 1));
// console.log(months);



//* =========================================
//*  Filter in an Array
//* =========================================

// FIND METHOD

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.


// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// const result = numbers.find((curElem) => {
//     return curElem > 6;
// });

// console.log(result);  //7



// ----------------------------------------



// FINDINDEX METHOD

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.map((curElem) => curElem * 5);
// console.log(result);  //[5, 10, 15, 20, 25, 30, 35, 40, 45]

// const result2 = result.findIndex((curElem) => {
//     return curElem > 20;
// });
// console.log(result2);   // 4


// ----------------------------------------


//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.filter((curElem) => {
//   return curElem > 4;
// });

// console.log(result);  // Output: [5, 6, 7, 8, 9]



// ----------------------------------------



// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.


// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let updatedCart = numbers.filter((curElem) => {
//     return curElem !== value;
// });

// console.log(updatedCart);


// ----------------------------------------


// // !Example 2: Filtering Products by Price

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

// // Filter products with a price less than or equal to 500

// const filterProducts = products.filter((curElem) => {
//   return curElem.price <= 500;
// });
// console.log(filterProducts);



// ----------------------------------------

//! Filter unique values

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 6, 8, 9];
// let uniqueValues = numbers.filter((curElem, index, arr) => {
//     // console.log(index);
//     // console.log(arr.indexOf(curElem));
//     return arr.indexOf(curElem) === index;
// });
// console.log(uniqueValues);

// console.log([...new Set(numbers)]);   //Duplicate values hata kar naya array return karta hai.


// ----------------------------------------



//* =========================================
//*  How to Sort and Compare an Array
//* =========================================


// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];
// console.log(fruits.sort());
// console.log(numbers.sort());



// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1     // => switch the order
//  if(b>a) return -1  // => keep the order

// numbers.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// console.log(numbers);

//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
// });

//? For descending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });


// ----------------------------------------

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),


// MAP()

// const numbers = [1, 2, 3, 4, 5];
// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result);


// ----------------------------------------




//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.


// const words = ["apple", "banana", "cherry", "date"];

// const result = words.map((curElem) => {
//     let firstLetter = curElem[0].toUpperCase() + curElem.slice(1);
//     return firstLetter
// });

// console.log(result);



// ----------------------



// const result = words.map((curElem) => {
//   return curElem.toLowerCase();
// });

// console.log(result);


// ==========================================================================================================================================

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.



// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];

// const result = numbers.map((curElem) => {
//     if (curElem % 2 === 0) {
//         return curElem * curElem;
//     }
// })
//     .filter((curElem) => curElem !== undefined);

// console.log(result);



// ----------------------


// const evenSquare = numbers.map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined))
//     .filter((curElem) => curElem !== undefined);

// console.log(evenSquare);




// ==========================================================================================================================================


//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".


// const names = ["ram", "vinod", "laxman"];
// const prefixName = names.map((curName) => `Mr. ${curName}`);
// console.log(prefixName);




// ==========================================================================================================================================

// REDUCE METHOD

// give only one solved answer in one value

// const productPrice = [100, 200, 300, 400, 500];

// const totalPrice = productPrice.reduce((accum, curElem) => {
//     return accum + curElem;
// });

// console.log(totalPrice);









































































