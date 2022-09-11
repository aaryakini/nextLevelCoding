
function showHide(name){
	let x = document.getElementById(name);
	if (x.style.display == "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

// I am from Singapore

var majulah = document.createElement("img");
img.setAttribute('src','assets/majulah.png');

document.getElementById("majulah").appendChild(img);
console.log("done");

// I love reading

var reading = document.createElement("reading");
img.setAttribute('src','assets/reading.png');

document.getElementById("readingImage").appendChild(img);
console.log("done");

// I have a diploma in Kathak

var kathak = document.createElement("kathak");
img.setAttribute('src','assets/kathak.png');

document.getElementById("kathakImage").appendChild(img);
console.log("done");

// My favourite flower

var flower = document.createElement("flower");
img.setAttribute('src','assets/flower.png');

document.getElementById("flowerImage").appendChild(img);
console.log("done");

// german rap

var german = document.createElement("german");
img.setAttribute('src','assets/german.png');

document.getElementById("germanImage").appendChild(img);
console.log("done");

// Thai food

var food = document.createElement("food");
img.setAttribute('src','assets/food.png');

document.getElementById("foodImage").appendChild(img);
console.log("done");

// i am great at Chai

var chai = document.createElement("chai");
img.setAttribute('src','assets/chai.png');

document.getElementById("chaiImage").appendChild(img);
console.log("done");

// sports

var sports = document.createElement("sports");
img.setAttribute('src','assets/sports.png');

document.getElementById("sportsImage").appendChild(img);
console.log("done");

// journalism

var journalism = document.createElement("journalism");
img.setAttribute('src','assets/journalism.png');

document.getElementById("journalismImage").appendChild(img);
console.log("done");

// documentaries

var documentaries = document.createElement("documentaries");
img.setAttribute('src','assets/documentaries.png');

document.getElementById("documentariesImage").appendChild(img);
console.log("done");


/***************************************************************************************
*    Title: JavaScript - How to make multiple divs draggable and movable across the website
*    Author: user6439507
*    Date: June 4, 2019
*    Availability: https://stackoverflow.com/questions/51409650/javascript-how-to-make-multiple-divs-draggable-and-movable-across-the-website
***************************************************************************************/

var draggableElements = document.getElementsByClassName("tooltipframe");
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

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
/***************************************************************************************/