var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

function listArrayItems(arr){
    for (var i = 0; i <= colors.length; i++);
    console.log(i, arr[1])
}

listArrayItems(colors)

// seond function that logs out only the sizes which are larger than 6
var sizes = [4, 5, 6, 7, 8];

function sizeLargersix(){
    for (s = 0; s <= sizes.length; s++) {
        if (sizes[s] > 6) {
            console.log("Logout as the size larger " + sizes[s - 1]);
            break
        }
    }
}

sizeLargersix()

// Find a letter
function letterFinder(word, letterToMatch) {

    for (var i = 0; i < word.length; i++) {
        if (word[i] == letterToMatch) {
            console.log('Found the letter ' + letterToMatch + ' at index ' + i)
        } else {
            console.log('No match found at index ' + i)
        }
    }
}

letterFinder('Giraffe', 'f')