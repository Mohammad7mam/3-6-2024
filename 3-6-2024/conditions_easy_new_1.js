// 1- Write a program to declare two numbers. If both numbers are greater than 10,
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
// Declare two numbers
let num1 = 15;
let num2 = 20;

if (num1 > 10 && num2 > 10) {
  console.log(num1 + " " + num2);
} else {
  console.log(num1);
}

// 2- Write a program to declare a username and a password.
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
// Declare username and password
let username = "admin";
let password = "12345";

let correctUsername = "admin";
let correctPassword = "12345";

if (username === correctUsername && password === correctPassword) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
// Declare a number
let num = 15;

// Check if the number is between 10 and 20
if (num >= 10 && num <= 20) {
  console.log("The number is between 10 and 20");
} else {
  console.log("The number is not between 10 and 20");
}

// 4- Write a program that to declare age and whether they have a driver's license (yes or no).
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
// Declare age and whether they have a driver's license
let age = 20;
let hasLicense = "yes";

// Check if the user is 18 or older and has a driver's license
if (age >= 18 && hasLicense == "yes") {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

// 5- Write a program to declare a number.
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
let number = 18;

if (number > 10 && number < 0) {
  console.log("Invalid number ");
} else {
  console.log("Valid number");
}

// 6- Write a programto declare a number.
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
//Otherwise, print "The number is not valid".
let number1 = 7;

if ((number1 >= 5 && number1 <= 10) || (number1 >= 20 && number1 <= 25)) {
  console.log("The number is valid");
} else {
  console.log("The number is not valid");
}

// 7- to declare a password. If the password is "secret" or "password", print "Access granted".
//Otherwise, print "Access denied".
let password1 = "moh@";
if (password1 === "moh@" || password1 === "password") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
var n = 7;

if ((n >= 0 && n <= 100) || n % 2 == 0) {
  console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}

// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
//Otherwise, print "Both numbers are positive".
let num4 = 5;
let num5 = -3;

if (num4 < 0) {
  console.log(num4 + " is negative");
} else if (num5 < 0) {
  console.log(num5 + " is negative");
} else {
  console.log("Both numbers are positive");
}

// 10- Write a program to declare age and whether they are a student (yes or no).
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
let number12 = 17;

if (number12 > 0 && number12 < 18) {
  console.log("You qualify for a discount ");
} else {
  console.log("You do not qualify for a discount");
}
