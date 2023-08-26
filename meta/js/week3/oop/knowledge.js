// Knowledge-check: Intro to OOP
// Q4
class Person {
    sayHello() {
        console.log("class Person{}: Hello");
    }
}

class Friend extends Person {
    sayHello() {
        console.log("class Friend extends Person{} Hey");
    }
}

var result = new Friend();
result.sayHello();

// Q3
class Animal3 {

}

class Cat extends Animal3 {
    constructor() {
        super();
        this.noise = "meow";
    }
}

var result = new Animal3();
console.log("Cat extends Animal3: " + result.noise);


// Q2
class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log("Animal: " + result.legs);


// Q1
class Cake {
    constructor(lyr) {
        this.layers = lyr + 1; 
    }
}

var result = new Cake(1);
console.log("Cake: " + result.layers);