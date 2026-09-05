/*  Task 1 — For Loop (1 to 10) */
console.log("---- Task 1 ----");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


/*  Task 2 — Reverse Number (10 to 1) */
console.log("---- Task 2 ----");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


/*  Task 3 — Even Numbers (1 to 20) */
console.log("---- Task 3 ----");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


/*  Task 4 — Odd Numbers (1 to 20) */
console.log("---- Task 4 ----");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


/*  Task 5 — Multiplication Table */
console.log("---- Task 5 ----");
let num = 5; 
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


/*  Task 6 — Countdown (while loop) */
console.log("---- Task 6 ----");
let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}


/*  Task 7 — Sum of Numbers (while loop) => 55 */
console.log("---- Task 7 ----");
let sum = 0;
let n = 1;
while (n <= 10) {
    sum += n;
    n++;
}
console.log(sum); // 55


/*  Task 8 — Do While (print 1 to 5) */
console.log("---- Task 8 ----");
let d = 1;
do {
    console.log(d);
    d++;
} while (d <= 5);


/*  Task 9 — Do While Understanding
   let a = 10;
   do { console.log(a); a++; } while (a <= 5);

   OUTPUT: 10  (only once)

   WHY: do...while first RUNS the body once, THEN checks the condition.
   So even though 10 <= 5 is false, the body already executed one time
   before the check happened. After printing 10, a becomes 11, then the
   condition (11 <= 5) is checked -> false -> loop stops. That's why we
   see "10" printed even though the condition was never true. */
console.log("---- Task 9 ----");
let a9 = 10;
do {
    console.log(a9);
    a9++;
} while (a9 <= 5);
// Output: 10


/*  Task 10 — String Characters (for...of) */
console.log("---- Task 10 ----");
let name10 = "javascript";
for (let ch of name10) {
    console.log(ch);
}


/*  Task 11 — Array Values (for...of) */
console.log("---- Task 11 ----");
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits) {
    console.log(fruit);
}


/*  Task 12 — Student Names (for...of) */
console.log("---- Task 12 ----");
let students = ["Arun", "Priya", "Sharmila", "Divya", "Santhosh"];
for (let s of students) {
    console.log(`Student: ${s}`);
}


/* Task 13 — Employee Object (for...in) */
console.log("---- Task 13 ----");
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
for (let key in employee) {
    console.log(key, employee[key]);
}


/*  Task 14 — Product Object (for...in) */
console.log("---- Task 14 ----");
let product = {
    productName: "Laptop",
    price: 55000,
    brand: "Dell",
    category: "Electronics",
    stock: 20
};
for (let key in product) {
    console.log(key, product[key]);
}


/* Task 15 — Simple Function */
console.log("---- Task 15 ----");
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


/*  Task 16 — Function With Parameter */
console.log("---- Task 16 ----");
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Naveen");
greet("Arun");
greet("Priya");


/*  Task 17 — Multiple Parameters */
console.log("---- Task 17 ----");
function student(name, age, department) {
    console.log(name, age, department);
}
student("Santhosh", 23, "ECE");
student("Sharmila", 22, "IT");
student("Priya", 24, "CSE");


/*  Task 18 — Addition Function => 30 */
console.log("---- Task 18 ----");
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result); 


/*  Task 19 — Salary */
console.log("---- Task 19 ----");
function salary(amount) {
    return amount;
}
let mySalary = salary(50000);
console.log(mySalary);


/*  Task 20 — Bonus Calculator => 55000 */
console.log("---- Task 20 ----");
function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}
console.log(bonus(50000, 5000)); // 55000


/* Task 21 — Default Parameter */
console.log("---- Task 21 ----");
function employeeRole(name, role = "Developer") {
    console.log(name, role);
}
employeeRole("Arun");          // Arun Developer
employeeRole("Priya", "Designer"); // Priya Designer


/*  Task 22 — Named Function */
console.log("---- Task 22 ----");
function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));


/*  Task 23 — Anonymous Function */
console.log("---- Task 23 ----");
let calculate = function (a, b) {
    return a + b;
};
console.log(calculate(10, 20));


/*  Task 24 — Arrow Function */
console.log("---- Task 24 ----");
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 5));


/*  Task 25 — Scope Predict Output
   INSIDE the if block: a, b, c all print fine -> 10, 20, 30
   OUTSIDE the if block (but inside function):
      console.log(a) -> 10  (var is FUNCTION scoped, so it's still accessible)
      console.log(b) -> ReferenceError (let is BLOCK scoped, dies after the if block)
      console.log(c) -> ReferenceError (const is also BLOCK scoped)

   Only "a" survives outside the if block because var ignores block boundaries,
   while let/const respect the { } block they were declared in. */
console.log("---- Task 25 ----");
function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }
    console.log(a); // 10 (accessible - var)
    // console.log(b); // ReferenceError: b is not defined (commented so file doesn't crash)
    // console.log(c); // ReferenceError: c is not defined (commented so file doesn't crash)
}
test();


/*  Task 26 — Hoisting (var)
   console.log(a); var a = 10;
   OUTPUT: undefined
   WHY: var declarations are hoisted to the top, but only the declaration,
   not the value. So JS treats it like: var a; console.log(a); a = 10; */
console.log("---- Task 26 ----");
console.log(a); // undefined
var a = 10;


/*  Task 27 — Hoisting (let)
   console.log(b); let b = 20;
   OUTPUT: ReferenceError: Cannot access 'b' before initialization
   WHY: let is hoisted too, but it stays in the "Temporal Dead Zone" (TDZ)
   until the line where it's declared. Accessing it before that throws an error. */
console.log("---- Task 27 ----");
try {
    console.log(b);
    let b = 20;
} catch (e) {
    console.log(e.message); // Cannot access 'b' before initialization
}


/* Task 28 — Hoisting (const)
   Same as let - ReferenceError due to Temporal Dead Zone. */
console.log("---- Task 28 ----");
try {
    console.log(c);
    const c = 30;
} catch (e) {
    console.log(e.message); // Cannot access 'c' before initialization
}
/* Difference between var / let / const:
   var   -> hoisted + auto-initialized to undefined -> no error, prints undefined
   let   -> hoisted but NOT initialized (TDZ) -> ReferenceError
   const -> same as let (TDZ) -> ReferenceError, and also cannot be reassigned later */


/*  Task 29 — Self Invoking Function (IIFE) */
console.log("---- Task 29 ----");
(function () {
    console.log("Welcome to JavaScript");
})();

(function (product, discount) {
    console.log(`Now going on sale, ${product} better price, the discount is ${discount}%`);
})("Shoes", 50);


/*  Task 30 — Callback / Higher-Order Function
   welcome()  -> this is the CALLBACK function (passed as argument)
   execute()  -> this is the HIGHER-ORDER function (receives a function as parameter) */
console.log("---- Task 30 ----");
function welcomeMsg() {
    console.log("Welcome");
}
function execute(callback) {
    callback();
}
execute(welcomeMsg);


/*  Task 31 — Generator (Cashback) */
console.log("---- Task 31 ----");
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
let allCashback = cashback();
for (let c of allCashback) {
    console.log(c);
}


/*  Task 32 — Final Mini Project: Employee Management Console */
console.log("---- Task 32 ----");

let employees = [
    { name: "Arun", age: 25, department: "IT", role: "Developer", salary: 40000 },
    { name: "Priya", age: 24, department: "HR", role: "HR Executive", salary: 35000 },
    { name: "Kamal", age: 28, department: "Finance", role: "Analyst", salary: 45000 }
];

// 1. for...of -> print every employee
console.log("-- All Employees (for...of) --");
for (let emp of employees) {
    console.log(emp);
}

// 2. for...in -> print each employee's keys and values
console.log("-- Employee Details (for...in) --");
for (let emp of employees) {
    for (let key in emp) {
        console.log(key, ":", emp[key]);
    }
    console.log("---");
}

// 3 & 4. Function + parameters -> display employee information
function displayEmployee(emp) {
    console.log(`${emp.name} | ${emp.age} yrs | ${emp.department} | ${emp.role} | ₹${emp.salary}`);
}
console.log("-- Display via function --");
for (let emp of employees) {
    displayEmployee(emp);
}

// 5. Return -> function that returns an employee's salary
function getSalary(emp) {
    return emp.salary;
}
console.log("-- Salaries --");
for (let emp of employees) {
    console.log(emp.name, "->", getSalary(emp));
}

// 6. Condition -> check salary >= 40000
console.log("-- Salary >= 40000 check --");
for (let emp of employees) {
    if (emp.salary >= 40000) {
        console.log(`${emp.name} qualifies (High salary)`);
    } else {
        console.log(`${emp.name} does not qualify`);
    }
}

// 7. Arrow function -> simple calculation (e.g. yearly salary)
let yearlySalary = (emp) => emp.salary * 12;
console.log("-- Yearly Salary (arrow function) --");
for (let emp of employees) {
    console.log(emp.name, "->", yearlySalary(emp));
}

// 8. Generator -> employee benefits
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}
console.log("-- Employee Benefits (generator) --");
for (let b of benefits()) {
    console.log(b);
}