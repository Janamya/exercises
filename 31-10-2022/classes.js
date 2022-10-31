/*    class Rectangle {
    //setup your object
    constructor (_width, _height, _color) {
        console.log("The rectangle is being created");

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea () {
        return this.width * this.height;
    }

    printDescription () {
        console.log("I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}")
    }
}

let myRectangle1 = new Rectangle(3, 5, "blue");
let myRectangle2 = new Rectangle(10, 13, "white")

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());

myRectangle2.printDescription(); 

class Square {
    constructor (_width){
        this.width = _width;
        this.heigh = _width;

    }

    get area () {
        return this.width * this.heigh
    }

    set area (area) {
        this.width = Math.sqrt(area)

    }
}

let square1 = new Square(25);


square1.area = 25;
console.log(square1.width); 

class Square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
    }

    static equals (a, b) {
        return a.width * a.height === b.height 
    }

    static isValidDimensions (width, height) {
        return width === height;
    }
}

let square1 = new Square(8)
let square2 = new Square(8)
console.log(Square.isValidDimensions(6, 6)); 


//Parent Class and child class

class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age= _age;
    }

    describe () {
        console.log("I am old");
    }
}


class Programmer extends Person {
    constructor (_name, _age, _yearsOfExperience) {
        super(_name, _age);

        //Custom behaviour
        this.yearsOfExperience = _yearsOfExperience;
    }
code () {
    console.log(`${this.name} is coding`);
}
}

let person1 = new Person("Jeff", 45);
let programmer1 = new Programmer("Dom", 65, 12)

programmer1.describe();



 */
//polymorphism

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
        super.makeSound();
        console.log("Woof")
    }
}

const a1 = new Animal("Dom");
const a2 = new Dog("Jeff");

a1.makeSound();
a2.makeSound();
