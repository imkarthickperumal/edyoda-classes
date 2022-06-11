// var num = 15;
// for(var counter = 0; counter<=10;counter++){
//     console.log(`${num} X ${counter} = ${num*counter}`);
// }

// Example 1 : Vaipadu program using function
function Vaipaddu() {
  //   var num = 10; // Manual input given user
  var num = prompt("Enter your number"); // User given input prompt
  for (var counter = 0; counter <= 10; counter++) {
    console.log(`${num} X ${counter} = ${num * counter}`);
  }
}
// Vaipaddu();

// Example 2 : checkEven Num program

// function checkEven(num){
//     if(num%2===0){
//         console.log('Even num : ', num);
//     } else {
//         console.log('Odd num : ', num);
//     }
// }
// checkEven(24);
// // checkEven(num = prompt('Enter your number'));

// Exmple 3 : How many Even number 1-50
// function checkEven(num){
//     if(num%2===0){
//         console.log('Even Number : ', num);
//     } else{
//         // console.log('Odd Number : ', num);
//     }
// }

// var startingValue = 1;
// var endingValue = 50;
// for(var counter = startingValue; counter<=endingValue;counter++){
//     checkEven(counter);
// }

// Exmple 3(another way) : How many Even number 1-50
// for (var counter = 0; counter <= 50; counter++) {
//   if (counter % 2 == 0) {
//     console.log("Even Number : ", counter);
//   } else {
//     // console.log('Odd Number : ', counter);
//   }
// }

// Example 4 : SetTimeout  print "hello world" 10000 milsec
function printHello(){
    console.log('Hello World');
}
// printHello(printHello,100000);

//setTimeout(printHello,10000);

for(var i =0;i<5;i++){
    setTimeout(function(){
         // SBI
         // console.log(i);
    },1000); //// We're on lunch come after 1 second
}

// Let me go and finish other tasks, i'll come back here after 1 second and execute this code => THIS NATURE IN JS IS CALLED ASYNCHRONOUS BEHAVIOR.
/*100ms
i=1
200ms
i=2
300ms
i=3
400ms
i=4
500ms
i=5
600ms
-------------
700ms
-------------
800ms
-------------
900ms
-------------
1000ms
console.log(i); i=5
console.log(i); i=5
console.log(i); i=5
console.log(i); i=5
console.log(i); i=5
*/
//mela iruka code execute aaga 1sec aagum bcoz setTimeout function use paniruku
//kela iruka price code instient ah execute aagum 
var price = 100;
price = 200;
price = 300;
price = 400;
price = 500;
// console.log(price); 

// Example 5 : Array revision
// var users = ['A','B','C','D','C'];
// console.log(users);

// users.sort();
// console.log(users);

// users.push('E'); // adding a new element in the array last index using push() method.
// console.log(users);

// users.pop(); // delete last element in the array last index using pop() method.
// console.log(users);

// users.unshift('AA'); // adding new element in the array startin index unshift() method.
// console.log(users);

// users.shift(); // remove starting index of the element array using shift() method.
// console.log(users);

// users.splice(1,1); // delete which index of the element using splice(deleteIndex, deletecount) method.
// console.log(users);

// users.splice(1,0,'YY'); // delete index and add which delete of the index value using splice() method.
// console.log(users);

// // var isZpresent = users.includes('Z'); // includes() method array la antha value iruka ilayanu check panitu true or false result tarum, value irutha true ilana false
// var isZpresent = users.includes('A'); 
// console.log(isZpresent);

// var indexOFC = users.indexOf('C'); // indexof() method using antha array la ethaayavathu position la C irukunu check panu sollum
// console.log(indexOFC);

// var lastIndecOFC = users.indexOf('C');
// console.log(lastIndecOFC);

// Example 6 : Sorting() Array revision
var users = ['B','J','M','A','C','Z','X'];
users.sort(); // sort() method using arrange alphabetical order
// console.log(users);

users.reverse(); // reverse() method using reverse in the array values
// console.log(users);

// A SORTER FN MUST RETURN 3 TYPES OF VALUES 
// -1 => Negative value,
// 0 => Return 0,
// 1 =>Positive value

function sorter(num1,num2){
    // return num1-num2; // acedning order
    return num2-num1; // decending order
}
var prices = [450,300,150,200];
prices.sort(sorter);
// console.log(prices);

// function sum(){

// }

// function subtract(){

// }

// for(var counter = 0; counter<=50; counter++){
//     console.log(counter);
// }

// var arr = [];
// for(let counter = 1; counter<=105;counter++){
//     arr.push(counter);
// }
// console.log(arr);

// Example 7 : How to find out missing number
var users = ["A", "B", "C", "D"];
console.log(users.indexOf("E"));

var numbers = [0, 1, 2];

/*
for(initialization;condition;increment/decrement)
*/

for (var counter = 0; counter <= 10; counter++) {
  // STEP 1
  //   if (numbers.indexOf(0) === -1) { // FALSY
  // STEP 2
  //   if (numbers.indexOf(1) === -1) { // FALSY
  // STEP 3
  //   if (numbers.indexOf(2) === -1) { // FALSY
  // STEP 4
  //   if (numbers.indexOf(3) === -1) { // TRUTHY
  if (numbers.indexOf(counter) === -1) {
    // No is not present
    console.log("Missing Number : ", counter);
  }
}

