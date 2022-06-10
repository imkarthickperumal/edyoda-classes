// SYNTAX:
/*
 function functionName(parameters){
     function body/set of code lines
     function definition
 }
*/

function greetUser() {
  var userName = prompt("Enter your name");
  alert(`Welcome ${userName}`);
}
// greetUser();

function sum() {
  var num1 = prompt("Enter Number 1");
  var num2 = prompt("Enter Number 2");

  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (num1 >= 0) {
    console.log(num1 + num2);
  } else {
    console.log("Please enter a valid number");
  }
}

// Five times sum()function working loop
// for(var counter = 0; counter<5;counter++){
//     sum();
// }

// sum();

function diffrernce() {
  var num1 = prompt("Enter your first number");
  var num2 = prompt("Enter your second number");

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  console.log(num1 - num2);
}

// diffrernce();

function getPrompt() {
  prompt("Enter your name");
}
// getPrompt();

function calculate() {
  var operation = prompt("Enter the operation");
  switch (operation) {
    case "+":
      sum();
      break;
    case "-":
      diffrernce();
      break;
  }
}
// calculate();

function greetUser1(userName) {
  console.log(`Welcome ${userName}`);
}
// greetUser1('Vikram3');
// greetUser1('Kaithi2');
// greetUser1('Vikram');
// greetUser1('Kaithi');

// var user = prompt('Enter Your Name');
// var user = 'Karthick';
// greetUser1(user);

function addNumbers(num1, num2) {
  // num1 and num2 are called a parameter
  console.log(num1 + num2);
}
// addNumbers(10, 20); // 10 and 20 are called a arguments
// addNumbers(20, 10);
// addNumbers(10, 20);

function addNumbers2(num1, num2, num3 = 0) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num1 + num2 + num3);
}
// addNumbers2(10,20);

// WE ARE TAKING A FUNCTION AS A PARAMETER TO ANOTHER FUNCTION
function printLog(message, logger) {
  logger(message);
}
// printLog('Welcome to JavaScript Course',console.log);

var price = 100; // Global scope
function calculateDiscount() {
  var discount = 50; // Local scope
  console.log(`Discount inside the function : ${discount}`);
  console.log(`Price inside the function : ${price}`);
}
// console.log(`Discount outside the function : ${discount}`);
// console.log(`Price outside the function : ${price}`);
// calculateDiscount();

//HOISTING

// 1. Variable Declaration
// 2. Variable Definition/Value

var userName; // Declaring a variable
userName = "Vikram"; // Defining a value
// console.log(userName);

console.log(firstName);
var firstName;

function welcomeLCU() {
  console.log('Welcome', uName);
  console.log('hello', uName);
  console.log('hello', uName);
  console.log('hello', uName);
  console.log('hello', uName);
  console.log('hello', uName);
  var uName;
}

welcomeLCU();

console.log(personName);
var personName;

var productDetails = 'Mobile';
function getProductDetails(){
  console.log(productDetails);
  var productDetails;
}
getProductDetails();
