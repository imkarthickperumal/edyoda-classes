console.log("Revision & Practice");

// Tenary Operator
// expression ? <truthy-block> : <falsy-block>
var age = 18;
// if (age >= 15) {
//     console.log("You can give a vote")
// } else {
//     console.log("You can not give a vote");
// }

age < 15
  ? console.log("You can give a vote")
  : console.log("You can not give a vote");

// ONLY IF PART IS A VALID PRICE OF CODE
// if(age>18){
//     console.log("welcome to this club");
// }

//ONLY ELSE PART WILL GIVE ERROR
// else{
//     console.log("welcome to else block")
// }

console.log("string" ? true : false); //truthy value bcoz database string - "" inside string declare an one value
console.log("" ? true : false); // falsy value bcoz databse empty only a string - inside string not delclare an value

// Implicit/Explicit
1;
// var price = "12345";
// var priceNum = Number(price);
// var priceNum2 = parseInt(price);
// console.log( typeof priceNum , typeof priceNum2); // Number & parseInt=> convert string to number
2;
// var price1 = 12345;
// var price3 = toString(price1);
// console.log(typeof price3); // toString => number to string

3;
// var price = "John12345"; // Result : NaN NaN
// var price = "1234 5John" // Result : Nan 1234
// var price = "12345John"; // 1. first "1234John" not a number is a string so result priceNum is a NaN, second John is a string so priceNum2 is a number(convert string to num)
// var priceNum = Number(price);
// var priceNum2 = parseInt(price);
// console.log(priceNum , priceNum2);

4;
// var price = false;  // Result : 0 NaN
var price = true; // Result : 1 NaN
var priceNum = Number(price);
var priceNum2 = parseInt(price);
console.log(typeof priceNum, typeof priceNum2);

5;
// var value = Boolean(undefined);// null, empty string, undefined // value false;
var value = Boolean(231); // value is true bcoz 231 num & type boolean
console.log(value, typeof value);

// === trible equalt is check One is value Second is datatype same ah irutha true ilana false
console.log(null == null); // Result : true bcoz both datatype is same
console.log(null === null); // Result : true bcoz both datatype is same
console.log(null === 123);

console.log(null == undefined); // == Double equalt is check only value => null is a falsy value also undefined is a falsy value so (false == false) = true
console.log(null === undefined);

// ! => NOT Operator (Negation) value true ah irutha result false | value false ah irutha result true
var isValid = true; //Result : false
console.log(!isValid);

var isValid2 = false;
console.log(!!isValid); // 1. first negation (!isValid) is true boz vale is false  | ! second negoation value is false then result is true

var isValid3 = false; // boolean
var isValid3 = "false"; // string
console.log(!isValid);

var check = 0;
console.log(!check); // vae value is 0( 0 is a falsy value so !check is a true);

// ****** important
var isValid4 = true; // boolean
var age1 = 20; // num => truthy value
var userName = "John"; // string & falsy value

var expression = userName || (!isValid4 && age1);

// Step 1:
var expression = "John" || (!true && 20);
//Step 2:
var expression = "John" || (false && 20); // !true is false bcoz (true is false these datatype boolean so !not !true na false || !false na true
//Step 3:
var expression = "John" || (false && true)// 20 is a truthy value so 20 replace true && operator both are true is result true , anyone is false result is false
//Step 4: 
var expression = "John" || false ; // && operator anyone false result is false 
//Step 5:
var expression = true || false; // || Operator anyone is true result is true
// Step 6:
var expression = true; // FINAL ANSWER


// Order of precedence of logical operator : 
// 1. ! => Not
// 2. && => And
// 3. || => Or

// var expression = !x || y && !z;

// // Step 1
// expression = !"John" || 10 && !false;

// // Step 2
// expression = !true || 10 && !false;


// // Step 3
// expression = false || true && true;

// // Step 4
// expression = false || true;

// // Step 5
// expression = true;


// String methods

var message = "    There are a million of features that can be developed with the help of JavaScript, and JavaScript runs on frontend as well as on backed.     ";
console.log(message.trimEnd()); // Remove ending spaces on the variable values

console.log(message.trimStart); // Remove starting space on the variable vales

console.log(message.trim()); // Remove space starting as well as ending

console.log(message.replace('frontend', "Hello Karthick"));
console.log(message.replaceAll('JavaScript','React'));// More than one occurances(text) changes 
console.log(message.replaceAll('JacaScript', ''));

console.log(message.toLocaleLowerCase().includes('javascript'));
console.log(message.includes('developed')); // includes method search the text inside a variable values // Result : text irutha  True / False
console.log(message.includes('hello'));


// var email = 'hello@gmail.com';
var email = 'hello@yahoo.com'
if (email.endsWith('@gmail.com')) {
    console.log('You are welcome');
} else {
    console.log('You are not welcome');
}

// startWithd()=>It matches if the string starts with a particular word

var digits = 100.87886767;
console.log(digits.toFixed());// Round the value of numbers
console.log(digits.toFixed(2)); // After digits 2 decimal number only showing
console.log(typeof(digits.toFixed())); // Whenever use (typeof tofixed) method is type is (string)

// console.log(price.toPrecision(4));

// 1.001e+5 => 1.001 x 10 ^5 => 100100 


var num1 = prompt('Enter first number');
var num2 = prompt('Enter second number');
alert(parseInt(num1)+parseInt(num2));
// console.log(parseInt(num1)+parseInt(num2));