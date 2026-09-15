//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* ==========================================

// 1. findLast()

// Ye method array ko last se check karta hai aur condition ko match karne wali pehli value return karta hai.

// const numbers = [1, 2, 3, 4, 5, 6, 4];
// let result = numbers.findLast((num) => num > 4)
// console.log(result);    //6


// ===================================================================


// 2. findLastIndex()

// Ye value nahi, us value ka index return karta hai.

// const numbers = [1,2,3,4,5,6,4];
// let index = numbers.findLastIndex((num) => num > 4);
// console.log(index);     //5


// ===================================================================

// 3. toReversed()

// Ye array ko reverse karta hai. Lekin original array ko change nahi karta.

// const myNames = ["Syeda", "Atruba", "Abid", "Ali"];
// const reversed = myNames.toReversed();
// console.log(reversed);
// console.log(myNames);


// myNames.reverse();     =>  Old Method Ye original array ko bhi reverse kar deta tha.


// ===================================================================


// 4. toSorted()

// Ye array ko sort karta hai. Lekin original array ko change nahi karta.

// const myNames = ["Syeda", "Atruba", "Abid", "Ali"];
// const sorted = myNames.toSorted();
// console.log(sorted);
// console.log(myNames);


// myNames.sort();    =>   Old Method Original array bhi sort ho jata tha.


// ===================================================================


// 5. toSpliced()

// Ye splice ki tarah kaam karta hai.

// splice() → original array change karta hai.
// toSpliced() → original array ko change nahi karta.

// const myNames = ["Syeda", "Atruba", "Abid", "Ali"];
// const result = myNames.toSpliced(1, 1, "A");
// console.log(result);
// console.log(myNames);



// ===================================================================


// 6. with()

// Ye kisi ek index ki value replace karta hai. Original array change nahi hoti.

// const myNames = ["Syeda", "Atruba", "Abid", "Ali"];
// const result = myNames.with(2,"AA");
// console.log(result);
// console.log(myNames);


// ===================================================================


// 📌 ES12 Summary


// Method	            Kya karta hai?	                        Original Array Change Hoti Hai?
// findLast()	        Last se value dhoondta hai	                        ❌ No
// findLastIndex()	    Last se index dhoondta hai	                        ❌ No
// toReversed()	        Reverse karta hai	                                ❌ No
// toSorted()	        Sort karta hai                                  	❌ No
// toSpliced()	        Delete/Add/Replace karta hai                    	❌ No
// with()	            Ek index ki value replace karta hai             	❌ No


// COMPLETED













