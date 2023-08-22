/*
// Q1
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);  // undefined
*/

// Q2
function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);  // 20
meal(dog);  // 30

console.log(dog.food);

// Q3
function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));  // 4