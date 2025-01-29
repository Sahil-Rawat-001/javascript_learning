// we are checking the type of null and undefined 
console.log(typeof null);
console.log(typeof undefined);

// checking datatype
let score = 55;
console.log(typeof(score));

// suppose we have to convert data type from string to number
let run = "200";
console.log(typeof run);

// that's how we convert an string to number
let valInNumber = Number(run);
console.log(typeof(valInNumber)); // now we are sure that the new value is a number

// but here is the catch suppose we have something like this
let sector = "23A";
let secNumber = Number(sector); // now we have converted and 

console.log(typeof (secNumber)); // this will show us that type of new secNumber variable is Number

// But when we print it 
console.log(secNumber); // it show NaN -> not a number

// conversion notes

/*
  "33" => 33 Number
  "33abc" => NaN
  true  => 1;
  false => 0;
*/

//--------------------------------------------------------------------------------------------------------------------------





