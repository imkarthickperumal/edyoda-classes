// if-else

// if your age is greater thena 18yrs then you can vote else you can't vote

// if(expression) {if code body} else {else code body}

// var age = 18;
// if (age >=18) {//expression results to true
//     console.log("You can give a vote");
//     // if code body
// } else {// expression results in false
//     console.log("You can't give a vote");
//     // else code body
// }

if (null) {// -Infinity, undefined, 0,false
  console.log("Truthy value provided");
} else {
  console.log("Falsy value provided");
}

// Tenary operator?
// EXPRESSION ? statement for truthy value : statement for falsy value;
age > 18 ? console.log('You can give a vote') : console.log('You can not give a vote');
