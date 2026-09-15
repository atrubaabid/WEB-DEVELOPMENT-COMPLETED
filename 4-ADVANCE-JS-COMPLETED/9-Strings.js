//* =========================================
//* String in JavaScript
//* =========================================


// const str = "Hello,    World!";
// console.log(str.length);




//* =========================================
//* Escape Character
//* =========================================



//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash



// let text = "My name is ' Syeda Atruba '  & I am a Full Stack Developer. ";
// let text = 'My name is " Syeda Atruba  " & I am a Full Stack Developer. ';
// let text = "My name is ' Syeda Atruba ' & \\ I am a \n \"Full Stack Developer\". ";

// console.log(text);



//* =========================================
//* String Search Methods
//* =========================================

// indexOf()

// let text = "Syeda Atruba";
// console.log(text.indexOf("atruba"));
// // The indexOf() method is case sensitive.
// console.log(text.indexOf("Atruba"));


// ---------------------------------------------------------------------------------------------------------------


// convert string into array


// let text = "Syeda Atruba";
// let strArr = Array.from([text]);
// let strArr1 = Array.from(text);
// console.log(strArr);
// console.log(strArr1);

// let strMap = strArr1.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);


// ---------------------------------------------------------------------------------------------------------------

//  lastIndexOf()

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // let index = text.indexOf("JavaScript");
// // let index = text.lastIndexOf("JavaScript");
// // let index = text.lastIndexOf("JavaScript", 40);
// console.log(index);


// ---------------------------------------------------------------------------------------------------------------


// search()

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// // i ka matlab hai: case-insensitive search. Yani JavaScript uppercase aur lowercase letters ka farq ignore karega.

// let result = text.search(/Javascript/i);
// console.log(result);


// ---------------------------------------------------------------------------------------------------------------

// match()


//? match() : Returns an array of the matched values or null if no match is found.


// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("Javascript");          //null
// let result = text.match("JavaScript");       //array


// let result = text.match(/Javascript/ig);

// console.log(result);


// i = Ignore case (uppercase/lowercase ka farq nahi dekhega)

// g = Global (sirf pehli nahi, jitni bhi matches hain sab return karega)


// ---------------------------------------------------------------------------------------------------------------

// matchAll()

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let matchResult = text.matchAll("javascript");
// let matchResult = text.matchAll("JavaScript");

//todo  here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end

// console.log(...matchResult);

// -------------------------------------------

// for (let item of matchResult) {
//   console.log(item[0]);
//   console.log(item.index);
//   console.log(item.input);
//   console.log(item.groups);
// }

// -------------------------------------------


// for (let index of matchResult) {
//   console.log(index.index);
// }


// -------------------------------------------


// for (let { index } of matchResult) {
//   console.log(index);
// }


// ---------------------------------------------------------------------------------------------------------------

//? includes()

// let text = "Hello JavaScript, welcome to our world best JavaScript course";


// // let includeResult = text.includes(/java/i);   //error
// let includeResult = text.includes("a");
// console.log(includeResult);


// ---------------------------------------------------------------------------------------------------------------


// startsWith()

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:


// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome");
// let result = text.startsWith("Hello");
// console.log(result);


//* start position for the search can be specified

// let result = text.startsWith("welcome", 18);   //true
// let result = text.startsWith("welcome", 17);       //false
// console.log(result);


// ---------------------------------------------------------------------------------------------------------------

// endsWith()

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:


// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome");       //true
// let result = text.endsWith("course");           //false
// console.log(result);



// ---------------------------------------------------------------------------------------------------------------


//* =========================================
//* Extracting String Parts:
//* =========================================


// slice()


// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(6);
// let result = text.slice(6, 16);
// console.log(result);


// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-6);
// console.log(result);



// ---------------------------------------------------------------------------------------------------------------


// substring()


// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(0);
// let result = text.substring(1);
// let result = text.substring(-10);    //end index not work
// console.log(result);



// ---------------------------------------------------------------------------------------------------------------



//* =========================================
//* Interview Question
//* =========================================

//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("e", "");
// let result = text.substring(1);
// ? Optional
// let result = text.replace("JavaScript", "Atruba");
// let result = text.replaceAll("JavaScript", "JS");

// console.log(result);



// ---------------------------------------------------------------------------------------------------------------



//* =========================================
//* Extracting String Characters
//* =========================================

//  charAT()

//? charAT() : The charAt() method returns the character at a specified index (position) in a string


// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.charAt(6);
// let result = text.charAt(text.length - 1);
// let result = text.charAt(-6);           //not work for end index
// console.log(result);



// ---------------------------------------------------------------------------------------------------------------

//  charCodeAt()

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// console.log(result);


// ---------------------------------------------------------------------------------------------------------------

// at()

//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as charAt().


// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-10);     //end index work in at()
// console.log(result);



//todo Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).


// ---------------------------------------------------------------------------------------------------------------

//* =========================================
//* Replacing String Content:
//* =========================================

// replace()

// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

// -----------------------------

// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/gi, "JS");
// console.log(replacedString);


// -----------------------------

// replaceAll()


// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replaceAll(/world/ig, "JS!");
// console.log(replacedString);


// ---------------------------------------------------------------------------------------------------------------

//* =========================================
//* Other Useful Methods:
//* =========================================

// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript



// ---------------------------------------------------------------------------------------------------------------

// trim()  =>   Removes whitespace from both ends of the string.



// const str = "   Hello, World!   ";
// console.log(str);
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);


// ---------------------------------------------------------------------------------------------------------------

// split() => Splits the string into an array of substrings based on a specified delimiter.


// const str = "apple,orange,banana";
// let strArr = str.split(",").reverse().join();
// console.log(strArr);



// ---------------------------------------------------------------------------------------------------------------


//* =========================================
//* //! Interview Questions
//* =========================================


//! 1: Write a JavaScript function that prints the letters 'a' to 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("A".charCodeAt(0));
// console.log("Z".charCodeAt(0));

// for (let char = 97; char <= 122; char++) {
//   console.log(String.fromCharCode(char));
// }


// -----------------------------



// for (let char = 65; char <= 90; char++) {
//   console.log(String.fromCharCode(char));
// }



// ---------------------------------------------------------------------------------------------------------------


//! 2: Write a function to count the number of vowels in a string?


// const countVowels = (str) => {
//     const vowels = "aeiou";
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// };


// console.log(countVowels("Hello a i o u world"));



// ---------------------------------------------------------------------------------------------------------------


//! 3: Write a function to check if all the vowels presents in a string or not?


// const checkAllVowelPresentOrNot = (str) => {
//     const vowels = "aeiou";
//     for (let char of vowels) {

//         if (!str.includes(char)) {
//             return "All vowels are not available";
//         }
//     }
//     return "All vowels available";
// };

// console.log(checkAllVowelPresentOrNot("aeiou"));


// ---------------------------------------------------------------------------------------------------------------


//! 4: Write a JavaScript function to check if the given sting is Pangram or not?



// const pangramChecker = (str) => {
//     let inputArr = str.toLowerCase().split("");
//     //   console.log(inputArr);
//     //   console.log("z".charCodeAt());
//     const values = inputArr.filter(
//         (curElem) =>
//             curElem.charCodeAt() >= "a".charCodeAt() &&
//             curElem.charCodeAt() <= "z".charCodeAt()
//     );
//     // console.log(values.length);

//     return new Set(values).size === 26;

//     // return [...new Set(values)].length === 26;
// };

// console.log(pangramChecker("The quick %% @ brown fox jumps ove the lazy dog"));





// COMPLETED









































