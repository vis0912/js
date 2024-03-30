// singleton
// Object.create


// object literals

const mySym= Symbol("key1")

const jsUser= {
    name:"Vishal",
    "full name":"VishalPranav",
    //mySym:"mykey1",  wrong syntax for symbol. it gets treated as string
    [mySym]:"mykey1",
    age:20,
    location:"Pune",
    email:"vishal@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"] 
}

console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser."full name");   //cant be done
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email="nikhil@gmail.com"
console.log(jsUser.email);

// Object.freeze(jsUser)
jsUser.email="prathmesh@gmail.com"
console.log(jsUser.email);

jsUser.greeting=function(){
    console.log("Hello JS");
}

jsUser.greetingTwo=function(){
    console.log(`Hello JS ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());