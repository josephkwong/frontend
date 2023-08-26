// OOP Lab

// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    // Method 1
    sleep() {
        this.energy +=10;
    }

    // Method 2
    doSomethingFun() {
        this.energy -=10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    // method
    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
/* Inside the intern function instantiate the Worker class to code a new intern object.
   Run teh goToWork() method on the intern object. Then return the intern object.
*/
function intern() {
    newIntern = new Worker("Bob", 21, 110, 0, 10);
    newIntern.goToWork();
    return newIntern;
} 
intern();



// Task 4: Code a manager object, methods
/* Inside the manager function instantiate the Worker class to code a new manager object.
   Run the doSomethingFun() method on the intern object. Then return the intern object.
*/
function manager() {
    newManager = new Worker("Alice", 30, 120, 100, 30);
    newManager.doSomethingFun();
    return newManager;
}
manager();