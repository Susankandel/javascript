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

const volume =({length,breath, height})=>{
return length* breath*height
};

console.log(volume({length:2, breath:4, height:4}))

//IIFEs (Immediately Invoked Function Expression)

// (()=> {})();

((a="test")=>{
    console.log ("IIFES", a)
})(test);




