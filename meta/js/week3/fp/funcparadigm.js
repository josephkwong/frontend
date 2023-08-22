// functional programming - return new values and then use those values somewhere else in the code
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log("The distance is " + distance); // <=== THIS HERE!

// object-riented programming - group data and functionality as properties and methods inside objects
// creating an object
var virtualPet = {
    sleepy: true,  // property
    nap: function() {  // method
        this.sleepy = false
    }
}
console.log("Before nap function call - " + virtualPet.sleepy)  // true
virtualPet.nap()  // calling the nap function (method)
console.log("After nap function call - " + virtualPet.sleepy)  // flase

// function is first-class citizen in JS
function addTwoNums(a, b) {
    console.log("a is " + a + " , b is " + b + " = " , a + b, '\n')
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if (useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

console.log('\n' + "*** First-class functions in JS ***");
addTwoNums(getNumber(), getNumber());

// Higher-order functions = pass a function to another function, or
// to return a function from another function
// the previous addTwoNums() function is a higher-order function
// addTwoNums(specificNum, specificNum);  // returned number is 84
// addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
console.log('\n' + "*** High-order function ***");

function addTwoNums(getNumber1, getNumber2) {
    console.log("high-order : number1 is " + getNumber1 + ", number 2 is " + getNumber2 + " Total: ", getNumber1 + getNumber2);
}

var getNumber1 = specificNum;
var getNumber2 = randomNum;

addTwoNums(getNumber1(), getNumber1());
addTwoNums(getNumber1(), getNumber2());

// Another example of high-order function
const withLog = (fn) => {
    return (...args) => {
        console.log(`calling $(fn.name)`);
    };
};

const add = (aHo, bHo) => aHo + bHo;
const addWithLogging = withLog(add);
addWithLogging(3, 4);
// calling add
// 7


// Pure-functions
// returns the exact same result as long as it's given the same values
console.log('\n' + "*** Pure function ***");
addTwoNums(5, 6); // 11

// Side-effect functions - makes a chanhge outside of itself
// e.g. - changing variable values outside of the function itself, or even replying on outside variables
// e.g. - calling a Broswer API (even the console itself!)
// e.g. - calling Math.random() - since the valuue cannot be reliably repeated