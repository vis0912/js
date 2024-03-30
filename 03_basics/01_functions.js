
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1,number2) {
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2) {
    // let result=number1+number2
    // return result

    return number1+number2
    console.log("Hello"); // wont be printed after return statement
}

// addTwoNumbers(3,4)

const result=addTwoNumbers(3,4)
// console.log(result);

function loginUserMessage(username="Sam") {   // if nothing is passed, sam will be passed
    if(username === undefined){   // !username is equivalent
        console.log("Please enter a username!");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vishal"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {    //... is both rest and spread
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"Vishal",
    price:199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
// handleObject({
//     username:"Nikhil",
//     price:399
// })

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));