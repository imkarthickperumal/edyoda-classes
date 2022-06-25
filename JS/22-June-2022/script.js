console.log("BOM-Browser Object Model");
// alert("Hello from Browser Window");
// window.alert("Hello from Browser Window with window object");

//SCREEN OBJECT BOM

// console.log("Width",screen.width);
// console.log("Height",screen.height);

function detectDeviceByScreenResolution() {
  var width = screen.width; // It gives screen width in px
  console.log(width);
  var deviceType = " ";
  if (width < 576) {
    deviceType = "Mobile";
  } else if (width >= 576 && width < 768) {
    deviceType = "Tablet";
  } else if (width >= 768 && width < 1400) {
    deviceType = "Laptop/Desktop(Small Screen)";
  } else if (width >= 1400 && width < 1920) {
    deviceType = "Laptop/Desktop(Medium Screen)";
  } else {
    deviceType = "Laptop/Desktop(High Screen)";
  }
  console.log(deviceType);

  if (deviceType === "Mobile") {
    alert("Offers are avaliable on our Mobile App");
  } else if (deviceType === "Tablet") {
    alert("No offers are applicable on Tablet devices");
  }
}
// detectDeviceByScreenResolution();

//NAVIGATOR OBJECT
// console.log(navigator);
// navigator.clipboard.writeText("JavaScript BOM Class");

function onLocationSucces() {
  console.log(position);
}
function onLocationFailure() {
  console.log(err);
  alert("Please provide permission to future use this website");
  document.write("");
}

navigator.geolocation.getCurrentPosition(onLocationSucces, onLocationFailure);


//LOCATION OBJECT
var button = document.getElementById('btn');
console.log(button);

function onClickHandler(){
    location.href = "https://www.google.com/";
}

button.addEventListener('click',onClickHandler);



function onCopyHandler(){
    // var heading = document.getElementsByTagName('h1')[0];
    // console.log(heading);
    // var text = heading.innerText;
    // navigator.clipboard.writeText(text);
    // console.log(navigator.clipboard.readText());
    var text = location.href;
    navigator.clipboard.writeText(text);
    alert("Link has been copied");
}
var copyButton = document.getElementById('copy-Btn');
copyButton.addEventListener('click',onCopyHandler);


//Encoding/Decoding from and to base64
var encodedMessage = btoa("Hello World");
console.log(encodedMessage);

var decodedMessage = atob(encodedMessage);
console.log(decodedMessage);