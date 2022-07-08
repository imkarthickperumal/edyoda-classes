// console.log("Doubts | Remaning Topics");

var userName = "John";
var userName = "Jane"; // Re-declaration of a variable
userName = "Jane";// Value assignment

// console.log(userName);


let email = "abcs@gmail.com";
// let email = "abcs@gmail.com"; //you cannot reassign variable value bcoz (block-scope) let
email = "xbcy@gmail.com"; // Value assignment
// console.log(email);


// const price = 100; 
// price = 200; // value cannot change bcoz const variable used its constant
// console.log(price);


// var let and const are different in scope as well


// var is a function scope
// console.log(age);
// if(true){
//     var age = 20;
//     console.log(age);
// }
// console.log(age);

// let and const block scope variable
// outside block not allowed let and const

// console.log(age);
// if(true){
//     let age = 20;
//     console.log(age);
// }
// console.log(age);

// console.log(age);
// if(true){
//     const age = 20;
//     console.log(age);
// }
// console.log(age);


// let users = ["John","Jane"];
// // users = ["Abiram","Jack"];
// users.push("Abiram");
// users.push("Jack");
// console.log(users);

// const users1 = ["John","Jane"];
// users = ["Abiram","Jack"];
// users.push("Abiram");
// users.push("Jack");
// console.log(users1);

// let different memory location
let welcomeMsg = function(){
    console.log("Welcome to let variable");
} // 0ffx2 memory location

welcomeMsg = function(){
    console.log("New welcome to let variable");
} // 0aa1x new memory location
welcomeMsg();




// const age = 20; // const dosen't memory location 
// age = 40;
// console.log(age);

function understandingVariables () {
    var fName = "John";
    let lName = "Doe";
    const email = "john@example.com";

    console.log(fName);
    console.log(lName);
    console.log(email);
}

// understandingVariables();


// console.log(fName); // outside not allowd bcoz scope level variable
// console.log(lName);



// let age = 10;
// console.log(age);
// if(true){
//     age = 15;
//     console.log(age);
// }
// console.log(age);

// const age = 10;
// console.log(age);
// if(true){
//     age = 15;
//     console.log(age);
// }
// console.log(age);


// var age = 10;
// console.log(age);
// if(true){
//     var age = 15;
//     console.log(age);
// }
// console.log(age);


// let a = 10;
// console.log(a);
// if(true){
//     var age = 15;
//     console.log(age);
// }
// console.log(age); // error


// for(var counter = 1; counter<=5;counter++){
//     setTimeout(function(){
//      console.log(counter);
//     //  console.log("Hello");
//     },5000)
// }



// for(let counter = 1; counter<=5;counter++){
//     setTimeout(function(){
//      console.log(counter);
//     //  console.log("Hello");
//     },2000)
// }

let user = {
    name: "John"
};
console.log(user);
console.log(user.hasOwnProperty('address'));
// Object.prototype.

Array.prototype.sum = function (num1,num2) {
    // console.log(num1+num2);
    return num1+num2;
}

const users = ['John',"Jack"];
console.log(users.sum(2,2));
console.log(users);

const msg = "Hello, welcome to Prototypes";
console.log(msg);
console.log(String.prototype);
