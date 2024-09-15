"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let num = [1, 2, 3, 4, 5];
let num1 = [];
let user = [1, "Jeevan"];
let mySize = 11;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "Jeevan",
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
//# sourceMappingURL=index.js.map