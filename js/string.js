// write a function that convert string to lower case

// const lowerCase =(Test="") => String("text").toLowerCase();

// console.log(lowerCase("SUSAN KANDEL"));
// console.log(lowerCase(12345));

//write a js to convert long text to...
//Ram is a teacher at brodway => Ram is a ...

// Expected output: "the lazy dog."(Truncate)
//solution : slice $ concat


// // 1st Way
// const Truncate = (text="") => {
// const textData = String(text);
// const textLength = textData.length;
// if (textLength>9){
//     const remaningText = textData.slice(0,9);
//     return remaningText.concat("...");

// } else 
// return textData; 
// };

// console.log(Truncate("Ram is a teacher at brodway"));

// //2nd Way

// const TruncateES6= (text="")=>
//     String(text).length>9
//     ?String(text).slice(0,9).concat("...")
//     :String(text);
// console.log(TruncateES6("Ram is a teacher at brodway"));





//Write a function to convert text to slug
// Susan is a teacher  => susan-is-a -teacher

//write a function to check if phone number is mobile number or not
//10 digit 
//start with 98

//write a js function to create a proper case
//susan kandel to "Susan Kandel"

//write a js function to clean data
//susan      kandel to "Susan Kandel"

const properCase = (data ="") => {
    const text = String(data).toLocaleLowerCase();
    let result= "";
    let check= "true";
    for (let i =0; i <text.length; i++){
        const char = text[i];
        if (check) {
            result += char.toUpperCase();
            check=false
        }
        else if (char === "") {
            result += char;
            check = true;
        } else{
            result += char;
        }
    }
    return result;

}

console.log(properCase("sUSan kANDEL"))
console.log(properCase("susan kandel"))


//write a js function to cONVERT ANY NUMBER TO FORMATTED NUMBER
// 1000 TO 1,000
//10000 TO 10,OOO


////write a js function to CHECK IF STRING CONTAIN THE WORD OR NOT
//"SUSAN IS A TEACHER => SEARCH TEACHER  TRUE
//"SUSAN IS A TEACHER => SEARCH TEACHER  False

