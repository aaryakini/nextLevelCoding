/***************************************************************************************
*    Title: JavaScript - How to make multiple divs draggable and movable across the website
*    Author: user6439507
*    Date: June 4, 2019
*    Availability: https://stackoverflow.com/questions/51409650/javascript-how-to-make-multiple-divs-draggable-and-movable-across-the-website
***************************************************************************************/

var draggableElements = document.getElementsByClassName("draggable");
console.log(draggableElements.length); //checking that array exists and is populated

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement(e) {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
/***************************************************************************************/


var content = document.getElementById('content');
var links = document.getElementsByClassName('link');

var tennis = document.getElementById('tennis');

tennis.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = "black"
  tennis.style.filter = "grayscale(1) invert(1)"
  content.style.filter = "none"
  // document.body.classList.toggle("bg");
});

var running = document.getElementById('running');

running.addEventListener('click', function onClick(event) {
    content.style.fontFamily = "Arial, serif";
    running.style.filter = "grayscale(1) invert(1)"
});

var painting = document.getElementById('painting');

painting.addEventListener('click', function onClick(event) {
    for (let i = links.length - 1; i >= 0; i--) {
        links[i].style.backgroundColor = "orange"
        links[i].style.borderRadius = "10px"
    }
    painting.style.filter = "grayscale(1) invert(1)"
  // document.body.classList.toggle("bg");
});


