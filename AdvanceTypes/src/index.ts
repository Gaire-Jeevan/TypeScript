// Advance OBJECT

// Type ALIAS

// this type can be reused with annotation, by convention we use Pascal Case
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

// here we are using the type Alias (Employee) with annotaion
let employee: Employee = {
  id: 1,
  name: "Jeevan",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee);

// UNION TYPES
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

// INTERSECTION TYPE

// it helps to the member to hold the type (more than 1) at the same time
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// now it has 2 type at same time
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// LITERAL TYPES

// sometime we want to limit our value set to variable
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// Nullable Type
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase);
  else console.log("Hola!");
}

greet(null);

// Optional chaining

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customer?.[0]

// Optional call
let log: any = null;
log?.("a");

// Nullish Coaelscing Operators

let speed: number | null = null;
let ride = {
  // Falsy (undefined, null, "", false, 0)
  // Nullish coalescing operator

  // if speed is undefined or null then it will not execute otherwise it will execute
  speed: speed ?? 30,
};

// TYPE ASSERTIONS

// we know more types then TypeScript so while retreving value of id phone it doesn't suppert defaultly instead we have to tell typescript compiler that it is of "HTMLInputElement"
let phone = document.getElementById("phone") as HTMLInputElement;
// HTMLElement --> class defined in javascript that represent any kind of element
// HTMlInputElement --> it is specific element to retrieve value entered by user

phone.value;

let contact = <HTMLInputElement>document.getElementById("contact");
contact.value;

// THE UNKNOWN TYPE

// when we use type any here then it doesn't show error when we use any method here that may present in document object or not so we use 'UNKNOWN'
// after using unknown method it doesn't whether the method is present in object or not so we use "Narrowing" with it
function render(document: unknown) {
  // Narrowing

  if (typeof document === "string") {
    document.toUpperCase();
  }
  // document.move();
  // document.fly();
  // document.whatEverWeWant()
}

// THE NEVER TYPE

// we want this function to constanlty watch a event, perhaps it is constantly watching the message queue waiting for the next event --> this function doesn't return any value

// by default the type of this function is 'void' so the unreachable line is not detected by typescript compiler so we use never for this purpose
function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {
    // Read a message from a queue
  }
}

reject("...")

// this line are never executed as reject function always throw error
// processEvents();
// console.log("Hello");
