const name = "Sahil Rawat ";
const id  =  50;

// console.log(name + id); // old syntax 


//******************************************************************************

// In modern js we use backtics (``) i.e, string interpolation by making placeholder and inject string

console.log(`Hello my name is ${name} and my id is ${id}`); // like this

// new way to create string
const city = new String('Rishikesh'); // this will return as an object
// with key value pairs

console.log(city);

// we can access keys value like
console.log(city[0]); // it will output R beacuse 0 is key and R is value;
console.log(city.__proto__);

console.log(city.length); // length is property of string
console.log(city.toUpperCase());
console.log(city.charAt(2)); // char at shows which character is present at given index;
console.log(city.indexOf('s')); // reverse of charAt;

//********************************************************************************************** */

// substring()
const newString = city.substring(0,5); // in this character at index 5 is excluded
console.log(newString);

// slice()
const anotherString = city.slice(-6,5); // in slice we can use -ve values this is diff b/w slice and substr
console.log(anotherString);

// trim()
const s1 = "   sahil    ";
console.log(s1);
console.log(s1.trim()); // it removes starting and ending space

// replace()

const url = "https://sahil.com/sahil%20rawat";
console.log(url);

// we can replace in string
console.log(url.replace('%20','-'));

// we can ask some thing like
console.log(url.includes('sahil')); // if 'sahil' is present in url then it give true 


// split()
const s2 = "sahil-rawat-minister-uttarakhand-government";
console.log(s2);

console.log(s2.split('-'));  // it will convert string into array in parts on the base of separator('-');
