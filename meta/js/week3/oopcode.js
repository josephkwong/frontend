// The Principles of OOP
// Object.create() method
class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log(Animal)

// new keyword - creating objects
class Animalnew { /* ...class code here... */ }

var myDognew = new Animalnew()

console.log(Animalnew)

// OOP Principles: Inheritance
class Animalinh { /* ...class code here... */ }
class Bird extends Animalinh { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

// OOP Principles: Polymorphism
const bicyle = {
    bell: function () {
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

console.log('\n' + bicyle.bell()); // "Watch out, please"

console.log(door.bell());  // "Come here, please"

// Make this code truly polymorphic
function ringTheBell(thing) {
    console.log(thing.bell())
}
console.log('\n');
ringTheBell(bicyle);  // Watch out, please!
ringTheBell(door);  // Come here, please!

// 1. Based on the context
// concat() method on two strings
console.log('\n');
console.log("abc".concat("def")); // = + operator -> 'abcdef'

// concat() method on two arr.
console.log(["abc"].concat(["def"]));  // ['abc', 'def']

// the + operator on two arr.
console.log(["abc"] + ["def"]);  // ["abcdef"]


// 2. Using classes
// functions with the same name - can behave exactly the same or
// override some parts of the shared functionality or even the complete functionality
class Birdc {
    useWings() {
        console.log("Flying!")
    }   
}

class Eaglec extends Birdc {
    useWings() {
        super.useWings()  // Birdc { useWings() }
        console.log("Barely flapping!")
    }
}

class Penguinc extends Birdc {
    useWings() {
        console.log("Diving!")
    }
}
console.log('\n');
var baldEagle = new Eaglec();
var kindPenguin = new Penguinc();
baldEagle.useWings();  // "Flying! Barely flapping!"
kindPenguin.useWings();  // "Diving"