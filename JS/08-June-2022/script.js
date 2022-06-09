// WHILE LOOP
/*
---SYNTAX---
while(condition){
    repetitive code block
    increment/decrement statement
}
*/

// Write "Hello from JavaScript" 100 times in console

// Example : 1
// var counter = 1;
// while (counter<=50) {
//     // console.log(`Welcome ${counter} times on JavaScript Course`);
//     // console.log(5*counter);
//     console.log(counter)
//     counter++
// }

// Example : 2

// var counter = 100;
// while (counter >=1) {
//     console.log(counter);
//     counter--;
// }

//FOR LOOP
/*
---SYNTAX---
for(inititialization;condition;increment/decrement){
    repetitive code block 
}
1. Initialize the variable (counter = 0) IT HAPPEN ONLY CODE
2. Checks the condition (counter <=100)
  2.1 If the condition is true then execute the body of loop
  2.2 If the condition is false then stop execution
3. Perform increment/decrement operation 
*/

// Example : 1 print no 0-100

// for (let counter = 0; counter <= 100; counter++) {
//   console.log("Counter number :", counter);
// }

// Example : 2

// for (let counter = 199; counter >= 100; counter--) {
//   console.log(counter);
// }

//Exmple : 3
// Write a program to print the table of a number given as an input by the user using for loop
// var num = prompt("Enter your number");
// for (var counter = 1; counter <= 10;counter++) {
//   console.log(num*counter);
// }

// vaipaddu problem
// var num = prompt('Enter your number');
// for(var counter = 1; counter<=10;counter++){
//     console.log(`${num} X ${counter} = ${num*counter}`);
// }

//Exmple : 4
// var users = ['A','B','C','D','E','F','G','H','i'];

// var maxIndex = users.length -1;
// console.log(maxIndex);

// for(var counter = 0; counter<=maxIndex; counter++){
//     console.log(users[counter]);
// }

//Exmple : 5
// var weekDays = ['Monday','Tuesday','WednesDay','Thrusday','Friday','Saturday','Sunday'];
// for(var counter = 0; counter <=weekDays.length-1;counter++){
//     if (weekDays[counter] === 'Saturday') {
//         break; // break the perticular index oda value la iruthu after iruka ealla iteration vitrum
//     }
//     console.log("Workind Days : ", weekDays[counter]);
// }

//Exmple : 6
// var weekDays = [
//   "Monday",
//   "Tuesday",
//   "WednesDay",
//   "Thrusday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// for (var counter = 0; counter <= weekDays.length - 1; counter++) {
//   if (weekDays[counter] === "Sunday" || weekDays[counter] === 'Saturday') {
//     continue; // particular iteration mattum skip auitu remaning ealla show aagum
//   }
//   console.log("Working Days :", weekDays[counter]);
// }

// Example : 7
// write a program to print all even numbers between 0-100
// for (var counter = 0; counter <= 20; counter++) {
//     if(counter % 2 === 0){
//         console.log(counter);
//     }
//
//}

// for (var counter = 0; counter <= 20; counter++) {
//   if (counter % 2 !== 0) {
//     console.log(counter);
//   }
// }

var tasks = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
  ];
  
  for (var counter = 0; counter < tasks.length - 1; counter++) {
    //   console.log(`ToDo Title : ${tasks[counter].title}`);
    //   console.log(`Completed Status : ${tasks[counter].completed}`);
  
    console.table(tasks[counter]);
  }
  
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 5; j++) {
      console.log(i, j);
    }
  }
  
  // Linear loops : O(n)
  // Nested loops : O(n^2)