// basic 1

function addNum(num1,num2) {
    
    // if(typeof num1 === "number" && typeof num2 === "number")
    // console.log(num1+num2);
    // else
    // console.log("It is not a number");
    
    return (num1+num2);
    console.log(num1+num2); // this statement will never run

}

// addNum(a,b);

const result = addNum(5,5);
console.log("Result: ",result);


// basic 2

function greet (name = "unknown"){
    
    if(name ===  undefined)
    console.log("Please enter a name");
    return `Hello ${name} sir, welcome to uttarakhand`
}

// console.log(greet("Sahil Rawat"));
console.log(greet());




// basic 3

function calculatePrice(...num1){
    
    let sum = 0;

    for(let i = 0; i < num1.length; i++){
       sum += num1[i];
    }

    return sum;
}

console.log(calculatePrice(5,6,4));



// intermediate handling objects into functions
const obj1 = {
    name: "sahil",
    age: 23
}

function handleObj(obj1){

    console.log(`hey ${obj1.name} how are you, I know that you are ${obj1.age} years old`);
}

handleObj(obj1);


