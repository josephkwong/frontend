// Scoping with var, let and const
// 
// in ES5 JS - Functions build local scope
// var keyword
var num1 = 10;  // Global scope

function score() {  // Local scope
    var num2 = 20;
    console.log(num2);  // 20
}
// 1. CAN access a var variable b4 initialization
var user;  // undefined
console.log(user);

// 2. CAN declare and redeclare the same var variable without errors
var user = "Mary";
var user = "Jonna";
var user = "Joseph";

console.log(user);


// in ES6 - Block scope
/* // Two seperate variables with the same name
let color = 'red';  // Global scope

if (color == 'red') {  // Block scope
    let color == 'blue'
}

console.log(color)  // 'red'
*/

// let keyword
// 1. CANNOT access a let variable b4 we declare it
// console.log(userLet); // initialization Error!

// 2. CAN declare an unassigned variable
let userLet;
console.log(userLet);  // undefined

// 3. CAN'T redeclare a let variable
// let userLet = "Anna";  // Syntax error

// 4. CAN re-assign it
userLet = "Anna";
console.log(userLet);


// const keyword
// 1. The const variable MUST BE INITIALIZED
/*
console.log(userConst); // Not defined Error!
 const userConst;
*/

// 2. CAN'T access the const variable b4 initialization
/*
console.log(userConst);   // Unexpected token error
const userConst = "Andrew";
*/
const userConst = "Andrew";
console.log(userConst); 

// 3. CAN'T redeclare a const variable
userConst = "Bravo";  // TypeError: Assignment to constant variable
