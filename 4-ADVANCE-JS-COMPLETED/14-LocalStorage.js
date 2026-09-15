//* ==============================
//* LOCALSTORAGE IN JAVASCRIPT
//* ==============================


// LOCAL-STORAGE-METHODS------------------------------------------------------------------------------------


// 1
// Store data
// localStorage.setItem("username", "Atruba")

// 2
// get data
// console.log(localStorage.getItem("username"));


// 3
// remove specific item data from history
// localStorage.removeItem("Time");


// 4
// remove all history
// localStorage.clear();


// 5
// get key name by index
// localStorage.key(0);



// ===============================================================================================================================================================================


//  JSON.stringify()    =>    Convert Array and Objects into string for save in the local storage 




// let user = {
//     name: "Atruba",
//     isStu: true
// }

// // // OBJECT TO JSON
// let stringifyData = localStorage.setItem("object", JSON.stringify(user));

// console.log(stringifyData);             //undefined




// ===============================================================================================================================================================================




//  JSON.parse()    =>    Converted string into Array and Objects for export in js / or use for export the data exactly as it is 



// let parseData = localStorage.getItem("object")

// console.log(parseData);                     //{"name":"Atruba","isStu":true}

// // // JSON TO OBJECT
// console.log(JSON.parse(parseData));         //{name: 'Atruba', isStu: true}


// ===============================================================================================================================================================================

// PRACTICE




// let addData = document.querySelector(".addData");
// let getData = document.querySelector(".getData");
// let removeData = document.querySelector(".removeData");

// addData.addEventListener("click", () => {
//   let res=  localStorage.setItem("Name", "Atruba");
//   console.log(res);
  
// })

// getData.addEventListener("click", () => {
//   let res =  localStorage.getItem("Name");
//   console.log(res);
  
// })

// removeData.addEventListener("click", () => {
//   let res =  localStorage.removeItem("Name");
//   console.log(res);
  
// })





// ===============================================================================================================================================================================


// COMPLETED



