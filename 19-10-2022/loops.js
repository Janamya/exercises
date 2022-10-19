/*var myArray = [1,2,3];
console.log(myArray);
myArray.unshift(22);
console.log(myArray);

var odjeca = "majica";
function ormar() {
    var odjeca = "pantole";
    return odjeca;
}
console.log(odjeca);

function substraction(a,b) {
    console.log (a - b);
}
substraction(9,7);

function ifFun(a,b) {
    if(a>b) {
        return "true"
    }
    
}
console.log(ifFun(9,8));

function test(val) {
    if(val==3) {
        return "Bravo"
    }
}
console.log(test(3));

function test1(a,b) {
    if(a == b) {
        return "Hej"
    }
    else {
        return "no"
    }
};
console.log(test1(2,2));

function test2(val) {
    return(val == 7) 
}
console.log(test2(7));

//golf game
var names = ["Hole", "Eagle", "Birdie","Par"];

function golf(par, strokes) {
    if(strokes==1) {
        return names[0]
    } else if(strokes <= par-2) {
        return names[1]
    }
}
console.log(golf(2,1));

//switch
function caseInSwitch(val) {
    var answer = "";

    switch(val) {
        case 1:
            answer = "alpha";
            break;

            case 2:
                answer = "beta";
                break;}

                return answer;
    }

console.log(caseInSwitch(2));

var myDog = {
    "name": "Loop",
    "eyes": 2,
    "color": "brown"
};
console.log(myDog);

function anyName(myDog) {
    return myDog.hasOwnProperty("eyes");
}
console.log(anyName(myDog));

var myParrot = {
    "name": "Kiko",
    "color": "green"
}
console.log(myParrot);
function anyy(myParrot) {
    return myParrot.hasOwnProperty("color")
}
console.log(anyy(myParrot));

var myArray=[];
var i = 0;

while(i<5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

var age = 5;
while(age < 10) {
    console.log("Your age is less than 10")
    age ++;
}
console.log(age);


var myArray=[];
for(var r=1; r<10; r++) {
    myArray.push(r);
}
console.log(myArray);

for(a=0; a < 5; a++) {
    console.log(a)
};



var a = 0;
while(a < 5) {
console.log(a);
a++;
};

var myArray =[];
var a=0;
while(a < 5) {
    myArray.push(a);
    a++;
}

var t = 0;
while(t < 4) {
    console.log(t);
    t++;
}


var ourArray = [];
for(var i = 0; i < 5; i++) {
    ourArray.push(i);
}  */


var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i)
}
console.log(ourArray);


for( var t = 0; t < 7; t++) {
    console.log(t)
}

// do while loop
var myArray = [];
var i = 5;

do {
    myArray.push(i)
    i++;
} while(i < 10)
console.log(i, myArray);

function neka(val) {
    return parseInt(val);
}
console.log(neka("89"));

function checkEqual(a, b) {
    return a===b ? true : false;
}
console.log(checkEqual(1,2));

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(10));

//let vs. var

if(true) {
    var varVariable = "This is true"
}
console.log(varVariable);

if(true) {
    let letVariable = "This is true"
    console.log(letVariable)
}


let x = "Lamija";
console.log(x);

if(true) {
    let x = "This is aa"
    console.log(x)
}



    
