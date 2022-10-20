var myArray =[];
var a = 0;

do {
    myArray.push(a);
    a++;
}
while(a < 6);
console.log(a, myArray);

var t = 0;
while(t < 5) {
    console.log(t);
    t++;
}

var ourArray = [];
var u = 0;
while(u < 8) {
    ourArray.push(u);
    u++;
}
console.log(ourArray); 

for(var r = 0; r < 10; r += 3) {
    console.log(r);
}

var ovaj = 10 % 3;
console.log(ovaj);

var clothes = "T-shirt";
function closet() {
    var clothes = "pants";
return clothes;
}
console.log(closet());

function test(val) {

    if(val == 3) {
        return "da"
    } else if(val == 4) {
        return "ne"
    }
}
console.log(test(3));

//golf code
var names = ["Hole", "Eagels", "Birdie", "Par"];
function golf(par, strokes) {
    if(strokes == 1) {
        return names[0]
    } else if(strokes = par) {
        return names[1]
    }
}
console.log(golf(1,1));

function caseSwitch(val) {
    var result = "";

switch(val) {
    case "on":
        result = "prvi";
        break;

        case "neko":
            result = "drugi";
            break;
}
return result;
}
console.log(caseSwitch("on"));

//ternary
function check(val) {
    return val > 0? "positive" : val < 0 ? "negative" : "zero"
}
console.log(check(9));

function test1(num) {
    return num > 0 ? "da" : num < 0 ? "ne" : "zero"
}
console.log(test1(0));

//var vs let vs const
if(true) {
    var varVariable = "This is true"
}
console.log(varVariable);

if(true) {
    let letVariable = "this is false";
    console.log(letVariable);
}

const test2 = "Lamijaaa";
if(true) {
    const test2 = "nekko";
    console.log(test2);
}
console.log(test2);



