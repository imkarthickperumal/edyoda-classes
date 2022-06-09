// var userName1 = "John";
// var userName2 = "Jane";
// var userName3 = "Jack";


// var prices = [100,200,300,400,500];
// console.log(prices); // Array of numbers

// var prices = ['John',100,true,null,undefined];
// console.log(prices); // Bad Practice

// console.log(userNames);
// console.log(userNames[1]);
// console.log(userNames[0]);
// console.log(userNames[2]);
// console.log(userNames[4]);


// console.log(typeof(userNames)); 
// console.log(Array.isArray(userNames));// Array va ilayanu check panara method Array.isArray array va irutha true ilana false result varum

// var user = 'John';
// console.log(Array.isArray(user));// ethu array ila so boolean value Result is : false 

// console.log(userNames.length);// array oda lenth total num.of variables values
// // MAX INDEX = LENGTH OF ARRAY -1

// var userNames = ['John', 'Jane','Jack','ABC','XYZ','A','B'];
// console.log(userNames); // Array of strings

// console.log(userNames[0]);
// console.log(userNames[userNames.length - 1]);// Last index

// var userName1 = ''; // Empty String
// var users = []; // Empty Array
// console.log(users.length);
// users[0] = 'John';
// users[1] = 'jack';
// console.log(users);
// console.log(users.length);

// users[4] = 'Jane';
// console.log(users);

// users.push('Vikram'); // Push adding array item 
// users.push('Kaithi');
// users.push('Vikram3')
// console.log(users);

// var users = ['A','B','C','D'];
// users.push('Vikram');
// console.log(users);

// var removeItem = users.pop(); // pop method removing last index of array
// var removeItem2 = users.pop();
// console.log(removeItem);
// console.log(removeItem2);
// console.log(users);

// users.unshift('Vikram'); // unshift adding new element array begning
// users.shift(); // shift remove first element of the array
// console.log(users);

// splice(startIndex,deleteCount,...items to be added)
var users = ["A", "B", "C", "D"];
// ["A", "John", "B", "Jack", "C", "Jane", "D"]
// var result = users.splice(1,1);

// console.log("Deleted Element(s) : ",result);

// users.splice(2, 0, "John", "Jack", "Jane");

// users.splice(1, 0, "John");
// // ["A", "John", "B", "C", "D"]

// users.splice(3, 0, "Jack");
// // ['A', 'John', 'B', 'Jack', 'C', 'D']

// users.splice(5,0,'Jane');

// // Resulting Array : ['A', 'John', 'B', 'Jack', 'C', 'Jane', 'D']

// // Replace Jack with Abraham

// users.splice(3, 1, "Abraham");

// console.log("Array : ", users);

var activeUsers = ['Vikram','kaithi'];
var inActiveUsers = ['Vikram3','kaithi2'];

// var totalUser = activeUsers.concat(inActiveUsers);
// console.log(totalUser);

// Conver Array to string
console.log(activeUsers.toString());

var users = 'Vikram Kaithi';
console.log(users.split(' ')); // split conver string to array

// var categories = ['cloting','electronics','jewellery','houshold items'];
// console.log(categories);
// console.log(categories.reverse()); // reverse the array items

var prices = [100,50,20,70];
console.log(prices);
console.log(prices.sort());

var alpha = ['N','A','L','K'];
console.log(alpha);
console.log(alpha.sort());








