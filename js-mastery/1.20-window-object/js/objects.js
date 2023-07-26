console.log(window);

function getPageUrl() {
    let url = window.location.href;
    // debugger;
    console.log(url);
    window.history.forward();
    // window.history.go("");
}

getPageUrl();

// Functions for sessionStorage
function addToSession() {
    let result = 14 + 15;
    let emp = JSON.stringify({ "id": 11, "age": 3 });

    // Data stored in sessionStorage is available until user closes all browser windows
    console.log("*** addToSession");
    window.sessionStorage.setItem("result", result);
    window.sessionStorage.setItem("name", "sessionJoseph");  // data stored inside sessionstorage is in string format
    sessionStorage.setItem("empRecord", emp);

    console.log("- result: ", result);
}

function getStorageDataSession() {
    let name = sessionStorage.getItem("name");
    let result = sessionStorage.getItem("result");
    let e = sessionStorage.getItem("empRecord");  // here e is a string

    console.log("*** getStorageDataSession");
    console.log("- " + typeof(name) + " name is " + name);
    console.log("- " + typeof(result) + " result is " + result);
    console.log("- " + typeof(e) + " emp record is " + e);

    console.log("** Converts to number");
    console.log("- " + typeof(parseInt(result)) + " result is " + parseInt(result));

    console.log("** Converts the string form of emp object to object form");
    let empObj = JSON.parse(e); 
    console.log("- emp string form is " + e + " after JSON.parse to object form is " + typeof(empObj));

    console.log("** Object destructing another feature of ES6");
    const {id, age} = empObj;
    console.log("- " + id);
    console.log("- " + age);
}

function clearDataSession() {
    sessionStorage.clear();
    console.log("sessionStorage cleared...");
}

// Functions for localStorage
function add() {
    let result = 4 + 5;
    let emp = JSON.stringify({ "id": 111, "age": 33 });

    // Data stored in localStorage is available until explicitely deleted
    console.log("*** addTolocalStorage");
    window.localStorage.setItem("result", result);
    window.localStorage.setItem("name", "localStorageJoseph");  // data stored inside localstorage is in string format
    localStorage.setItem("empRecord", emp);

    console.log("- result: " + result);
}

function getStorageData() {
    let name = localStorage.getItem("name");
    let result = localStorage.getItem("result");
    let e = localStorage.getItem("empRecord");  // here e is a string

    console.log("*** getStorageDataLocal");
    console.log("- " + typeof(name) + " name is " + name);
    console.log("- " + typeof(result) + " result is " + result);
    console.log("- " + typeof(e) + " emp record is " + e);

    console.log("** Converts to number");
    console.log("- " + typeof(parseInt(result)) + " result is " + parseInt(result));

    console.log("** Converts the string form of emp object to object form")
    let empObj = JSON.parse(e); 
    console.log("- emp string form is " + e + " after JSON.parse to object form is " + typeof(empObj));

    console.log("** Object destructing another feature of ES6");
    const {id, age} = empObj;
    console.log("- " + id);
    console.log("- " + age);
}

function clearData() {
    localStorage.clear();
    console.log("localStorage cleared...");
}