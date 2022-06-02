console.log("Hello");

var userName = "John Doe";
console.log(typeof(userName));

var greeting = "Hello this is karthick, im a mern stack deceloper";

// indexOf method finds the index of firstOccurance of matching input
console.log(greeting.indexOf('l'));
console.log(greeting.indexOf('this'));
console.log(greeting.indexOf(','));
console.log(greeting.indexOf('im a mern'));
console.log(greeting.indexOf('Hello'));

// lastIndexOf() method first the last index of the matching input
console.log(greeting.lastIndexOf('e'));
console.log(greeting.lastIndexOf('z'));



// Length property gives us the length/total no of character (including space) in a string OR count of the character
console.log(greeting.length);
var userNames = "Jane Doe";
console.log(userName.length);

// substring(startingIndex, endingIndex) method returns a sub string from a given string with the given indexes, where ending index is not included.
var newString = "This is  MERN Stack Development Program";
console.log(newString.substring(5,10));
console.log(newString.substring(6,12));

var address = "452001 - Airport Road, Bengalure, KA, India";
console.log(address.substring(0,6));

// Get the substring "given" from the string below
var mySentence = "substring(startingIndex, endingIndex) method returns a sub string from a given string with the given indexes, where ending index is not included.";
console.log(mySentence.indexOf('given'));
console.log(mySentence.substring(73,79));

console.log(mySentence.charAt(50)); // character position
console.log(mySentence.charAt(1));

console.log(mySentence.indexOf("10"));
console.log(mySentence.charAt(10));
console.log(mySentence.charAt("given")); // Wrong way to using this method


console.log(mySentence.substring(73,79));
console.log(mySentence.slice(73,79));
console.log(mySentence.substring(10,20));
console.log(mySentence.substring(-10));// INVALID INPUT
console.log(mySentence.slice(-10));


var firstName = "John";
var lastName = "Doe";
var fullName = firstName.concat(lastName);
console.log(fullName);

var finalName = lastName.concat(firstName);
console.log(finalName);

var cName = "Mr ." + firstName + " " + lastName + ".";
console.log(cName);

var pName = prompt("enter your name");
// console.log("Welcome" + pName);

document.write("Welcome" + userName);




