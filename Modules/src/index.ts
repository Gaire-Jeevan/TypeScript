import { Circle } from "./shapes";

let circle = new Circle(1);
console.log(circle.radius);

/* Default Export  */

import Store, { Format } from "./storage";
/*  here Store is default export from storage file and Format is named export. Store is export directly as it is set default export in file '''storage''' */

/* Wild Card Import  */

import * as Circle1 from "./shapes";

let circle2 = new Circle1.Circle(1);
