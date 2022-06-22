var div = document.getElementById('expDiv');
var p = document.getElementsByTagName('p');
console.log(p[0]);
// console.log(div);

function mouseDownHandler(){
    console.log("Mouse Down Event triggered");
}

function mouseUpHandler(){
    console.log("Mouse Up Event triggered");
}

function mouseEnterHandler(event){
    console.log("Mouse Enter Event triggered");
    event.target.style.transform = 'scale(1.2)';
    console.log(event.target);
}

function mouseLeaveHandler(event){
    console.log("Mouse Leave Event triggered");
    event.target.style.transform = '';
}

function mouseMoveHandler(){
    console.log("Mouse Move Event triggered");
}

div.addEventListener('mousedown',mouseDownHandler);

div.addEventListener('mouseup',mouseUpHandler);

div.addEventListener('mouseenter',mouseEnterHandler);

div.addEventListener('mouseleave',mouseLeaveHandler);

div.addEventListener('mousemove',mouseMoveHandler);

function paraEventListener(event){
   console.log(event.target);
}
p[0].addEventListener('mouseenter',paraEventListener);


// CREATING HTML ELEMENTS USING JS

// 1. Create Element
var span = document.createElement('span');

// 2. Set its attributes/properties
span.innerText = "Hello DOM Class";
// span.textContent = "This is js class";
span.style.color = '#ff0000';

// 3. Append it to the container/parent
div.appendChild(span);

// var button = document.createElement('button');
// div.appendChild(button);



// HOW TO REMOVE(DELETE) HTML ELEMENT

function clickHandler(){
    var heading = document.getElementById('heading');
    //Delete the heading
    heading.remove();

    // var spanInDiv = document.querySelector('div span');
    // spanInDiv.remove();

    
}

var btn = document.getElementById('delBtn');
btn.addEventListener('click',clickHandler);