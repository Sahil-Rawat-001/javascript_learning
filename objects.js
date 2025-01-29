// there are two ways to declare any object 
// 1 like literals , 2 like constructors -- > singleton

// concept --> singleton 


// object literals

const mySym = Symbol("Key1"); // Symbol declaration

const user = {
    name: "sahil",
    "lastName": "Rawat",
    age: 22,
    ward: 2,
    city: "Rishkesh",
    qualification: ["10th","12th","BCA","MCA"],
    // to use symbol in obj
    [mySym]: "mykey1"
};

console.log(user);

// to access obj elements we can use 'obj_name.key' it will show value of that key but is outdated method
// instead we use obj_name["keyname"] keyname inside quotes is for the js treat it as a string 

console.log(user["qualification"]);

// if I want to print 'lastName' ther only one way that is use square brackets
console.log(user["lastName"]);
console.log(user[mySym]);


// manipulation in values of obj
user.ward = 3;
console.log(user);

// if we want that no value is manipulated so we have to freeze the obj
// Object.freeze(user);

// does not change anything
user.name = "suraj";
console.log(user);

user.greeting = function(){
    console.log(`Hey, ${this.name} have a nice day`);
}

console.log(user.greeting());


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const politicalParties = new Object();


politicalParties.name = "BJP";
politicalParties.id   = "1A";
politicalParties.isPower = true;


// console.log(politicalParties);

const regUser = {

    email : "xyz@gmail.com",
    fullname: {

        userFullname:{
            firstName: "Sahil",
            lastName: "Rawat"
        }
    } 
}

//console.log(regUser.fullname?.userFullname.firstName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}


// we can combine two obj like this but this will provide problem and provide object inside obj
// const obj3 = {obj1,obj2};
// console.log(obj3);

// instead we can use this method but it is not so used
// const obj3 = Object.assign({},obj1,obj2);

// we can use spread ops
const obj3 = {...obj1,...obj2};
console.log(obj3);


const userData = [

    {
        id: 1,
        age:20
    },
    {
        id: 2,
        age: 22
    }
];

console.log(userData[1].id)


// interesting methods
console.log(Object.keys(politicalParties));
console.log(Object.values(politicalParties));
console.log(Object.entries(politicalParties));

// interesting methods
console.log(politicalParties.hasOwnProperty("name"));



