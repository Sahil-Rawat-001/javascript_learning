const num0 = new Number(100);
console.log(num0);

// toString() convert number into string
console.log(num0.toString());

// toFixed set number of precision value after decimal
console.log(num0.toFixed(2));

const num1 = 23.4556;

// toPrecision()
console.log(num1.toPrecision(3)); // return string output

const num3 = 100000000;
console.log(num3.toLocaleString()); // it provide ',' between 0 makes easy to count 0 by default US - standard

// for indian standard
console.log(num3.toLocaleString('en-IN'));


//*******************************************  Maths  ************************************************************ */

/*
console.log(Math); // it is an object in itself
console.log(Math.abs(-3));
console.log(Math.round(5.67593));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.1));

console.log(Math.max(4,5,6,3,8));
console.log(Math.min(4,5,6,3,8));

*/

// provide random values between 0 an 1
console.log(Math.random());

console.log((Math.random()*10) + 1);
 
// formula
const min = 1;
const max = 6;

// important
console.log(Math.floor(Math.random() * (max - min + 1) + min));

 
