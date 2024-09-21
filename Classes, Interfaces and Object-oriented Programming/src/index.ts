class Account {
  //   readonly id: number;
  //   owner: string;

  // with this private keyword now balance is not accessible from outside this class
  //   private _balance: number;

  nickName?: string;

  //   parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    } else {
      this._balance += amount;
    }
  }

  //   private calcualteTax() {}

  //   Getter:-  method in class that helps to get the value of properties
  get balance(): number {
    return this._balance;
  }

  //   Setter:- this helps to set the value. by this out private properties are not direclty manipulated

  // I comment this line as balance is not manipulated directly

  //   set balance(value: number) {
  //     if (value < 0) {
  //         throw new Error('Invalid value')
  //     }
  //     else{
  //         this._balance = value;
  //     }
  //   }
}

let account = new Account(1, "Jeevan", 0);
account.deposit(100);

// console.log(account.getBalance())

// due to getter we can access value just like normal properties
console.log(account.balance);

console.log(account instanceof Account);

function getBalance() {
  throw new Error("Function not implemented.");
}

class SeatAssignment {
  // A1, A2, ...
  // Jeevan, John, ...

  // Index Signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Jeevan";
seats["A2"] = "Gaire";

// Static Members  --> property that are belong to class not object
class Ride {
  //   activeRides: number = 0;

  // due to static it is modified anywhere from the code so we use private keyword here
  private static _activeRides: number = 0;

  start() {
    // this.activeRides++;
    Ride._activeRides++;
  }

  stopt() {
    // this.activeRides--;
    Ride._activeRides--;
  }

  static get activeRides() {
    return this._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

// console.log(ride1.activeRides);
// console.log(ride2.activeRides);

// accessing static property
console.log(Ride.activeRides);

// INHERITANCE --> mechanisms that allows us to reuse our code
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

// let student = new Student(1, 'John', 'jogn@gmail.com')

class Teacher extends Person {
  // METHOD OVERRIDING
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

// POLYMORPHISM

class Principal extends Person {
  override get fullName() {
    return "Principal " + this.firstName + " " + this.lastName;
  }
}

printNames([
  new Student(1, "John", "Smith"),
  new Teacher("Jeevan", "Gaire"),
  new Principal("Mary", "Smith"),
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// Private Vs Protected Members
// private methods or variable are only available in the class and they are not inheritant i.e. they are not available for use for child classes
// protected methods  or variable are only available in the class and they areinheritant i.e. they are available for use for child classes

// Abstract Classes and Methods
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

// Interface

// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
