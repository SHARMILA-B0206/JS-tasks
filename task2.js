/* TASK 1 — var, let, const */
console.log("----- TASK 1 -----");
var studentName = "Sharmila";
let studentAge = 22;
const collegeName = "EGSP Engineering College";

// 1. Print all three values
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("College:", collegeName);

// 2. Change the var value
studentName = "Sharmila";
console.log("After change, Name:", studentName);

// 3. Change the let value
studentAge = 23;
console.log("After change, Age:", studentAge);

// 4. Try changing the const value and observe the error
// collegeName = "ESSP College";
// TypeError: Assignment to constant variable.

// 5. Try redeclaring the var variable (this works fine, no error)
var studentName = "Santhoshni";
console.log("Redeclared var Name:", studentName);

// 6. Try redeclaring the let variable and observe the error
// let studentAge = 25;
// SyntaxError: Identifier 'studentAge' has already been declared


/* TASK 2 – User Information */
console.log("\n----- TASK 2 -----");

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
let userCity = prompt("Enter your city:");

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("City:", userCity);


/* TASK 3 — Welcome Message */
console.log("\n----- TASK 3 -----");

let visitorName = prompt("Enter your name:");
alert("Welcome " + visitorName + "!");


/* TASK 4 — Age Calculator*/
console.log("\n----- TASK 4 -----");

let birthYear = prompt("Enter your birth year:");
birthYear = Number(birthYear);

let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", age);


/* TASK 5 — Identify Data Types */
console.log("\n----- TASK 5 -----");

let val1 = "Hello";
let val2 = 100;
let val3 = 25.5;
let val4 = true;
let val5 = false;
let val6 = undefined;
let val7 = null;

console.log(val1, "->", typeof val1);
console.log(val2, "->", typeof val2);
console.log(val3, "->", typeof val3);
console.log(val4, "->", typeof val4);
console.log(val5, "->", typeof val5);
console.log(val6, "->", typeof val6);
console.log(val7, "->", typeof val7);

/* TASK 6 — Student Data (Object) */
console.log("\n----- TASK 6 -----");

const student = {
  name: "Sharmila",
  age: 23,
  city: "Nagapattinam",
  qualification: "MCA",
  isStudent: true
};

console.log("1. Complete object:", student);
console.log("2. Name:", student.name);
console.log("3. Age:", student.age);
console.log("4. Qualification:", student.qualification);
console.log("5. isStudent:", student.isStudent);


/* TASK 7 — Fruit Array*/
console.log("\n----- TASK 7 -----");

const fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];

console.log("1. First fruit:", fruits[0]);
console.log("2. Second fruit:", fruits[1]);
console.log("3. Last fruit:", fruits[fruits.length - 1]);
console.log("4. Total fruits:", fruits.length);


/* TASK 8 — Basic Calculator */
console.log("\n----- TASK 8 -----");

let a8 = 20;
let b8 = 5;

console.log("Addition:", a8 + b8);
console.log("Subtraction:", a8 - b8);
console.log("Multiplication:", a8 * b8);
console.log("Division:", a8 / b8);
console.log("Modulus:", a8 % b8);
console.log("Exponentiation:", a8 ** b8);


/* TASK 9 — Shopping Bill */
console.log("\n----- TASK 9 -----");

const shirt = 999;
const pant = 1499;
const shoes = 1999;

const total9 = shirt + pant + shoes;
console.log("Total =", total9); 


/* TASK 10 — Simple Marks Calculation */
console.log("\n----- TASK 10 -----");

const tamil = 80;
const english = 75;
const maths = 90;

const totalMarks = tamil + english + maths;
const averageMarks = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks.toFixed(2));


/* TASK 11 — Post Increment */
console.log("\n----- TASK 11 -----");

// PREDICTION FIRST:
// Expected: a = 11, b = 10

let a11 = 10;
let b11 = a11++;
console.log("a:", a11); 
console.log("b:", b11); 


/* TASK 12 — Pre Increment */
console.log("\n----- TASK 12 -----");

// PREDICTION FIRST:
// Expected: a = 11, b = 11

let a12 = 10;
let b12 = ++a12;
console.log("a:", a12); 
console.log("b:", b12); 


/* TASK 13 — Post Decrement*/
console.log("\n----- TASK 13 -----");

// PREDICTION FIRST:
// Expected: a = 19, b = 20

let a13 = 20;
let b13 = a13--;
console.log("a:", a13); 
console.log("b:", b13); 


/* TASK 14 — Pre Decrement */
console.log("\n----- TASK 14 -----");

// PREDICTION FIRST:
// Expected: a = 19, b = 19

let a14 = 20;
let b14 = --a14;
console.log("a:", a14); 
console.log("b:", b14); 


/* TASK 15 — Find the Final Values (Challenge) */
console.log("\n----- TASK 15 -----");

let a15 = 5;
let b15 = a15++;
let c15 = ++a15;
let d15 = b15--;

console.log("a:", a15); 
console.log("b:", b15); 
console.log("c:", c15); 
console.log("d:", d15); 


/* TASK 16 — Assignment Operators */
console.log("\n----- TASK 16 -----");

let num = 10;

num += 5;
console.log("After += 5:", num); // 15

num -= 3;
console.log("After -= 3:", num); // 12

num *= 2;
console.log("After *= 2:", num); // 24

num /= 4;
console.log("After /= 4:", num); // 6

num %= 4;
console.log("After %= 4:", num); // 2

num **= 3;
console.log("After **= 3:", num); // 8


/* TASK 17 — Mini Student Profile */
console.log("\n----- TASK 17 -----");

// Variables
let profileName = "Sharmila";
let profileAge = 23;
let profileCity = "Nagapattinam";
const profileCollege = "EGSP Engineering College";

// Array of favorite subjects
const favoriteSubjects = ["Maths", "Science", "English", "Computer Science", "Social"];

// Object
const studentProfile = {
  name: profileName,
  age: profileAge,
  city: profileCity,
  subjects: favoriteSubjects,
  isStudent: true
};

console.log("1. Student name:", studentProfile.name);
console.log("2. Student age:", studentProfile.age);
console.log("3. City:", studentProfile.city);
console.log("4. First subject:", studentProfile.subjects[0]);
console.log("5. Last subject:", studentProfile.subjects[studentProfile.subjects.length - 1]);
console.log("6. Total subjects:", studentProfile.subjects.length);
console.log("7. Complete object:", studentProfile);


   //FINAL CHALLENGE — User + Calculator
console.log("\n----- FINAL CHALLENGE -----");

 let num1 = prompt("Enter first number:");
 let num2 = prompt("Enter second number:");
 num1 = Number(num1);
 num2 = Number(num2);

 console.log("Addition:", num1 + num2);
 console.log("Subtraction:", num1 - num2);
 console.log("Multiplication:", num1 * num2);
 console.log("Division:", num1 / num2);
 console.log("Modulus:", num1 % num2);
 console.log("Power:", num1 ** num2);

