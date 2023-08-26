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

// creating classes
class Book {
    constructor(title, author, isInStock) {
        this.title = title;
        this.author = author;
        this.isInStock = isInStock;
    }

    // method 1 = function 1
    toggleIsInStock() {
        this.isInStock = !this.isInStock
    }

    // mthod 2 = function 2
    getPrototype() {
        console.log(Object.getPrototypeOf(this))  // Return the prototype of an object
    }
}

const book1 = new Book('The Lord of Rings', 'JRR Tolkien', false);
const book2 = new Book('The Hobbit', 'JRR Tolkien', true);
console.log(book1);  // false
/*
book1.toggleIsInStock();  // executed, where false -> true
*/
book1.getPrototype();  // Book {} but you can see in browser as {constructor: f, toggleIsInStock: f, getPrototype: f}

// extends
class RareBook extends Book {
    constructor(title, author, isInStock, location, isVerified) {
        super(title, author, isInStock)
        this.location = location;
        this.isVerified = isVerified;        
    }

    // method 1 
    getLocation() {
        console.log(this.location);
    }

    // method 2
    toggleIsVerified() {
        this.isVerified = !this.isVerified;
        if (this.isVerified) {
            console.log(`${this.title} has been verified by an independent expert.`)
        } else {
            console.log(`${this.title} has not been verified by an independent expert.`)
        }
    }
    toggleIsInStock() {
        super.toggleIsInStock();
        if (this.isInStock) {
            console.log(`${this.title} is in stock.`)
        } else {
            console.log(`${this.title} is not in stock.`)
        }        
    }
}

const book3 = new RareBook('Romeo and Juliet', 'William Shakespeare', true, 'London', true);
console.log(book3);
book3.getLocation();  // London
book3.toggleIsVerified(); // ... has not been verified ...

const book4 = new RareBook('Romeo and Juliet', 'William Shakespeare', true, 'London', false);
book4.toggleIsVerified();  // ... has been verified ...
book4.toggleIsInStock();  // ... is not in stock ...

// Default parameters
// case 1
function confirmPurchase(name = 'guest user', purchaseCount = 1) {  //default parameter
    console.log('Thank you for your order ' + name + '. You have made ' + purchaseCount + ' purchases from us.')
}

confirmPurchase('Tom', 7);
// confirmPurchase();  // before the default parameters added ...undefined...undefined... 
confirmPurchase();

// case 2
function convertCurrency(amount = 1, rate = 1.07) {
/*
  1. Give the 'amount' parameter a default of 1.
  2. Give the 'rate' parameter a default of 1.07.
  3. Test the function.
*/
    console.log(amount * rate);
}

convertCurrency();


// Designing OO Program
class AnimalDesign {
    constructor(color, energy, isActive, sleep) {
        this.color = color;
        this.energy = energy;
        this.isActive = isActive;
        this.sleep = sleep;
        console.log(this);
    }

    // isActive
    toggleIsActive() {
        if (this.isActive) {
            if (this.energy > 0) {
                this.energy -=20,
                console.log(this.energy)
            } else {
                if (this.energy <= 0) {
                    toggleSleep()
                }
            }
        }
    }

    toggleSleep() {
        this.energy +=20;
        console.log(this.energy);
    }
    
}

class CatDesign extends AnimalDesign {  // 'extends' is useed to setup inheritance relationships


}