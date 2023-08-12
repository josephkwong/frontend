// Object Literals and Dot Notation
var hero = {
    name: 'Grandelf',
    age: 24000,
    weapon: 'Glamdring',
    aim: 'The destruction of Sauron',
}

hero.age = 24001;
console.log(hero.age);

console.log(hero.health) // undefined as not yet defined
hero.health = 10;
console.log(hero.health);

// Object Literals and the Brackets Notation
var castle = {}

var key = 'price'

castle['price'] = 200000
castle['color'] = 'pink'
castle['number of rooms'] = 20
// castle[key] = 'blue';

console.log("castle.key = " + castle.key); // undefined
console.log("castle[key] = " + castle[key]); // 200000
console.log("castle['price'] = " + castle['price']); // 200000
console.log("castle.price = " + castle.price);
console.log("castle.color = " + castle.color);
console.log("castle['number of rooms'] = " + castle["number of rooms"]);

function updateObject(object, key) {
    console.log("updateObject(object, key) = " + object[key]) // 20
}

updateObject(castle, 'price') // blue -> 200000
updateObject(castle, 'color') // pink
updateObject(castle, 'number of rooms') // 20

function updateObject2(object, key, value) {
    object[key] = value;
    console.log("updateObject2(object. key. value) = ", object);
}

updateObject2(castle, 'color', 'Lime Green'); // { price: 200000, color: 'Lime Green', 'number of rooms': 20 } 

// Arrays are Objects
var friendsList = ['Wyane', 'Sara', 'Frankie']

console.log(friendsList); // [ 'Wyane', 'Sara', 'Frankie' ]

friendsList.push('Kelly');
console.log(friendsList); // [ 'Wyane', 'Sara', 'Frankie', 'Kelly' ]

friendsList.pop();
console.log(friendsList); // [ 'Wyane', 'Sara', 'Frankie' ]
friendsList.pop();
console.log(friendsList); // [ 'Wyane', 'Sara']

var presentList = []
console.log(presentList);
presentList.push('Doggle');
presentList.push('Money');
presentList.push('Gold');
presentList.push('Lucky');
presentList.push('Thanks God Blessing');
console.log(presentList);

console.log(presentList.length);
for (var p = presentList.length; p >= 0; p--) {
    presentList.pop();
}
console.log(presentList);