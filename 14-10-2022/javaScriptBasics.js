var a = 4;
a++;
console.log(a);
console.log("Hello");

// Escape
var escapee = "This is the \"second\" quotation mark \n This is the new line \t and this is a tab button."
console.log(escapee);

var first = "Hello";
var second = "You ";
second += first;
console.log(second);

var name = "Lamija";
var lastLetterOfName = name[name.length - 1];
console.log(lastLetterOfName);

var myArray = [2,3,4,7];
myArray.push(22);
console.log(myArray);
var removeE = myArray.pop();

console.log(myArray);
myArray.unshift(88);
console.log(myArray);

function startFunction(a, b) {
    console.log (a * b);
}
startFunction(9,8);

var clothes = "Sweater"
function myCloset() {
    var clothes = "T-shirt"
    return clothes;

}
console.log(myCloset());

function reusableFunction(num) {
    return num / 6;
}
console.log(reusableFunction(36));

function practiceIf(val) {
    if(val == "Tablet") {
    return "true";
    } else {
        return "false";
    }
}
console.log(practiceIf("Tablet"));

function secondPractice(a, b) {
    if(a <= b || a > 5) {
        return "Yey"
    };
}
console.log(secondPractice(5, 6));

//Golf Code
var names = ["Hole", "Eagle", "Birdie", "Par"];
function golf(par, strokes) {
    if(strokes == 1) {
        return names[0];
    }
    else if(strokes <= par - 2) {
        return names[1];
    }
    else if(strokes == par) {
        return names[3]
    }
    return "No"
};
console.log(golf(2,3));

/* Practice
Switch */
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
        answer = "alpha";
        break;
        case "B":
            answer = "beta";
            break;
            case "last":
                answer = "Charlie 3";
                break;
    }
    return answer;
}
console.log(caseInSwitch("last"));

function isGreaterThan(a, b) {
    return a > b;
}
console.log(isGreaterThan(8, 9));

var myDog = {
    "Name": "Kiki",
    "Shape": "Round",
    "The Color": "Brown"
};
console.log(myDog);
var dogName = myDog.Name;
console.log(dogName);

var dogColor = myDog["The Color"];
console.log(dogColor);
myDog["The Color"] = "white";
console.log(myDog["The Color"]);
myDog.weigth = 10;
console.log(myDog.weigth);
delete myDog.weigth;
console.log(myDog);

///lookup
function phoneticLookup(val) {
    var result = "";

var lookup = {
    "alpha": "Adams",
    "beta": "Boston",
    "charlie": "Chikago"
};
result = lookup[val];
return result;
}
console.log(phoneticLookup("charlie"));

function secondFun(val) {
    var result = "";
    var objectOne = {
        "name": "Yolo",
        "color": "Red",
        "size": "big"
    };
    result = objectOne[val];
    return result;
}
console.log(secondFun("color"));

//hasOwnProperty with the dog object
function biloKojeIme(myDog) {
    return myDog.hasOwnProperty("Name");
}
console.log(biloKojeIme(myDog));

function dva(myDog) {
    return myDog.hasOwnProperty("Color")
}
console.log(dva(myDog));

//While loop - while the condition is true, the loop will run
var myArray = [];
var a = 0;

while(a < 5) {
    myArray.push(a);
    a++
};
console.log(myArray);

a = 5;
while(a < 7) {
    console.log("I am practicing");
a++;
};

function neka(val) {
    return myDog.hasOwnProperty("Name");
}
console.log(neka(myDog));

i = 7;
while(i < 10) {
    console.log("Bravo");
    i++;
};

//for loops

for(var k = 0; k < 5; k++) {
    console.log(k);
}

var t = 1;
while(t < 5) {
    console.log("Bravo 5")
    t++;
}

for(var t = 3; t < 5; t++) {
    console.log("to");
};

for(var a = 0; a < 4; a++) {
    console.log(a);
};

var a = 0;
while(a < 5) {
    console.log(a)
    a++;
}

var myArray = [];
var a = 0;
while(a < 3) {
    myArray.push(a);
    a++;
};
console.log(myArray);

a = 0;
while(a < 6) {
    console.log(a);
    a++;
};

//For loops

for(var a = 0; a < 16; a++) {
    console.log(a);
};

var total = 0;
for(var num = 1; num < 10; num++) {
    total = total + num;
}
console.log("The total is: " + total);

// we want to console mango,banana and apple using for loop
var fruits = ["mango", "banana", "apple"]
for(var i=0; i < 3; i++) {
    console.log(fruits[i]);
}

// or if we add more fruits into the array, we want to console all the fruits
var fruits = ["apple", "banana", "strawberry", "pear"];
for(i=0; i<fruits.length; i++) {
    console.log(fruits[2]);
};

// loop through the object
var human = {
    "name": "John",
    "age": 28,
    "status": true
}
for (var biloKojeIme in human) {
    console.log(biloKojeIme, human[biloKojeIme]);

}

//for loops again
for(a = 0; a <5; a++){
    console.log(a);
}
console.log("===============================")
//we want the total now of the one above
var total = 0;
for(var num = 0; num< 10; num++) {
    total = total + num;
}
console.log(total);

/*var myArray = ["unit", "integration", "e2e"];
for(i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
} */

var total = 0;
for(var num = 1; num < 10; num++ ) {
    total = total + num;
  
}
console.log(total);
var total = 0;
for(var num = 1; num < 10; num++) {
    total = total + num;
}

console.log("The toootal is: " + total);

var myArray = ["a1", "a2", "a3"];
for(i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/*var human = {
    "name": "John",
    "age": 28,
    "status": true 

for(var biloKojeIme in human) {
    console.log(biloKojeIme, human[biloKojeIme])
}; */

for(var nekoIme in human) {
    console.log(nekoIme, human[nekoIme])
}

//while loops
var a = 0;
while(a <= 10) {
    console.log(a);
    a++;
}

console.log("=========================");
//total in while loops
var total = 0;
var i = 0;
while(i < 10) {
    total = total + i;
    i++;
}
console.log(total);
//loop through the array with while loop

var myArray = ["strawberry", "apple", "orange"];
var index = 0;
while(index < myArray.length) {
    console.log(myArray[index])
    index++;
}
var a = 0;
while(a < myArray.length) {
    console.log(myArray[a])
    a++;
}
console.log("=============================")
for(a = 0; a < myArray.length; a++) {
    console.log(myArray[a]);
}

/*var i = 0;
while(i < myArray.length) {
    console.log(myArray[i])
    i++;
} */

total = 0;
var r = 0;
while(r < 10) {
    total = total + r;
r++;
}
console.log(total);

var otherStuff = ["apple", 9, 7, "Orange", ["something", 5.342]];
console.log(otherStuff);
for(var i = 1110; i > otherStuff.length; i--) {
    console.log(i);
}

//Reverse loop with while

var num = otherStuff.length;
while(num >= 0) {
    console.log(otherStuff[num])
    num--
}



