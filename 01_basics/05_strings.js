const name="Vishal"
const repoCount=50

console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Vishal - hc - com')
console.log(gameName);
console.log(typeof gameName);

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne= "    hitesh      "
console.log(newStringOne);
console.log(newStringOne.trim());  //removes spaces from string on start and end part of string

const url="https://vishal.com/vishal%20pranav"
url.replace('%20','-')
console.log(url.replace('%20','-'));

console.log(url.includes('vishal'))
console.log(url.includes('it'))

console.log(gameName.split('-'));
console.log(gameName.split(' '));
console.log(gameName.split(''));
console.log(gameName.split('i'));




















