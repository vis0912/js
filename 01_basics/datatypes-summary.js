// Primitive
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')    // Symbol is for creating uniques
const anotherId=Symbol('123')

console.log(id === anotherId);

const bigNumber= 347262637283837263637373272n   //add n at last

// Reference (Non Primitive)
// Array, Objects, Functions

const heros=["Ironman","Captain","Thor"];

let myObj= {
    name:"vishal",
    age:22
}

const myFunction= function(){
    console.log("Hello World");
}           

console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)-copy, Heap(Non Primitve)-reference

let myYoutubeName="Vishaldotcom"

let anotherName=myYoutubeName

console.log(anotherName);

anotherName="chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email:"vishal@gmail.com",
    upi:"vis@ybl"
}

let userTwo=userOne

console.log(userTwo.email);

userTwo.email="nikhil@gmail.com"
    

console.log(userOne.email);
console.log(userTwo.email);










