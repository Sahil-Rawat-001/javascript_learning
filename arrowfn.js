// example of this

const user = {

    username: "Sahil",
    price:  999,

    greetMessage: function(){

        console.log(`${this.username}, welcome to js`);

        // if we log 'this' inside the user obj it prints the current context
        // console.log(this);
    }
}

// user.greetMessage();

// user.username = "Rawat";

// user.greetMessage();

// if we print 'this' outside the user obj this will print a {} empty object
// console.log(this);



// this function will print a lot of values when we print 'this'
function funcOne(){
    let username = "Harry potter"

    // this line prints undefined
    // console.log(this.username);
}


funcOne();




// arrow function

const add = (num1, num2) => {return num1+num2};

console.log(add(2,3));;


// arrow function implicit return

const twox = (num1) =>  num1*2;

console.log(twox(3));


// another example
const threex = (num) => (num*3);

console.log(threex(4));

// if we have to return object in an arrow function 

// this will print undefined because we can't return object like that
// const myobj = () => {username: "Hello"};

// correct way to return an object in an arrow function
const myobj = () => ({username: "Hello"}); 

console.log(myobj());



