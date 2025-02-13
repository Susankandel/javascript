//conditinal operator/ statement

//ES5
//IF ELSE
//switch-case

//ES6
//ternary operator

// == for condition checking

// const gender = prompt("Gender");
// if (gender=="m") {
//     console.log ("male");
// }
//  else {
//     console.log("Female");
// }

// const day = prompt("Enter day from 1-7");
// switch (day) {
//     case "1":
//         console.log("Sunday");
//         break;
//     case "2":
//         console.log("Monday");
//         break;
//     case "3":
//         console.log("Tuesday");
//         break;
//     case "4":
//         console.log("Wednesday");
//         break;
//     case "5":
//         console.log("Thursday");
//         break;
//     case "6":
//         console.log("Friday");
//         break;
//     case "7":
//         console.log("Saturday");
//         break;
//     default:
//         alert("Invalid input");
// }

// Write a js program thar handles the greading
//logic
//80% and avove: distinction
// 70% - 79.99%: first division 
//60% - 69.99%: second division
//Below 60 : fail

// const grade = Number(prompt("Enter your marks"));

// if (grade >= 80 && grade <= 100) {
//     alert("Distinction");
// } else if (grade >= 100) {
//     alert("invalid input");
// }
//  else if (grade >= 70 && grade <= 79.99) {
//     alert("First division");
// } else if (grade >= 60 && grade <= 69.99) {
//     alert("Second division");
// } else {
//     alert("Fail");
// }


const score = +prompt("Enter your marks");
switch (true) {
    case score >= 80:
        alert("Distinction");
        break;
    case score >= 70:
        alert("First division");
        break;
    case score >= 60:
        alert("Second division");
        break;
    default:
        alert("Fail");
}

// Es6 Ternary operator

// if (gender === "m")
//     else {
// }


// const gender = prompt("Gender");
// gender === "m" ? alert("male") : alert("female");


//write a js program that ask user their drink order
// tea, coffee, coke, milk, water 
// alert => you have ordered.

const drink = prompt("Enter your drink order");
drink === "tea" 
? alert(`You have ordered tea`) 
: drink === "coffee"
? alert(`You have ordered coffee`)
: drink === "coke"
? alert(`You have ordered coke`)
: drink === "milk"
? alert(`You have ordered milk`)
: drink === "water"
? alert(`You have ordered water`)
: alert(`you have ordered ${drink}`);

