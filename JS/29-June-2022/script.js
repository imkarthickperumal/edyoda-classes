console.log("jQuery");

// DOM Method
var div = document.getElementById("container");
console.log(div);

// jQuery Method
var jDiv = $("#container");
console.log(jDiv);

var jPara = $(".description");
console.log(jPara);

var paraTagName = $("p");
console.log(paraTagName);

// Change the color of all the paragraph having class description to red using vanilla javascript

// jpara.style.color = 'red'; // wrong way

/*---This is Vanilla JS Implementation---*/
// for (let counter = 0; counter < jPara.length; counter++) {
//   jPara[counter].style.color = "red";
// }

/*---This is jQuery Implementation---*/
var jPara = $('.description');
// jPara.css('color','red');

// $('.description').css('color','blue');

$('.description').css({
    color:'0000ff',
    background: '#11aa3f'
});

// CREATE A TODO LIST USING JQUERY
{
    /* <li>Go to market</li>
<li>Take classes</li> */
  }

  // Register a onkeyup listener on input field
  // Register a submit listener on form to prevent the deafult submission

  var vform = document.getElementById("toDoForm");
  console.log(vform);
  var jform = $("#toDoForm");

  var vinput = document.getElementById("toDoInput");
  var jinput = $("#toDoInput");

  var vul = document.getElementById("toDoList");
  var jul = $("#toDoList");

  var toDoText = "";
  function onKeyUpHandler(e) {
    console.log(e.target.value);
    toDoText = e.target.value;
  }
  // vinput.addEventListener('keyup',onKeyUpHandler);

  jinput.on("keyup", onKeyUpHandler);

  function vonFormSubmitHandler(e) {
    // console.log('submit fn called');
    e.preventDefault();
    var li = document.createElement("li");
    li.innerText = toDoText;
    vul.appendChild(li);
    vinput.value = "";
  }

  // vform.addEventListener("submit", vonFormSubmitHandler);

  function jonFormSubmit(e) {
    //   console.log(e);
    e.preventDefault();
    var jli = $("<li>");
    jli.text(toDoText);
    jul.append(jli);
    jinput.val("");
  }

  jform.on("submit", jonFormSubmit);

  // console.log($('#heading').text())
  // $('#heading').text('new title')

  jul.append("<li>Lorem Ipsum</li>");

  // var heading = document.getElementById('heading');
  // heading.classList.add('session-heading');
  // heading.classList.add('active');
  // heading.classList.remove('title');

  var heading = $("#heading");
  heading.addClass("session-heading active");
  heading.removeClass("title");
