// array
const myArr = [1,2,3,4,5];
// console.table(myArr);

myArr[0] = 'sahil';
console.table(myArr);

const newArr = new Array(5,6,7,8,9);
console.log(newArr);

// array methods
myArr.pop();
myArr.push(777);

myArr.unshift('unshift'); // add this to first index value
myArr.shift(); // remove value from the first index


console.table(myArr);
console.log(myArr.includes(0));
console.log(myArr.indexOf(777));

// it will be a string and bind array in comma separated manner
const otherArr = myArr.join();

console.log(myArr);
console.log(typeof(otherArr));
console.log(otherArr);


// slice or splice
console.log("A ",myArr);

// slice function does not include range but does not change original array;
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr);

// splice() include ranges and manipulate original array
const myn2 = myArr.splice(1,3);
console.log(myn2);

console.log(myArr);


//////////////////////////////////////////////////////////////////////////////////

const num = [1,2,3,4,5];
const alph = ['a','b','c','d'];

// this will push the array alph inside the array num as a single element
// num.push(alph);
// console.log(num);

// to concat two array this is one of the methods as it return new array we need variable 
// const newarr = num.concat(alph);
// console.log(newarr);


// but spread operator does this and widely used method to concate two or more array
const na2 = [...num,...alph];
console.log(na2);


// flat() function spread encapsulated value
const mixed = [1,2,3,[4,5,6],[7,8,9,[10,11,12]]];

const simplified = mixed.flat(Infinity);
console.log(simplified);


// return true or false
console.log(Array.isArray("sahil"));

// from() convert every thing into array
console.log(Array.from("sahil"));

// intresting
console.log(Array.from({name: "sahil"}));

let sc1 = 1;
let sc2 = 2;
let sc3 = 3;

console.log(Array.of(sc1,sc2,sc3));




