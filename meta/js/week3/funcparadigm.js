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