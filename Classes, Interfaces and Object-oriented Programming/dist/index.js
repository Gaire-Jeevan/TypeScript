"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        else {
            this._balance += amount;
        }
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Jeevan", 0);
account.deposit(100);
console.log(account.balance);
console.log(account instanceof Account);
function getBalance() {
    throw new Error("Function not implemented.");
}
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Jeevan";
seats["A2"] = "Gaire";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stopt() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return this._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
class Principal extends Person {
    get fullName() {
        return "Principal " + this.firstName + " " + this.lastName;
    }
}
printNames([
    new Student(1, "John", "Smith"),
    new Teacher("Jeevan", "Gaire"),
    new Principal("Mary", "Smith"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
//# sourceMappingURL=index.js.map