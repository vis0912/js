// Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,23)
let myCreatedDate2=new Date(2023,0,23,5,3)
let myCreatedDate3=new Date("2023-01-15")
let myCreatedDate4=new Date("12-09-2003")

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toDateString());
console.log(myCreatedDate4.toDateString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));

