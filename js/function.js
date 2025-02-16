// Function are the building block of Application

//How it works?

//function take input, user logic, and return output
// function must do only 1 task

//syntax    

//ES5
// function <fn-name>(input){
//     logic
//     return output
// }





//Write a function to add 2 numbers
//Function decleration / Initalization
//input are called parameters, arguments

// function sum(num1 ,num2){
//     const result= num1+num2;
//     return result;

// }


//input data
// const value1= prompt("enter first number");
// const value2= prompt("enter second number");

// const answer = sum(value1,value2)
// alert(answer)

//Do not repert yourself

// console.log(sum(1,0))
// console.log(sum(2,0))
// console.log(sum(3,0))
// console.log(sum(4,0))
// console.log(sum(5,0))
// console.log(sum(susan,kandel))

//write a function to calculate the area of circle pr2

// function area(radius){
//     return 3.14 * +radius * +radius;
// }

//function call

// console.log(area("4"));
// console.log(area(4))



/*
1.Arrow Function(ES6)
2.Default Function
3. Parameterization Function
4. closure  100% interview asked question
5. IIFEs
6. Explicit Function
7. Implicit Function
8. Anonymous Function
9. Inliner Function
10. Callback Function
11. pure function

*/

//ES6
//funcrion arrey


//function sum(num1,num2){
//const result = num1,num2
//return result
//}

//Arrow function
//Function Define
// const sum = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// };

//function call
// console.log(sum(2,2));


//Default Function

// const pagination = (page) => {
//     return `page number ${page}`;
// };

// console.log(pagination(2));
// console.log(pagination(1));


// //write a function that say welcome person
// //if user name is provided else it says welcome user

// const userName= (person="userName") => {
//     return (`welcome ${userName}`)
// }

// console.log(userName(susan));
// console.log(userName())

// // Parameterization Function

// const user = ({user1, user2, user3}) => {
//     return `${user1},${user2}, ${user3}`;
// };

// console.log(users{{user1:"r", user2:"a", user3:"m"}});

//Write a parameterization Function to calculate the volume of cuboid
//volume= l*b*h

// const volume =({length,breath, height})=>{
// return length* breath*height
// };

// console.log(volume({length:2, breath:4, height:4}))

//IIFEs (Immediately Invoked Function Expression)

// (()=> {})();

// ((a="test")=>{
//     console.log ("IIFES", a)
// })(test);


// Function can return Primitive DataType / Complex DataType / Function 

// Closure
const counter = () => {
    let count = 1;
    return() => {
    const increment = count ++;
    return increment;
    }
};

const counterA = counter();
const counterB = counter();

console.log(counterA()); //Dashai
console.log(counterA()); //Dashai
console.log(counterA()); // Dashai

console.log(counterB()); // Tihar
console.log(counterB()); // Tihar

//Private Variables
//Local Variables
//Global Variables
//Lexical Variables
//Closer Variables ==> Lexical Scoping => local , Private Variables, Global Variables

// variables that  can be accssed outside or even inside the function is called global function

//Explicit Function 
const summer = () => {
    return 0;
}
console.log ({summer:summer()});

//

const addition =(a,b) => {
    const sum = a+b;
    return sum;
};

// Implicit Function
const summer1 =() => 0;
console.log(summer1());

//
const addition1 = (a,b) => a + b;
console.log (addition(4,5));


//Anonymous Function 
const test = function(){
    console.log("Test");
};
test();
//logger Implimentation +> warn user

// inline Function 
const testInLine = function(){};

//callback function

//callback is the function that accepts another function as an parameter.

const print = (data) =>{
    console.log(`hello ${data}`);
};

const main = (user = "user", callbackFn) => {
    const information = `Mr ${user}`;
    return callbackFn(information);

};

main("susan", print)


//Write a js function that calculate the volume of cuboid
//v= l*b*h

const volume = (length=0, breath=0, height=0) => length*breath%height;
console.log (volume(2,4,6))

// Write a js closure function that  mimics the bank account opening and deposit

const Account = () => {
    let balance  =0;
    return (deposit) =>{
        return balance += deposit;
    }
}
const accountHolder1 = Account();
const accountHolder2 = Account();
 
console.log(accountHolder1(100));
console.log(accountHolder1(200));
console.log(accountHolder2(500));

//Write a callback function to calculate the vat of the product
//13% of item cost

const calcTax = (qty,cp) => 0.13 * +qty * +cp;

const cart = ({item, quantity=1,tax}) =>{
    return tax(quantity,item);
}

const taxAmt = cart ({item: 1000, tax: calcTax});
console.log(taxAmt)

// pure Function result dont change for same input 
//Utilities Function
//proper Case Function Susan Kandel

 

