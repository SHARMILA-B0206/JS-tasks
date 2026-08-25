// 1: Create a variable for student name, age, and mark and print all three
let studentName = "Sharmila";
let studentAge = 23;
let studentMark = 85.5;

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student Mark:", studentMark);


// 2: Ask the user's name using prompt() and display it using alert()
let userPromptName = prompt("What is your name?");
alert("Hello, " + userPromptName);


// 3: Ask the user's age using prompt() and print it using console.log()
let userPromptAge = prompt("How old are you?");
console.log("User Age:", userPromptAge);


// 4: Ask the user a question using confirm()
let likesProgramming = confirm("Do you like programming?");
console.log("Likes programming?:", likesProgramming); // Prints true (OK) or false (Cancel)


// 5: Ask the user's name and display it on the webpage using document.writeln()
let webPageName = prompt("Enter your name to display on the webpage:");
document.writeln("Welcome to the website, " + webPageName + "!");
