// const foodA = ["Noodle","pasta","Ice-cream"];
// const foodB = ["Fries","Ice-cream","Pizza"];

// //compare the 2 array and find common food if any.
// //map reduce filter some every

// const result = foodA.find(food => foodB.includes(food))
// console.log(result)
 
 
//  const userRoles = ["user", "manager", "guest"];
//  const pageRole = ["admin", "manager"];

//  //Is the user allowed to access return boolean result

//  const roleCheck = (user=[], page=[]) =>
//      user.some((role)=>page.includes(role));
 

//  const result = roleCheck(userRoles, pageRole)
//  console.log(result);

 //Pagination

 const page = 2;
 const limit = 2;
 const data = [1,2,3,4,5,6,7,8,9,20];

//page 1 =[1,2]
//page 2 =[3,4]
//page 3 =[5,6]
// //page 10 =[]

    const Pagination = (page=1, limit=5) => {
        const start = (page-1) * limit;
        const end = start + limit;
        return data.slice(start,end);
    };

    console.log(Pagination(1,2));
    console.log(Pagination(2,2));
    console.log(Pagination(10,2));



    //Sort in ascending order basrd on age

    const unshortedData = [
        { name:"A", age:10},
        { name:"B", age:100},
        { name:"C", age:18},
        
    ];

    const ageShoter= () =>{
        return unshortedData.sort((a,b)=> a.age - b.name);
    };

    console.log(unshortedData())

        

