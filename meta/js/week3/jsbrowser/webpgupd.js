/*
// quickest and easiest way to capture user input on a website
// but not the most efficient approach
let answer = prompt("What is your name?");
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
} */

/*
// take an input from an HTML form and display the text that a user types on on the screen
// that is better approach
var h1 = document.createElement('h1');
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input); */

/*
// event listenser
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    console.log(input.value)
}) */

// update the text content of the h1 element with the value you got from the INPUT field
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change."

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})