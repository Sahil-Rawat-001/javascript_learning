// nested scope


// The child function can access variables of parent function but vice verca is not possible
function one() {

    const userName = "Alex";

    function two(){

        const website = "Google";
        console.log(userName);  // inner func can access the outer function variables
    }
    
     // but outer func can never access inner func variable due to scope
    // console.log(website); // this give error inaccessible
    two(); 
}

one(); // executing one




// nested if-else

if (true){

    const letter = "A";
    if(letter === "A"){
        const web = "Facebook";
        console.log(letter + web); 
    }

    // console.log(web); // in this web is not accessible and create error
}

// console.log(letter); // This will never print because it is inaccessible





// interesting

// if we call addOne() function here before the definition it will execute
console.log(addOne(4)); // show output 5

// This is normally called function
function addOne(num){

    return num + 1;
}

// addOne(5); // this will not print any output



// let see it this function execute if we call it before function defination
console.log(addTwo(4)); // this does not show output and throw error

// but this one can be called expression, we are holding function in a variable
const addTwo = function(num){
    
    return num+2;
}

// addTwo(5); // again this will not print any output

