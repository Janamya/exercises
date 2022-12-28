const { idText } = require("typescript")

var array = ["orange", "blue", "purple"]
array.splice(1, 0, "someone")

console.log(array)


var array = ["orange", "blue", "purple"]
var newContainer = array.slice(1)
console.log(array)
console.log(newContainer)


//Activity all the things

var array = [];
var question;

var question = prompt("What is your first favorite book?")
array.push(question)

var question = prompt("What is your second favorite book?")
array.push(question)

var question = prompt("What is your third favorite book?")
array.push(question)

var question = prompt("What is your fourth favorite book?")
array.push(question)

var question = prompt("What is your fifth favorite book?")
array.push(question)

var question = prompt("What is your sixth favorite book?")
array.unshift(question)

console.log(array)

array.pop();
console.log(array)

//loops

for (var i = 1; i < 5; i++) {
    if (i == 1) {
        console.log("Hello")
    } else if (i == 2) {
        console.log("Bye")
    } else if (i == 3) {
        console.log("Yo")
    }
}

for (i = 1; i < 10; i++) {
    if (i == 5) {
        break;
    } else {
        console.log(i)
    }
}


var things = [1, 2, "hello", "bye"]

for (var i = 0; i < 5; i++) {
    console.log(things[i])
}


//activity: loops
var answer = prompt("Type YES or NO")
var answers = ["YES", "NO"]
var responses = ["You said yes", "You said no", "You didn't follow directions"]

for (var i = 0; i < 2; i++) {
    if (answer != answers[0] && answer != answers[1]) {
        console.log(responses[2])
        break;
    } else if (answer == answers[i]) {
        console.log(responses[i])
}
}

//for loop - nested for loop
var numbers = [1,2,3,4,5]
var letters = ["a", "b", "c"]

for (var i = 0; i < 5; i++) {
    console.log(numbers[i])

    for (var t = 0; t < 3; t++){
        console.log(letters[t])
    }
}







