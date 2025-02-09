console.log('Hello, world!');


//ES5
// var
var name = 'susan'; //variable declaration
name= 'john'; //override 
console.log(name);



// ES6
// let, const
const person = 'susan'; //declaration variable
name= 'john'; // no override
console.log(person);

let name1 = 'susan'; //allows override
name = 'sadip';
console.log(name1); 



////

// alert('Hello, world!');

// const user = prompt('What is your name?');
// console.log(user);

// const newuser = confirm('Are you 18 plus');
// console.log(newuser);


// write a program that ask user name and alert their name
//with greetings

//1
const username = prompt('What is your name?');
alert('Hello, ' + username + '!');

//string literals
alert(`Hello, ${username}!`);


