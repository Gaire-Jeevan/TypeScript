let sales: number = 123_456_789;
let course = "TypeScript";
let is_published: boolean = true;
let level;

// about ANY type

function render(document: any) {
  console.log(document);
}

// ARRAYS

let num = [1, 2, 3, 4, 5]; // no need to type annotation as here all element in array are of type number so typesctipt compiler is smart enough to know it's type i.e number

let num1: string[] = []; // annotate is necessary here as in empty array it set to type any

// TUPLE
// it is fixed length array wherte each element has a particular type
//  we often use them when working with a pair of value
let user: [number, string] = [1, "Jeevan"];

// Enums
const enum Size {
  Small = 10,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// FUNCTION

//  if less argument is passed 

// Method I
// than defined in function use optional ?
// function calculateTax(income: number, taxYear?: number): number {
//   if ((taxYear || 2022) < 2022) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// Method II
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000, 2022)

// OBJECT
let employee: {
    id: number,
    name?: string, // name is optional if optional is not used then we will set name value to empty string we cannot set it to null or undefined
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Jeevan",
    retire: (date: Date) =>{
        console.log(date)
    }
}

console.log(employee)