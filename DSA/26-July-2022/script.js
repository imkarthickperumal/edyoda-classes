console.log("DSA Stack");
/*
1. Create a stack
2. Operations a stack
   // 2.1 Push : To add a new item to the top of the stack
   // 2.2 Pop : To delete an item from the top of the stack
   // 2.3 Peek : To get/retrive the top item
   // 2.4 Find length : To get the total no of items in stack
*/

let stack = []; // Empty stack

function pushItemInStack(newItem){
    stack.push(newItem)
}
console.log(stack);
pushItemInStack('John');
console.log(stack);
pushItemInStack('Jane');
console.log(stack);