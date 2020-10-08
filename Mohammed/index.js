
// 1.
let str = 'Mohammed';
let lengthOfStr = str.length;

/* if (lengthOfStr >= 6)
{
    console.log(str);
} */
let lengthCheck = (lengthOfStr >= 6) ? `${str}` : null; 
console.log(lengthCheck);
 
// 2. 
let secondElement = str.charAt(1); 
let sixthElement = str.charAt(5);
console.log(`The second element of my string ${str} is ${secondElement} and the sixth element is ${sixthElement}`); 

// 3.
let programmingLanguage = 'JavaScript';
let isFun = true;
console.log(`${programmingLanguage} is fun: ${isFun}`);

// 4.
let jLetter = 'J';
let sLetter = 'S';
let posOfJletter = programmingLanguage.indexOf(jLetter);
let posOfSletter = programmingLanguage.indexOf(sLetter);
/* console.log(posOfJletter);
console.log(posOfSletter); */
console.log(programmingLanguage.slice(posOfJletter, posOfJletter+1));
console.log(programmingLanguage.slice(posOfSletter, posOfSletter+1));

// 5.
console.log(`The length of the string ${programmingLanguage} is ${programmingLanguage.length}`);