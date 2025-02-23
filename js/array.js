// COmplex Data type
// Object, Array, Date
// 1. Multiple Datatypes exists within Complex Data type
// 2. CRUD (Create read update delete)

// CRUD
// Create

const entity = [];
const entities = new Array();

const group = ["susan","kandel","chitwan"];
const groups = [
   { 
    name:"susan kandel",
    joinedData:"1st feb, 2025",
    isFullTime: true,
}

];

//read 

console.log(group[0]); // array index
console.log(groups[0]); // array index

//update
//ES5

group[0] = "susan kandel";
console.log(group)

//Delete 
delete group[0];
console.log(group)

//delete ["r","a","k"] => to ["a","k"]

const data = ["r","a","k"];
console. log (data.shift())// r
console. log(data); // • k • ]
console. log(data.push("r")); // prototypes
console. log (data);



// ES6
// Destructuring Objects/Array using Spread Operator


const user = {
    name:"susan",
    password: "abc",
    role:"admin",
};
const {password, ...rest} = user;
console.log(rest);

const users = ["susan","kandel","chitwan"]

//spread with destructure

const [a,...information] = users;
console.log(information);

//explored

//crud
//array mentho
//destructure
//immutable js   (map , fital reduce, find,some, every)




const car = {
    name:"tata",
    model: 2021,
};

console.log(car);

delete car.model;

console.log({car});
console.log(car.model);

//immutable js 

const students =[{
    name:"susan kandel",
},
{name:"sadip bhattarai"},
];

const newStudents = students.map((student) => student.name.toUpperCase());

console.log(students);
console.log(newStudents);


