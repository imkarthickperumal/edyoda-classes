var greeting1 = "Hi";
var userName = "John";
var greeting2 = "Welcome to EdYoda";

// console.log(greeting1 + " "+ userName + " " + greeting2); // String method

// console.log(`Hi, ${userName} Welcome to EdYoda`); // Template string

// console.log(`${greeting1} ${userName} ${greeting2}`);

var upperCaseString = greeting2.toUpperCase();
var index = upperCaseString.indexOf("TO");

// console.log(greeting2.indexOf('EdYoda').substring(1,2));

// console.log(greeting2.toUpperCase().indexOf('EdYoda')); // Result : -1 Bcoz greeting2 chenge uppercase so not inside value EdYoda
// console.log(greeting2.indexOf('EdYoda').length);

// var person = {
//     fName : "John",
//     lName : "Doe"
// }
// console.log(person.fName);
// console.log(console);

// console.log(1+1);
// console.log('1'+'1');
// console.log('1'+1);// Implicit type  coersion/conversion

console.log(true + true, true && true);
console.log(true + true + true + true + false + false); // true value = 1 , false value = 0, both are boolean db type
console.log(5 + true); //5+1=6 1 is a true  boolean
// console.log(true+'true'); boolean can not to be add string = not adding
console.log(true + 3 + "true"); // 4 true
console.log("John" + 3 + "John");

console.log("10" + "1"); //Res : 101 Bcoz +sign is concat & + join to string
console.log("10" - "1"); // Res : 9
// console.log('John'-1);string in to db not possible so result : NaN

// ||
// true || true => true
// false || trur => true
// false || false => false
console.log(typeof null);
console.log(typeof undefined);
null == undefined;
null === undefined;

// var num1 = '10';
// num1 = Number(num1);
// console.log(num1+5);

// var num1 = prompt("Enter a number");
// num1 = Number(num1);
// console.log(num1 + 5);

// Comparing anything Falsy value result is false example:
// if (NaN<10) { // NaN is a falsy valuie
//     console.log('Truthy Block');
// } else{
//     console.log('Falsy Block');
// }

// if(num1 === NaN){
//     console.log("You can entered invalid number");
// } else{
//     if (num1 < 10) {
//         console.log("Truthy Block");
//       } else {
//         console.log("Falsy Block");
//       }
// }

var expression = !!"false" == !!"true";
//Step 1
expression = !! true == !! true;
//Step 2
expression = !false == !false;
//Step 3
expression = true == true;
// Step 4
expression = true;
console.log(expression); 

