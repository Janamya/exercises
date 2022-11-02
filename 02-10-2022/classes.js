/* class Animals {
    constructor (name, color, shape) {
        console.log("The class Animals is being created");

        this.name = name
        this.color = color
        this.shape = shape
    }

    getArea () {
        rerturn this.name + this.color;
    }
}

let myAnimals1 = new Animals("Kiki", "brown", "round");
let myAnimals2 = new Animals("Coco", "red", "Rectangle");
console.log(myAnimals1.getArea());


class Square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
        this.numOfRequestsForArea = 0;
    }

    get area () {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }

    set area (area) {
        this.width = Math.sqrt(area);
        this.height = this.width
    }


}
let square1 = new Square(25);
square1.area = 25;
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);



class Square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
    }

    static equals (a, b) {
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimensions (width, height) {
        return width === height;
    }
}

let square1 = new Square(8);
let square2 = new Square(9);

console.log(Square.equals(square1, square2));
console.log(Square.isValidDimensions(6, 6)); 

class Person {
    constructor (_name, _age) {
        this.name = _name;
        this.age = _age;

    }

    describe () {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person {
    constructor (_name, _age, _yearsOfExperience) {
        super(_name, _age);
        this.yearsOfExperience = _yearsOfExperience;
    }

    code () {
        console.log(`${this.name} is coding`)
    }

}

let person1 = new Person("Jeff", 45);
let programmer1 = new Programmer("Dom", 56, 12);

programmer1.code(); 


class Animal {
    constructor (name) {
        this.name = name;
    }

    makeSound () {
        console.log("Generic Animal Sound!!");
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name);
    }

    makeSound () {
        console.log("Woof");
    }
}
const a1 = new Animal("Dom");
const a2 = new Dog("Jeff");
a1.makeSound();
a2.makeSound(); 

//lopps

console.log("=============================")
for (var i = 0; i <= 15; i+=1) {
    console.log(i);
}


var total = 0;
for (var num = 1; num < 10; num++) {
    console.log(num);
    total += num;
}

console.log("The total is: " + total);  

var fruits = ["mango", "banana", "apple"];

for(var i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
} */

var data = {
    name: "John",
    age: 28,
    maritalStatus: true
}
 
for (var elem in data) {
    console.log(elem)

}

class Rectangle {
    constructor (_heigth, _weight, _color) {
        console.log("Rectangle is being created")

        this.heigth = _heigth;
        this.weight = _weight;
        this.color = _color;
    }

    getArea () {
        return this.heigth * this.weight;
    }

    printOutDescription () {
        console.log(`I am a rectangle of ${this.heigth} x ${this.weight}`);
    }
}

let myRectangle1 = new Rectangle(5, 3, "blue")
let myRectangle2 = new Rectangle(10, 5, "red");

console.log(myRectangle2.getArea());

myRectangle1.printOutDescription();