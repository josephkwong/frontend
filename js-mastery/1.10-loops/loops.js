// print 0 to 4
/* console.log("0");
console.log("1");
console.log("2");
console.log("3");
console.log("4"); */

// Loops help us do the same thing again and again
for (let count = 0; count < 5; count++) {  // initialization, condition checking, increment
    console.log(count);
}

// iterate over array
let names = ["John", "Peter", "Jane", "Mike"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// iterate over array using forEach loop
console.log("****** iterate over array using forEach loop ******")
names.forEach(function test(n) {
    console.log(n);
});

// iterate over array using for of loop
console.log("****** iterate over array using for of loop ******")
for (n of names) {
    console.log(n);
}

// iterate over an object
let student = {
    name: "Peter",
    rollNo: 567,
    age: 23,
    dept: "Phy"
};
console.log("****** iterate over an object with for in loop ******")
for (key in student) {
    console.log("Key is " + key + " Value is " + student[key]);
}

//  while loop in JS
// 1.0 inititalization, 2. Condition checking, 3. Body execution, 4. Updation

console.log("****** iterate with while loop ******")
let c= 10;
while (c < 5) {  // not to do
    console.log(c);
    c++;
}

// do while loop in JS
console.log("****** iterate with do loop ******")
let i = 10;
do {  // do it once even i not < 5
    console.log(i);
    i++;
} while (i < 5);