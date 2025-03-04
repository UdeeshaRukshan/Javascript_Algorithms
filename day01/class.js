// Class definition: Always starts with the 'class' keyword
class Person {
    // 1. Constructor: Called automatically when a new object is created
    constructor(name, age) {
        this.name = name; // Instance property
        this.age = age;   // Instance property
        console.log('Constructor is called.');
    }

    // 2. Instance Method: Can be accessed via an object of the class
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // 3. Static Method: Belongs to the class, not the instance
    static description() {
        console.log("This is a Person class.");
    }

    // 4. Getter Method: Used to access a property in a controlled way
    get info() {
        return `${this.name} is ${this.age} years old.`;
    }

    // 5. Setter Method: Used to modify a property in a controlled way
    set changeName(newName) {
        this.name = newName;
    }

    // 6. Private Field: Only accessible within the class (Introduced in ES2020)
    #secret = "Hidden Information";

    // 7. Method accessing a private field
    showSecret() {
        console.log(`The secret is: ${this.#secret}`);
    }
}

// Creating an instance (object) of the Person class
const person1 = new Person("Alice", 25); // Calls the constructor
person1.greet(); // Calls the greet() method

// Accessing Static Method
Person.description(); // This is a Person class.

// Using Getter
console.log(person1.info); // Alice is 25 years old.

// Using Setter
person1.changeName = "Bob";
console.log(person1.info); // Bob is 25 years old.

// Trying to access private field (This will cause an error)
// console.log(person1.#secret); // ❌ Syntax Error

// Accessing private field via a method
person1.showSecret(); // The secret is: Hidden Information

// ===========================================
// INHERITANCE (Extending a Class)
// ===========================================
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call the parent class (Person) constructor
        this.grade = grade; // New property for Student class
    }

    // Overriding a Method
    greet() {
        console.log(`Hello, I am ${this.name}, a student in grade ${this.grade}.`);
    }
}

// Creating an instance of Student
const student1 = new Student("Charlie", 18, "12th Grade");
student1.greet(); // Overridden method
console.log(student1.info); // Uses inherited getter

// ===========================================
// CLASS WITH PRIVATE METHODS AND FIELDS (ES2020+)
// ===========================================
class BankAccount {
    #balance; // Private field

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.#balance = balance;
    }

    // Private Method
    #calculateInterest() {
        return this.#balance * 0.05;
    }

    // Public Method to access private method
    getInterest() {
        return this.#calculateInterest();
    }

    // Getter for balance
    get balance() {
        return this.#balance;
    }

    // Setter for balance (with validation)
    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative.");
        } else {
            this.#balance = amount;
        }
    }
}

// Creating an instance of BankAccount
const myAccount = new BankAccount("123456", 1000);
console.log(`Balance: ${myAccount.balance}`); // 1000
console.log(`Interest: ${myAccount.getInterest()}`); // 50

// Trying to modify balance using setter
myAccount.balance = -500; // Invalid
myAccount.balance = 1500; // Valid
console.log(`Updated Balance: ${myAccount.balance}`); // 1500
