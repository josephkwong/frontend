// Exercise Capture Data
// Use example.com; otherwise, there will be ReferenceError came out. 

// Task 1: The example.com website
// 1. Open https://example.com/
// 2. Open the devtools > Console

// Task 2: Get h1 element into a variable
var h1 = document.querySelector('h1')

// Task 3: Create an array named it arr
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]

// Task 4: Write a click-handling function
// The default case should set the value of the h1.innerText property to arr[0]
function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}

// Task 5: Add an event listener
// Use h1 variable to runt the addEventListener() method on it.
// Pass two arguments to the addEventListener() method: 'click' and handleClicks.
h1.addEventListener('click', handleClicks);