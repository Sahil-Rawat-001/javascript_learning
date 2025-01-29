// there are two types of data types primitive and non primitive
// javascript is a dynamically typed language

// 1. primitive

/*
  string
  number
  bool
  null
  undefined
  symbol (for making unique element)
  BigInt
*/



let id1 = Symbol('123');
let id2 = Symbol('123');

console.log(id1 == id2);



// 2. non - primitive (refrence type)

/*
  Array
  Objects
  Functions
*/

// array
const arr = ["Sahil", "Rawat" , "Rishikesh"];
console.table(arr);


// object
const obj = {

    name: "sahil",
    age: 22,
    course: "MCA"
};

console.table(obj);


// function

const myfunc = function(){

    console.log("Hello Sahil");
}

myfunc();

console.log(typeof myfunc)

// *****************************************************************************************

// memory

// There is two type of memory stack and heap

// stack (primitive data types) , heap(non - primitive)


