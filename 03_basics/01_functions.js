
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
console.log(loginUserMessage());