//Strings, Numbers, Booleans

//Exercises to become familiar with data types.

//Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.
let sentence = "I love cats";
console.log(sentence);

//Access the 2nd and 6th elements of the string. Print the elements to the console. Make sure you have selected the right index numbers
console.log("2nd element => ", sentence[1]); // " " is the second element of the string because Javascript counts from 0. so:
//I = element no. 1 = index 0
// " " = element no. 2 = index 1
// L = element no. 3 = index 2

console.log("6th element => ", sentence[5]);
// "e" is the sixth element of the string because Javascript  counts from 0. so:
//I = element no. 1 = index 0
// " " = element no. 2 = index 1
// L = element no. 3 = index 2
//o = element no. 4 = index 3
// v = element no. 5 = index 4
// e = element no. 6 = index 5

// ******************************************

//Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true. Print "JavaScript is fun: true" to the console, using your declared variables.
let programmingLanguage = "JavaScript";
let isFun = true;
console.log(`${programmingLanguage} is fun: ${isFun}`);

//Print the J and S of JavaScript from the variable programmingLanguage to the console.
console.log(programmingLanguage["0"]);
console.log(programmingLanguage["4"]);

//Print the length of the string "JavaScript" to the console.
console.log(programmingLanguage.length - 1);
