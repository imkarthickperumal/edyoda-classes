var button = document.getElementById("btn");
var heading = document.getElementById("heading");
var containerDiv = document.getElementById("container");
var inputField = document.getElementById("userName");
var calculatorOutput = document.getElementById("calculatorOutput");
console.log(inputField);
// console.log(heading);
// console.log(button.onclick);

// Registering a onclick event on button
// 1
// var clickCounter = 0;
// button.onclick = function(){
//     clickCounter++;
//     // alert('Js Event Working');
//     console.log(`Button is clicked ${clickCounter} times`);
// }

//2 Use this way
var clickCounter = 0;
function onBtnClickHandler() {
  clickCounter++;
  // alert('Js Event Working');
  console.log(`Button is clicked ${clickCounter} times`);
  if (clickCounter % 2 === 0) {
    heading.style.color = "red";
    heading.innerText = "Even with Red";
  } else {
    heading.style.color = "yellow";
    heading.innerText = "Odd with Yellow";
  }
}
function onBtnClickHandler2() {
  alert("New click listener");
}
// button.onclick = onBtnClickHandler;
// button.onclick = onBtnClickHandler2;

// EVENT.addEventListener('EVENT_NAME',CALLBACK_FUNCTION)
button.addEventListener("click", onBtnClickHandler);
// button.addEventListener("dbclick", onBtnClickHandler);

var person = {
  name: "John",
};
person.name = "ABC";
person.name = "XYZ";

// Keyboard Events:
// 1. keydown 2.keypress 3. keyup

function keyDownHandler(event) {
  // console.log("KeyDown event Handler",event.keyCode, event.key);
  if (event.keyCode === 13) {
    console.log("You have pressed enter");
  } else if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log("You have pressed alphabet");
  } else if (event.keyCode >= 48 && event.keyCode <= 57) {
    console.log("You have pressed a number");
  } else {
    console.log("You have presses a special key");
  }
}
function keyUpHandler() {
  console.log("KeyUp event Handler");
}
function keyPressHandler() {
  console.log("keyPress event Handler");
}

// document.addEventListener("keydown", keyDownHandler);
// document.addEventListener('keyup',keyUpHandler);
// document.addEventListener('keypress',keyPressHandler);

function validateInput(event) {
  // console.log('KeyDown event worked');
  console.log(event.target.value);
  //  event.target.value = event.target.value.toUpperCase();
  var numericalInput = parseInt(event.target.value);
  var percentageValue = (numericalInput/100)*20;
  calculatorOutput.innerText = percentageValue;
  // numericalInput += 10;
  // event.target.value = numericalInput;
}

inputField.addEventListener("keydown", validateInput);
