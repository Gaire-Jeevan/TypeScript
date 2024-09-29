// DECORATORS

// CLASS DECORATORS

function Component(constructor: Function) {
  console.log("Component decorators called");

  // every object in javascript has prototype and it helps to inherit various properties and methods

  // here we are adding '''uniqueId property'''
  constructor.prototype.uniqueId = Date.now();

  // here we are adding '''insertInDOM method'''
  // --> every component should have these 2 properties and method. The class which use this '''Decorator''' and it's instance should have these.
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {}

// Parameterized Decorators

type ComponentOptions = {
  selector: string;
};

// Decorator factory
function Component1(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorators called");

    constructor.prototype.options = options;

    constructor.prototype.uniqueId = Date.now();

    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Component1({ selector: "#my-profile" })
@Pipe
// f(g(x)) -> first Pipe decorator called and its result send to component decorator
class ProfileComponent1 {}

// METHOD DECORATORS

function Log(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  const original = descriptor.value as Function;

  // if we want to make this code dry and want to use this method decorator for other method also then we should make parameter of type any and spread operator. (to make this function accept any no of parameter)
  // descriptor.value = function (message: string) {
  descriptor.value = function (...args: any) {
    console.log("Before");

    // if we want to pass this hard coded value desctiptor.value = function() no parameter in function
    // original.call(this, "Blue sky");
    original.call(this, ...args);

    console.log("After");
  };
}

class Person {
  @Log
  say(message: string) {
    console.log("Person says: " + message);
  }
}

let person = new Person();
person.say("Hello");

// ACCESS DECORATOR

/* decorator for accesoors like get and set */

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);

    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person1 {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person1 = new Person1("Jeevan", "Gaire");
console.log(person1.fullName);

// Property Decorator

function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },

      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} should be at least ${length} character long`
          );
        }
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  /* we cannot apply type public to password inside decorator because we are going to use property decorator in this property itself*/
  constructor(password: string) {
    this.password = password;
  }
}

let user = new User("21234");
console.log(user.password);

// PARAMETER DECORATOR

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vechicle {
  move(@Watch speed: number) {}
}
