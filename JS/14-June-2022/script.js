// getElementByID
var heading = document.getElementById("heading");
console.log(heading);

// console.log(typeof heading); // Object

// getElementByClassName
var description = document.getElementsByClassName("description");
console.log(description);

//getElementByTagName
var divs = document.getElementsByTagName("div");
console.log(divs);

//querySelector
var spanIndexSample = document.querySelector(".sample span");
console.log(spanIndexSample);

//querySelectorAll
var divInMiscSection = document.querySelectorAll(".misc-section div");
console.log(divInMiscSection);

// CHANGE THE TEXT OF HEADING ON PAGE AFTER 5 SECONDS
// var person = {
//     name1 : 'Jack'
// };
// person.name1 = 'JackRose'

setTimeout(function () {
  var pageHeading = document.getElementById("heading");
  pageHeading.innerHTML = "New Js Topic After 5 seconds";
}, 5000);

setTimeout(function () {
  var pageHeading = document.getElementById("heading");
  pageHeading.innerHTML = "New Js Topic After 10 Seconds";
}, 10000);

setTimeout(function () {
  var miscSection = document.getElementsByClassName("misc");
  miscSection[0].style.color = "red";
  miscSection[0].style.fontSize = "40px";
  console.log(miscSection[0].style);
}, 5000);

setTimeout(function(){
    var imageSection = document.getElementById('myImage');
    imageSection.src = "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com";
    // console.log(imageSection);
},5000);

var counter = 1;
var interval = setInterval(function () {
  if (counter != 0) {
    clearInterval(interval);
  }
  var image = document.getElementById("myImage");
  if (counter % 2 === 0) {
    image.src = "https://via.placeholder.com/300.png/096/ff0";
  } else {
    image.src = "https://via.placeholder.com/300.png/09f/fff";
  }
  counter++;
  console.log("URL Changed ", counter);
}, 3000);

// https://via.placeholder.com/300.png/096/ff0
