//1. single line comment(//) 
//2. multi line comment(/**/)

/*
Premitive data types
String, number, boolean, null, undefined, symbol

-define data types:string

complex data types
object
    object
    array
    Date
*/

const name = 'susan'; //string (Character, text, word, sentence, paragraph)
const pi= 3.14; 
let x;
const data = null;
const ismale=true;

//type conversion / type coercion

const value = "13";
console.log (typeof value); //type check

const actualNumber = Number(value);//type conversion
console.log(actualNumber);
console.log(typeof actualNumber);

//convert number to value
const num = 13;
console.log(num.toString());
console.log (typeof value);

//write a program that divide two numbers asking user to input 2 number and alert the remainder

// const num5= Number (prompt("enter first number"));
// console.log(typeof num5);
// const num6=  + prompt("enter second number");
// console.log(typeof num6);
// const result = num5 / num6;
// alert(`The result is ${num5} and ${num6} is ${result}`);

//unary operator

let val=1;
val++; // Reasult 2
val += 1;//Reasult 3
console.log(val);