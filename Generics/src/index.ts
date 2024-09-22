// Generic class

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>("1", "a");
let pair2 = new KeyValuePair(2, 1); // no need to explicitly tell compiler about generic the compiler is smart enough to tell the type of argument that we type inside the parameter initialization

// GENERIC method
function wrapInArray<T>(value: T) {
  return [value];
}

let numbers = wrapInArray(1);

class ArrayUtils {
  static wrapInArrays<T>(value: T) {
    return [value];
  }
}

let number = ArrayUtils.wrapInArrays(1);

// GENERIC INTERFACES

interface Result<T> {
  data: T | null;
  error: string | null;
}

// here we have to use generic in fetch to as it is returning generic
function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<Product>("url");
result.data?.title;

// Generic Constraints

// we can limit the type of generic

function echo<T extends number | string>(value: T): T {
  return value;
}
echo(1);

// object
function echo1<T extends { name: string }>(value: T): T {
  return value;
}
echo1({ name: "Jeevan" });

// Class or interface

interface Person {
  name: string;
}

function echo2<T extends Person>(value: T): T {
  return value;
}

// Class
class Person1 {
  constructor(public name: string) {}
}

class Customer extends Person1 {}

function echo3<T extends Person1>(value: T): T {
  return value;
}

echo3(new Customer("Jeevan"));

// Extending Generic Classes
// Lets say we are building e-commerce website and there are different object that we can store like. Product, Order, User etc

interface EProduct {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // the key of property
  // find(property: String, value: unknown): T | undefined {
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

// i) Passing on the generic type parameters
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

new CompressibleStore<EProduct>();

// ii) Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  // override after we implement key of operator
  // find(name: string): T | undefined {
  //   return this._objects.find((obj) => obj.name === name);
  // }
}

// iii) Fixing generic type parameter
class ProductStore extends Store<EProduct> {
  filterByCategory(category: string): EProduct[] {
    return [];
  }
}

let store = new Store<EProduct>();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
// this error is catch after we use "keyof operator"
// store.find("nonExistingProperty", 1);

// Type Mapping

// what if we want readyonly properties of Product then by creating different class and make it's property will create hessel
// but we can use type mapping here
// - index signature
// - keyof

type ReadOnlyProduct = {
  readonly [Property in keyof EProduct]: EProduct[Property];
};

let product: ReadOnlyProduct = {
  name: "a",
  price: 1,
};

// making generic
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullabe<T> = {
  [K in keyof T]: T[K] | null;
};
