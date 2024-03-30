const score= 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));


const otherNumber=123.8966
console.log(otherNumber.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++++++++++ MATH ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  //absolute value
console.log(Math.round(4.3)); //round off
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.min(3,2,5,6,7));
console.log(Math.max(3,2,5,6,7));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);






