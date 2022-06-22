console.log('ToDoApp');
// Get all the HTML Element
var addItemBtn = document.getElementById('addItemBtn');
var toDoList = document.getElementById('toDoList');
var inputField = document.getElementById('inputBox');
// console.log(toDoList);

// Event listener functions
function addItemToList(){
    console.log("Click Event triggred");
    // 1. Create a li
    var li = document.createElement('li');
    // console.log(inputField.value);
    li.innerText = inputField.value;

    // 2. Append li to ul
    toDoList.appendChild(li);
}
//Event registractions
addItemBtn.addEventListener('click',addItemToList);
