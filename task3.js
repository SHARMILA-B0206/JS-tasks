// Task 1 - Variables
console.log("\n---- Task 1 - Variables ----");

// var

// 1. declration  // 2. intialiazation

var a = "sharmila"

// 3. reuse    // 4.reintialization

    a = "B"

// 5. reDeclration

var a = "santhosh"

console.log(a)


// let

// 1. declration // 2. reintialization

let b = 23

// 3. reuse      // 4. reintialization

    b = 24

// 5. reDeclration

// let b

console.log(b);


// const

// 1. declration  // intialization

const c = "chennai"

// 3. reuse // reintialization

    //   c = "trichy"

// 5. redeclration

// const c

console.log(c);


let d = "EGSP college"

console.log(a,b,c,d)


// Task 2 - printing Statement
console.log("\n---- Task 2 - printing Statement ----");
 
// 1. console.log()
 
let e = 55
 
console.log(e);
console.log(100);
 
 
// 2. alert()
 
let f = 1000
alert(f)
 
// 3. confirm()
 
const g = "did you know programing ?"
confirm(g)
 
// 4. prompt()
 
var h = "what is your name"
prompt(h)
 
// 5. document.writeln()
 
let i = "hello"
document.writeln(i)


// Task 3 - user details
console.log("\n---- Task 3 - user details ----");

// let userName = prompt("what is your name ?")
// let userAge = prompt("how old are you ?")
// let userCity = prompt("which city you live ?")
// let userQualification = prompt("what is your qualification ?")

let userName = "sharmila"
let userAge = 23
let userCity = "trichy"
let userQualification = "MCA"

console.log(userName);
console.log(userAge);
console.log(userCity);
console.log(userQualification);


// Task 4 - DataTypes
console.log("\n---- Task 4 - DataTypes ----");

// primitive DataType

// string - ""

let name = "JavaScript"

console.log((name));
console.log(typeof(name));


// number - 123

let num = 100

console.log(num);
console.log(typeof(num));


// boolean - true , false

let boo = true

console.log(boo);
console.log(typeof(boo));


// undefined

let empty;

console.log(empty);
console.log(typeof(empty));


// null

let random = null

console.log(random);
console.log(typeof(random));



// Task 5 - Array
console.log("\n---- Task 5 - Array ----");

let fruit = ["Arun","Priya","Kumar","Divya","Rahul"]

console.log(fruit[0]);              // first student
console.log(fruit[1]);              // second student
console.log(fruit[fruit.length-1]); // last student
console.log(fruit.length);          // total students



// Task 6 - object
console.log("\n---- Task 6 - object ----");

let employee = {
    name : "sharmila",
    age : 23,
    role : "Full Stack Developer",
    skills : ["html","css","javascript","react"],
    isWorking : true,
    qualification : ["10th","12th","MCA"]
}


console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.skills[0]);
console.log(employee.qualification[employee.qualification.length-1]);
console.log(employee.isWorking);




// Task 7 - Arithmetic operator
console.log("\n---- Task 7 - Arithmetic operator ----");

let num1 = 20
let num2 = 5

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);



// Task 8 - shopping bill
console.log("\n---- Task 8 - shopping bill ----");

let shirt = 999
let pant = 1499
let shoes = 1999
let bag = 799

console.log(shirt + pant + shoes + bag);



// Task 9 - increament & decreament
console.log("\n---- Task 9 - increament & decreament ----");

// A

let num3 = 10

let num4 = num3++

console.log(num3);
console.log(num4);


// B

let num5 = 10

let num6 = ++num5

console.log(num5);
console.log(num6);


// C

let num7 = 10

let num8 = num7--

console.log(num7);
console.log(num8);


// D

let num9 = 10

let num10 = --num9

console.log(num9);
console.log(num10);



// Task 10 - Assignment operator
console.log("\n---- Task 10 - Assignment operator ----");

let num11 = 10

num11 += 5
console.log(num11);

num11 -= 3
console.log(num11);

num11 *= 2
console.log(num11);

num11 /= 4
console.log(num11);

num11 %= 3
console.log(num11);

num11 **= 2
console.log(num11);


// Task 11 - comparision operator
console.log("\n---- Task 11 - comparision operator ----");

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");



// Task 12 - AND
console.log("\n---- Task 12 - AND ----");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// Task 13 - OR
console.log("\n---- Task 13 - OR ----");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// Task 14 - NOT
console.log("\n---- Task 14 - NOT ----");

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));


// Task 15 - Combination
console.log("\n---- Task 15 - Combination ----");

console.log(5 == "5" && !(5 === 5) || 6 > 7);

//   true && false || false
//   false || false = false

console.log(10 > 5 && 8 < 12 || 4 === "4");

//          true && true || false
//          true || false         = true

console.log(7 === 7 && 10 != "10" || 5 >= 5);

//          true    && false || true
//          false || true        = true

console.log(15 < 10 || 20 > 15 && 5 == "5");

//          false   || true  &&  true
//          true && true       = true




// Task 16 - voting (ternery operator)
console.log("\n---- Task 16 - voting (ternery operator) ----");

let age1 = 20

age1 >= 18 ? console.log("Eligible to vote") : console.log("Not eligible");


// Task 17 - password
console.log("\n---- Task 17 - password ----");

let pwd = true

pwd ? console.log("Login successful") : console.log("Wrong password");



// Task 18 - concatination & template string
console.log("\n---- Task 18 - concatination & template string ----");
 
let name18 = "sharmila"
let age18 = 23
let city18 = "Trichy"
 
// Using +
 
console.log("My name is " + name18 + ". I am " + age18 + " years old. I live in " + city18 + ".");
 
// Using template literals
 
console.log(`My name is ${name18}. I am ${age18} years old. I live in ${city18}.`);



// Task 19 - String explicit typeCasting
console.log("\n---- Task 19 - String explicit typeCasting ----");

console.log(typeof(String(100)));
console.log(typeof(String(true)));
console.log(typeof(String(undefined)));
console.log(typeof(String(null)));
console.log(typeof(String([1,2])));

console.log(String(100));
console.log(String(true));
console.log(String(undefined));
console.log(String(null));
console.log(String([1,2]));



// Task 20 - number explicit typeCasting
console.log("\n---- Task 20 - number explicit typeCasting ----");

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// Task 21 - Boolean explicit typeCasting
console.log("\n---- Task 21 - Boolean explicit typeCasting ----");

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));



// Task 22 - voting eligibility
console.log("\n---- Task 22 - voting eligibility ----");

// let voterAge = prompt("how old are you ?")

let voterAge = 20

if(voterAge>=18){
    console.log("you can vote");

}else{
    console.log("you can't vote");

}


// Task 23 - positive or negative
console.log("\n---- Task 23 - positive or negative ----");

// let checkNum = prompt("enter a number")

let checkNum = -5

if(checkNum > 0){
    console.log("positive");

}else if(checkNum < 0){
    console.log("negative");

}else{
    console.log("zero");

}



// Task 24 - grade system
console.log("\n---- Task 24 - grade system ----");

// let marks = prompt("enter your marks")

let marks = 85

if(marks>=90 && marks<=100){
    console.log("A Grade");

}else if(marks>=80){
    console.log("B Grade");

}else if(marks>=70){
    console.log("C Grade");

}else if(marks>=60){
    console.log("D Grade");

}else{
    console.log("Fail");

}




// Task 25 - nested if statement
console.log("\n---- Task 25 - nested if statement ----");

// let age2 = prompt("enter your Age")
// let height = prompt("enter your height use cm")
// let weight = prompt("enter your weight use kg")

let age2 = 23
let height = 163
let weight = 50

if(age2>=18){
    if(height >= 160){
        if(weight >= 60){
            console.log("congradulations your selected");

        }else{
            console.log("your weight is not enough");

        }

    }else{
        console.log("your height is not enough");

    }
}else{
    console.log("your age is not enough");

}



// Task 26 - switch statement
console.log("\n---- Task 26 - switch statement ----");

let trafficLight = "red"

switch(trafficLight){
    case "red" : console.log("stop the vechile");break
    case "yellow" : console.log("ready the vechile");break
    case "green" : console.log("start the vechile");break

    default : console.log("signal not work");break

}


// Task 27 - day switch
console.log("\n---- Task 27 - day switch ----");

let day = 1

switch(day){
    case 1 : console.log("Monday");break
    case 2 : console.log("Tuesday");break
    case 3 : console.log("Wednesday");break
    case 4 : console.log("Thursday");break
    case 5 : console.log("Friday");break
    case 6 : console.log("Saturday");break
    case 7 : console.log("Sunday");break

    default : console.log("Invalid day");break

}



// Task 28 - student Result System
console.log("\n---- Task 28 - student Result System ----");

// let sName = prompt("enter your name")
// let sAge = prompt("enter your age")
// let sCity = prompt("enter your city")

let sName = "sharmila"
let sAge = 23
let sCity = "trichy"

// let tamil = prompt("enter tamil marks")
// let english = prompt("enter english marks")
// let maths = prompt("enter maths marks")

let tamil = 85
let english = 78
let maths = 87

let total = tamil + english + maths
let average = total / 3

let grade

if(average>=90){
    grade = "A"

}else if(average>=80){
    grade = "B"

}else if(average>=70){
    grade = "C"

}else if(average>=60){
    grade = "D"

}else{
    grade = "Fail"

}

let voting = sAge >= 18 ? "Eligible" : "Not Eligible"

console.log(`
Name: ${sName}
Age: ${sAge}
City: ${sCity}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);