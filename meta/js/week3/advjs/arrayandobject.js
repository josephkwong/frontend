// Programming Assignment: Array and object iteration

// Task: Iterate Over an Array
// Use for...of loop AND for...in to iterate over an array and to iterate over an object's own properties

/* Task 1
An array of dairy products
Create a function called logDairy(). Within it, console log each of the items in the dairy array, using the for...of loop. */
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (item of dairy) {
        console.log(item)
    }
}

logDairy();
console.log('\n');

/* Task 2
An object of birds
Create a function called birdCan(). Within it, console log each of the items in the dairy array, using the for...of loop.*/
const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (let value of Object.keys(bird)) {
        console.log(`${value}: ${bird[value]}`)
    }
}

birdCan();
console.log('\n');

/* Task 3
Use the Task 2 code
Create a function called `animalCan` and within it,
loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop.
*/
function animalCan() {
    for (let value in bird) {
        console.log(value + ": " + bird[value])
    }
}

animalCan();
