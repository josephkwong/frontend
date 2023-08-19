// Use recursive functions and avoid infinite loops

let counter = 3;
function example() {
    console.log('counter :' + counter);
    counter --;
    if (counter === 0) return;
    example();
}
example();