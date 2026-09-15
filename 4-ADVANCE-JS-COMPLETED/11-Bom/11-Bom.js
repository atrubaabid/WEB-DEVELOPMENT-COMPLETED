//* =========================================
//* BOM Properties:
//* =========================================


//* =========================================
// 1. WINDOW PROPERTIES
//* =========================================


// PROPERTY	            USE CASE

// window---------------Main browser object
// innerWidth ----------Website area ki width
// innerHeight----------Website area ki height
// outerWidth-----------Pura browser width
// outerHeight----------Pura browser height
// scrollX--------------Left/Right scroll
// scrollY--------------Up/Down scroll
// localStorage---------Permanent data save
// console--------------Console me print
// alert()--------------Message popup
// confirm()------------OK/Cancel popup
// prompt()-------------User se input lena


// -----------------------------------------------------------------------------------



// 1. window

// console.log(window);


// -----------------------------------------


// 2. window.console


// console.log("Hello");
// window.console.log("Hello");


// -----------------------------------------



// 3. window.innerWidth  =>  Browser ke andar wali area ki width batata hai.

// console.log(window.innerWidth);



// -----------------------------------------



// 4. window.innerHeight  =>  Browser ke andar wali area ki height batata hai.

// console.log(window.innerHeight);



// -----------------------------------------


// 5. window.outerWidth  =>   Pure browser window ki width.

// console.log(window.outerWidth);


// -----------------------------------------



// 6. window.outerHeight  =>   Pure browser ki height.

// console.log(window.outerHeight);


// -----------------------------------------

// 7. window.scrollX  =>  Page ko left ya right kitna scroll kiya.


// console.log(window.scrollX);


// -----------------------------------------



// 8. window.scrollY  => Page ko upar se niche kitna scroll kiya.

// console.log(window.scrollY);


// -----------------------------------------

// 9. window.localStorage  =>  Browser me data permanently save karta hai.


// FOR SAVE
// localStorage.setItem("name", "Ali");

// FOR GET
// console.log(localStorage.getItem("name"));

// FOR DELETE
// localStorage.removeItem("name");

// FOR DELETE ALL
// localStorage.clear();


// -----------------------------------------

// 10. alert() => Sirf message dikhata hai.

// alert("Welcome");

// -----------------------------------------


// 11. confirm()  =>  User se Yes/No poochta hai.

// let ans = confirm("Delete file?");
// console.log(ans);


// -----------------------------------------


// 12. prompt()  =>  User se input leta hai.


// let name = prompt("Enter your name");

// console.log(name);


// ================================================================================================================================================================================================================

//* =========================================
// 2. NAVIGATOR OBJECT
//* =========================================


// navigator browser ke baare me information deta hai.navigator object browser ki information provide karta hai, jaise browser language, platform, online status, cookies aur user agent.


// like:

// Browser ka naam
// Browser ki language
// User online hai ya nahi
// Cookies enabled hain ya nahi
// Operating system




// Property                       Kya batati hai?                        Example Output
// navigator.userAgent----------- Browser + OS ki detail-----------------Mozilla/5.0...
// navigator.language-------------Browser language-----------------------en-US
// navigator.cookieEnabled--------Cookies on hain ya off-----------------true
// navigator.platform-------------Operating system/platform--------------Win32
// navigator.onLine---------------Internet connected hai ya nahi---------true




// -----------------------------------------



// 1. navigator.userAgent  =>   Ye browser aur operating system ki detail deta hai.

// console.log(navigator.userAgent);     

// output:  Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0.0.0 Safari/537.36



// -----------------------------------------

// 2. navigator.language  =>  Browser kis language me set hai.

// console.log(navigator.language);         //en-US

// ex:
// if (navigator.language === "ur-PK") {
//     console.log("Urdu Website");
// }


// -----------------------------------------


// 3. navigator.cookieEnabled  =>   Batata hai cookies enabled hain ya nahi.


// console.log(navigator.cookieEnabled);     //true



// -----------------------------------------

// 4. navigator.platform  =>   Batata hai kis platform par browser chal raha hai.

// console.log(navigator.platform);   // Win32 → Windows


// Matlab:

// Win32 → Windows
// MacIntel → macOS
// Linux x86_64 → Linux



// -----------------------------------------

// 5. navigator.onLine  =>  Batata hai browser online hai ya offline.

// console.log(navigator.onLine);     //true

// ex
// if (navigator.onLine) {
//     console.log("Internet Connected");
// } else {
//     console.log("No Internet");
// }


// -----------------------------------------


// Real Example

// console.log("Language:", navigator.language);        //Language: en-US   
// console.log("Platform:", navigator.platform);       //Platform: Win32
// console.log("Online:", navigator.onLine);           //Online: true
// console.log("Cookies:", navigator.cookieEnabled);       //Cookies: true



// ================================================================================================================================================================================================================

//* =========================================
// 3. HISTORY OBJECT
//* =========================================



// Method              Kaam
// back()--------------Previous page
// forward()-----------Next page
// go(-1)--------------Ek page back
// go(1)---------------Ek page forward



// history browser ki visited pages ki list ko represent karta hai.


// Agar tum 5 websites visit karte ho, to browser un sab ko history me save karta hai. JavaScript us history me back aur forward ja sakti hai.


// Example:

// Google
//    ↓
// Facebook
//    ↓
// YouTube
//    ↓
// ChatGPT


// Agar tum ab ChatGPT par ho:

// history.back() → YouTube
// history.forward() → Wapas ChatGPT


// -----------------------------------------


// history.back()  =>  Previous page par le jata hai.

// history.back();
// window.history.back();


// -----------------------------------------

// history.forward()  =>   Next page par le jata hai.

// history.forward();
// window.history.forward();


// -----------------------------------------


// history.go()  =>   History me kisi bhi step par move karta hai.


// history.go(-1);          //Previous page
// history.go(-2);          //2 Previous pages back.
// history.go(1);           //1 page forward.
// history.go(2);           //2 page forward.


// ================================================================================================================================================================================================================


//* =========================================
// 4. LOCATION OBJECT
//* =========================================



// Property/Method           Kaam
// href----------------------Puri URL
// hostname------------------Domain name
// pathname------------------URL ka path
// protocol------------------http ya https
// search--------------------Query parameters
// assign()------------------New page open kare
// reload()------------------Page refresh kare


// location current URL ki information deta hai.


// -----------------------------------------




// 1. location.href  =>  Puri URL return karta hai.

// console.log(location.href);

// YOU CAN CHANGE URL AS WELL
// location.href = "https://google.com";


// -----------------------------------------



// 2. location.hostname  =>  Sirf domain name return karta hai.

// console.log(location.hostname);


// -----------------------------------------


// 3.location.pathname  =>  URL ka path return karta hai.

// console.log(location.pathname);  

// output:  /products/index.html


// -----------------------------------------


// 4. location.protocol  =>   Kaunsa protocol use ho raha hai.


// console.log(location.protocol);         //http:


//Output:  https:  ya   http:


// -----------------------------------------



// 5. location.search  =>   URL ke query parameters return karta hai.


// console.log(location.search);

// ex url =>  https://example.com?id=10&name=Ali
// output: =>  ?id=10&name=Ali


// -----------------------------------------


// 6. location.replace()  =>   website ka url replace ker deta hy hm backward nhi ja sakty dubara file open kerni hogi

// location.replace("https://google.com");


// output:  Google open ho jayega.


// -----------------------------------------



// 7. location.assign()  =>   Dusri website ya page par le jata hai lkin hm back ja skty hy.

// location.assign("https://google.com");


// output:  Google open ho jayega.


// -----------------------------------------



// 8. location.reload()  =>   Current page ko dobara load karta hai. Jaise browser ka refresh button dabaya ho.


// location.reload();


// -----------------------------------------


// Real Example

// ex url =>  https://example.com/products/index.html?id=20

// // 1
// console.log(location.href);
// // Output  =>   https://example.com/products/index.html?id=20

// // 2
// console.log(location.hostname);
// // Output  =>    example.com

// // 3
// console.log(location.pathname);
// // Output  =>    /products/index.html

// // 4
// console.log(location.protocol);
// // Output  =>   https:

// // 5
// console.log(location.search);
// // Output  =>   ?id=20


// ================================================================================================================================================================================================================

//* =========================================
// 5. SCREEN OBJECT
//* =========================================


// screen user ki physical screen ki information deta hai.


// window => Browser ki size
// screen => Computer/Mobile ki screen ki size


// Example  =>  Agar tumhare laptop ki screen 1920 × 1080 hai, to screen uski information dega.


// -----------------------------------------



// 1. screen.width   =>    screen ki width.

// console.log(screen.width);


// -----------------------------------------


// 2. screen.height    =>    Screen ki height.


// console.log(screen.height);



// -----------------------------------------


// 3. screen.availWidth  =>   Available width.Ye taskbar ko ignore karke available width batata hai.

// console.log(screen.availWidth);


// -----------------------------------------


// 4. screen.availHeight   =>   Taskbar ko hata kar available height.


// console.log(screen.availHeight);


// Agar total height 1080 hai aur taskbar 40px ki hai:
// 1080px - 40px = 1040px


// -----------------------------------------

// 5.  screen.colorDepth   =>  Screen kitne bits se colors show karti hai.

// console.log(screen.colorDepth);



// -----------------------------------------


// 6. screen.pixelDepth  =>   Pixel ki color depth.

// console.log(screen.pixelDepth);

// Aksar colorDepth aur pixelDepth same hote hain.


// -----------------------------------------

// 7. screen.orientation   =>   Screen portrait hai ya landscape.

// console.log(screen.orientation);

// Output =>  ScreenOrientation { type: "landscape-primary" }



// ================================================================================================================================================================================================================


//* =========================================
// 6. LOCAL-STORAGE
//* =========================================



// Browser me permanent data save karta hai.

// Browser band kar do.

// Computer restart kar do.

// Phir bhi data rehta hai.



// -----------------------------------------



// Data Save
// localStorage.setItem("name", "Ali");


// -----------------------------------------


// Data Read
// console.log(localStorage.getItem("name"));


// -----------------------------------------


// Data Update
// localStorage.setItem("name", "Ahmed");


// -----------------------------------------


// Delete One Item
// localStorage.removeItem("name");

// -----------------------------------------


// Delete Everything
// localStorage.clear();

// -----------------------------------------


// Real Example

// localStorage.setItem("theme", "dark");

// console.log(localStorage.getItem("theme"));   //dark


// ================================================================================================================================================================================================================


//* =========================================
// 7. SESSION-STORAGE
//* =========================================


// Ye bhi data save karta hai.

// Difference sirf itna hai:

// Browser tab band karte hi data delete ho jata hai.

// -----------------------------------------
 
// Save
// sessionStorage.setItem("city", "Karachi");

// -----------------------------------------


// Read
// console.log(sessionStorage.getItem("city"));   //Karachi



// Tab close karoge. Data khatam.

// -----------------------------------------


// localStorage	                                       sessionStorage
// Permanent-------------------------------------------Temporary
// Browser band hone ke baad bhi rehta hai-------------Tab band hote hi delete
// Login preferences-----------------------------------Temporary form data



// ================================================================================================================================================================================================================



// Complete BOM Summary


// Object	               Kaam
// window------------------Main browser object
// navigator---------------Browser ki information
// history-----------------Back/Forward navigation
// location----------------Current URL
// screen------------------User ki screen ki information
// localStorage------------Permanent data save
// sessionStorage----------Temporary data save
// document----------------HTML page ko access aur modify karna (DOM)





// COMPLETED





























































