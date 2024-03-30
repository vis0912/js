const tinderUser= new Object()  //singleton object
//const tinderUser={}  // non singleton

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Vishal",
            lastName:"Pranav"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname.lastName);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)  // {} is target and rest are source
const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:"1",
        email:"h@gmai.com"
    },
    {
        id:"2",
        email:"h2@gmai.com"
    },
    {
        id:"3",
        email:"h3@gmai.com"
    }
    
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course={
    courseName:"Js",
    price:"999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor  //everytime not needed to write this

const {courseInstructor}= course
const {courseInstructor: instructor}= course

console.log(courseInstructor);
console.log(instructor);


// API - json format
// {
//     "name":"Vishal",
//     "courseName":"Js",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]

