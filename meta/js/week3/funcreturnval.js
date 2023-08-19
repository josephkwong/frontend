// get rid of the default return value of undefined.
function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('consoleLog function: Hello!!!!')

// function 1 & 2
function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

// the return value will be an object with a single prop key set to 20
om = objectMaker(20);
console.log(om);

// returns the number 10 as a string, that is: "20"
di = doubleIt(10).toString();
console.log(di);

// combine two custom function calls
od = objectMaker(doubleIt(100));
console.log(od);