console.log("Hello Revison|Remaning Topics");

var userName = "John";
var user = {
  fName: "John",
  lName: "Doe",
};
// localStorage.setItem("name", userName);
// localStorage.setItem("isLoggedIn", true);
// localStorage.setItem("evenNumbers", [2, 4, 6, 8]);
// localStorage.setItem("user", JSON.stringify(user));

var dataFromLocalStorage = localStorage.getItem("name");
console.log(dataFromLocalStorage);

var arrFromLocalStorage = localStorage.getItem("evenNumbers");
console.log(arrFromLocalStorage);
console.log(typeof arrFromLocalStorage);

var boolFromLocalStorage = localStorage.getItem("isLoggedIn");
console.log(boolFromLocalStorage);
console.log(typeof boolFromLocalStorage);

var objFromLocalStorage = localStorage.getItem("user");
console.log(JSON.parse(objFromLocalStorage));
console.log(typeof JSON.parse(objFromLocalStorage));

var span = document.getElementById("authBtn");

function checkLogInStatus(loginText) {
  var isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  if (loginText === "LogIn") {
    span.innerText = "LogOut";
    localStorage.removeItem("isLoggedIn");
  } else if (loginText === "LogOut") {
    span.innerText = "LogIn";
    localStorage.setItem("isLoggedIn", true);
  }
}

function onClickHandler() {
  //logic for matching username and password
  localStorage.setItem("isLoggedIn", true);
  span.innerText = "LogOut";
  checkLogInStatus(loginText);
}
span.addEventListener("click", onClickHandler);



// TRY-CATCH

// block of code thappa irutalum next block of code run aagum console la check pani pakalam ethuve try-catch use panala thappa iruka code ku after iruka log work aagathu
// program executed if the block of code not executed
// run time , reference error
 try {
    var a = document.createElement('a');
    var div = document.getElementById('contentDiv');
    div.appendChild(a);
 } catch (error) {
    console.log("ERROR IN HTML OPERATION", error);
 }

 console.log("Hello from line 55");
 console.log(55+40);


// Throwing an error
function add(num1,num2){
    if(typeof num1 !=="number" || typeof num2 !=="number"){
        // you can give manual error message using through via Throwing method
        throw new Error("num1 and num2 should be of type of number");
    }
    console.log(num1+num2);
}
// add(4,{fname:'John'}); this a error 
add(4,5);