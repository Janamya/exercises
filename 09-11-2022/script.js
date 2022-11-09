class Person {
    constructor (_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    description () {
        console.log(`I am ${this.name} and I am ${this.age} old`)
    }
    
}

class Programmer extends Person {
    constructor (_name, _age, _yearsExperience) {
        super(_name, _age);
        this.yearsExperience = _yearsExperience;
    }

    code () {
        console.log(`I am ${this.name} and I code`)
    }
}

let person1 = new Person("Anja", 33);
let programmer1 = new Programmer("Dom", 34, 12)

person1.description();
programmer1.code();


//Polymorphism - overrides the method
 class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Generic animal sound')
    }
} 


 class Dog extends Animal {
    constructor(name) {
        super(name);

    }

    makeSound() {
        console.log("Woof")
    }
}

const a1 = new Animal('Dom')
const a2 = new Dog("Jeff")
a1.makeSound();
a2.makeSound(); 


