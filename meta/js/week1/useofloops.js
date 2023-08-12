for (var i = 1; i <= 10; i++) {
    console.log("***** " + i + " Times Table *****");
    for (var j = 1; j <= 10; j++) {
        console.log(i + " times " + j + " equals " + i * j);
    }
}

for (var x = 100; x >= 10; x = x - 10) {
    for (var y = 5; y <=10; y = y + 5) {
        console.log(x + " divided by " + y + " equals " + x/y);
    }
}
    
var cubes = "ABCEDFG";
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 2px solid blue; background-color: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

for (var i = 1; i <= 10; i++) {
    var color = "";
    if (i == 1 || i == 10) {
        color = "white";
    } else if (i % 2 == 0) {
        color = "pink";
    } else {
        color = "blue";
    }
    console.log("Placemat " + i + ": " + color);
}

for (var r = 1; r <= 8; r++) {
    var suffix = "";
    switch (r) {
        case 1: {
            suffix = "st";
            break;
        }
        case 2: {
            suffix = "nd";
            break;
        }
        case 3: {
            suffix = "rd";
            break;
        }
        default: {
            suffix = "th";
            break;
        }
    }
    console.log(r + suffix + " place");
}
