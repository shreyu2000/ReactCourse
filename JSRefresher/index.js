// Import & Export
// Named & Default Exports 
// Export  let apiKey = “hgsdjyfgjahfgyda”  =>
// export  default “jhsgdfhjbsd” => only one default export per file 
// Import  { apiKey , name1 ,name2  } from “./filename”  => 

// Variables ,Values & Operators 
// Variables -data containers ->  Reusability ,Readability 
// camelCase ,$,_ 
// Let =>reassign value 
// Const =>cannot reassign value 
// Operators=>  
// === equal to and type


// #FUNCTIONS  
// function myFunction(param1 , param2=”defualtparam” ){
// console.log(“gjshdfgh”)
// return  value ;
// }
// const  result = myFunction(argu1 ,argu2);
// ARROW Function
// function(){
// }

//()=>{}

//OBJECT 

const user = {
    name:"shreya",
    age:24,
    greet(){
        console.log("Hello");
    }
};
console.log(user.name);

//classes 

class User {
    constructor(name ,age){
        this.name = name;
        this.age =age;
    }
    greet(){
        console.log("hi");

    }
}

const user1 = new User("Mau" ,24);
console.log(user1);
user1.greet();


// ARRAYS
//arrays can contain arrays 
//acess by indexes 

// const hobbies  = [""]

//map () ,filter ,reduce 

// array.map((item)=>{
//     return item + "!";
// })

// #Destructuring 

// spread operator  [...]
//const newArray = [...array1Values ,...array2Values]

//controls structure
// for of loop 

//setTimeout 

