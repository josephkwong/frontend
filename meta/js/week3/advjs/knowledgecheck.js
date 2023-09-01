// q1
const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter); // soup

// q2 The for-of-loop works for Objects data types.
// ans: false

// q3
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);

console.log(set);  // { 1, 2, 3 }

// q4
let obj = {
    key: 1,
    value: 4
}

let output = {...obj};
output.value -= obj.key;

console.log(output.value);  // 3

// q5
function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);  // 5
