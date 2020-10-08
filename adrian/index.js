//1.Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.
let a = 'six characters long';
console.log(a);

//2.Access the 2nd and 6th elements of the string. Print the elements to the console. Make sure you have selected the right index numbers
console.log(a.slice(1, 2), a.slice(5, 6));

//3.Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true. Print "JavaScript is fun: true" to the console, using your declared variables.
let programmingLanguage = 'JavaScript';
let isFun = true;
console.log(`${programmingLanguage} is fun: ${isFun}`);

//4.Print the J and S of JavaScript from the variable programmingLanguage to the console.
console.log(programmingLanguage.slice(0, 1), programmingLanguage.slice(4, 5));

//5.Print the length of the string "JavaScript" to the console.
console.log(programmingLanguage.length);
