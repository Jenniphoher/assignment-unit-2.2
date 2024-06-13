// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Create a variable called 'name' with the string value of 'Dane'.
// Next, create a conditional statement that says if the 'name' variable is equal to 'Mary',
// then the console will log 'Hi, Mary!'.
// If the condition is not met, 
// then the console will log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create a variable called 'secret'.
// Next, assign variable 'code' with the value of 123.
// Create a conditional statement that says if variable 'code' is equal to 123,
// then variable 'secret' will have the value of 'super'
// and the value of 'code' will be the product of 'code' multiplied by interger 2.
// Next, create a conditional that checks if the value of 'code' is greater than 250.
// If true, 'secret' will have the value of 'duper'.
// Then console.log variable 'secret'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create variable 'isStudent' and assign it the value of boolean true.
// Create another variable called 'age' and assign it the value of 34.
// Create variable 'zip' and assign it the value of 55407.
// Create a conditional statement:
// if 'isStudent' is true and 'zip' is greater than 80000,
// then console.log 'You're a student on the West Coast!'.
// else if 'isStudent' is false or age is less than 30,
// log into the console 'What are your hobbies?'.
// If neither conditions are met,
// console.log 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'blue';
let colorTwo = 'red';

// FIXED - changed 'colorOne' value from 'red' to 'blue'.
// changed 'colorTwo' value from 'blue' to 'red'.

let mix = true;

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}

// FIXED - added the missing colorTwo = 'purple' inside the if statement.
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}

// FIXED - changed || to && in the if statement.
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('enter');
} else {
  console.log('no entry');
}

// FIXED - switched the console.log() for the if and else statement. 
// 
*/

