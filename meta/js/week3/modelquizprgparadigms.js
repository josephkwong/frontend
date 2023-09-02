// Module quiz Programming Paradigms
// q2
function scopeTest() {
    var y = 4;

    console.log(x);
}

var x = 33;
scopeTest(); // 33

// q3
class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());

// q3
class Animal {

}

class Dog extends Animal {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
        return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise()); //grow

// q5
const [a,b] = [1,2,3,4]
console.log([b]);  // 2

// q6
function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fried", null);

// q9
const letter = "a"
letter = "b"
console.log(letter);
