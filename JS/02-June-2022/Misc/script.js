var greeting = "Hello this is javascript tutorials";
console.log(greeting.toLocaleLowerCase());

console.log(greeting.toUpperCase());

var userName = "jOHN";
if (userName.toLocaleLowerCase === "john");
{
}

var newString = greeting.slice(2, 10); // slice is a part of string (startingIndex, endingIndex);
console.log(newString);

// var newString2 = greeting.splice(5,2)// This splice Array method so dosen't work
// console.log(newString2);

var price = 100;

// price++; // Post Increment => It will assign the value to a variable and then increment it
// first value assign aagum after increment aagum

// ++price; // Pre Increment => It will Increment the value first and then assign it to a variable.
// first value increment aagum after assign aagum

// price--; // Post Increment => It will assign the value to a variable and then increment it
// first value assign aagum after increment aagum

// --price; // Pre Increment => It will Increment the value first and then assign it to a variable.
// first value increment aagum after assign aagum

++price;
console.log(price);

var age = 14;
if (age > 18) {
  //Age must be greater than 18
  console.log("you can enter the club");
} else if (age > 15 && age < 18) {
  // Age must lie between 15-18
  console.log("You can soon join our club.. waited time is", 18 - age, "years");
} else if (age > 12 && age < 15) {
  console.log(
    "Please wait kidoo, you will be able to join our club in few years..."
  );
} else {
  console.log("you can not enter the club");
}


var price = '200.123';
var price2 = parseInt(price);
console.log(price2);
console.log(typeof(price2));

var price3 = parseFloat(price);
console.log("VALUR FROM PARSE FLOAT METHOD", price3);
console.log(typeof(price3));

var num = Number("123John");
console.log(num, typeof(num));


var string =  String(123);
console.log(string, typeof(string));
