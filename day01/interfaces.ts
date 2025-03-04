interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    constructor(public name: string) {}

    makeSound() {
        console.log(`${this.name} says Woof!`);
    }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Buddy says Woof!
