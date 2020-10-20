// # 12 - PB - data - types - pt2

// ** Strings, Numbers, Booleans **

// 1. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long.Print the variable to the console.
let str = "hello world";
console.log(str); // hello world

// 2. Access the 2nd and 6th elements of the string.Print the elements to the console. ** Make sure you have selected the right index numbers **
console.log(str[1], str[5]); // e

// 3. Declare a variable called programmingLanguage and assign the string "JavaScript".Declare a variable called isFun and give it a value of true.Print "JavaScript is fun: true" to the console, using your declared variables.
let programmingLanguage = "JavaScript";
let isFun = false;
isFun ? "JavaScript is fun: true" : "JavaScript is fun: false";
console.log(isFun); // JavaScript is fun: true

// 4. Print the J and S of JavaScript from the variable programmingLanguage to the console.
console.log(programmingLanguage[0], programmingLanguage[4]); // J S
// console.log(programmingLanguage.charAt(0), programmingLanguage.charAt(4)); // J S

// 5. Print the length of the string "JavaScript" to the console.
console.log(programmingLanguage.length); // 10
