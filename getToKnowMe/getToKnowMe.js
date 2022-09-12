const spotlightEl = document.querySelector("#spotlight");

function handleMouseMove(event) {
    const { clientX, clientY } = event;

    spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 8px, #000000 60px)`;
}
document.addEventListener("mousemove", handleMouseMove);

var foundCounter = 0;

document.getElementById("counter").innerHTML = "0";

function showHide(name){
	let x = document.getElementById(name);
	if (x.style.display == "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function hide(name){
    let x = document.getElementById(name);
    x.style.display = "none";
    foundCounter++;
    console.log(foundCounter);
    document.getElementById("counter").innerHTML = foundCounter;
    if (foundCounter == 10){
        startConfetti();
        var timeout = setTimeout(function(){stopConfetti()},4000);
        document.getElementById("spotlight").style.display = "none";
        document.body.style.backgroundColor = "black";
    }
}

// I am from Singapore

var majulah = document.createElement("img");
majulah.setAttribute('src','assets/majulah.png');
majulah.style.height = 5 + "%";
majulah.style.width = "auto";
majulah.style.display = "block";
majulah.style.position = "fixed";
majulah.style.top = (Math.random() * (90 - 5) + 10) + "%";
majulah.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("majulahImage").appendChild(majulah);
console.log("done");

// I love reading

var reading = document.createElement("img");
reading.setAttribute('src','assets/reading.png');
reading.style.height = 5 + "%";
reading.style.width = "auto";
reading.style.display = "block";
reading.style.position = "fixed";
reading.style.top = (Math.random() * (90 - 5) + 10) + "%";
reading.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("readingImage").appendChild(reading);
console.log("done");

// I have a diploma in Kathak

var kathak = document.createElement("img");
kathak.setAttribute('src','assets/kathak.png');
kathak.style.height = 5 + "%";
kathak.style.width = "auto";
kathak.style.display = "block";
kathak.style.position = "fixed";
kathak.style.top = (Math.random() * (90 - 5) + 10) + "%";
kathak.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("kathakImage").appendChild(kathak);
console.log("done");

// My favourite flower

var flower = document.createElement("img");
flower.setAttribute('src','assets/flower.png');
flower.style.height = 5 + "%";
flower.style.width = "auto";
flower.style.display = "block";
flower.style.position = "fixed";
flower.style.top = (Math.random() * (90 - 5) + 10) + "%";
flower.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("flowerImage").appendChild(flower);
console.log("done");

// german rap

var german = document.createElement("img");
german.setAttribute('src','assets/german.png');
german.style.height = 5 + "%";
german.style.width = "auto";
german.style.display = "block";
german.style.position = "fixed";
german.style.top = (Math.random() * (90 - 5) + 10) + "%";
german.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("germanImage").appendChild(german);
console.log("done");

// Thai food

var food = document.createElement("img");
food.setAttribute('src','assets/food.png');
food.style.height = 5 + "%";
food.style.width = "auto";
food.style.display = "block";
food.style.position = "fixed";
food.style.top = (Math.random() * (90 - 5) + 10) + "%";
food.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("foodImage").appendChild(food);
console.log("done");

// i am great at Chai

var chai = document.createElement("img");
chai.setAttribute('src','assets/chai.png');
chai.style.height = 5 + "%";
chai.style.width = "auto";
chai.style.display = "block";
chai.style.position = "fixed";
chai.style.top = (Math.random() * (90 - 5) + 10) + "%";
chai.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("chaiImage").appendChild(chai);
console.log("done");

// sports

var sports = document.createElement("img");
sports.setAttribute('src','assets/sports.png');
sports.style.height = 5 + "%";
sports.style.width = "auto";
sports.style.display = "block";
sports.style.position = "fixed";
sports.style.top = (Math.random() * (90 - 5) + 10) + "%";
sports.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("sportsImage").appendChild(sports);
console.log("done");

// journalism

var journalism = document.createElement("img");
journalism.setAttribute('src','assets/journalism.png');
journalism.style.height = 5 + "%";
journalism.style.width = "auto";
journalism.style.display = "block";
journalism.style.position = "fixed";
journalism.style.top = (Math.random() * (90 - 5) + 10) + "%";
journalism.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("journalismImage").appendChild(journalism);
console.log("done");

// documentaries

var documentaries = document.createElement("img");
documentaries.setAttribute('src','assets/documentaries.png');
documentaries.style.height = 5 + "%";
documentaries.style.width = "auto";
documentaries.style.display = "block";
documentaries.style.position = "fixed";
documentaries.style.top = (Math.random() * (90 - 5) + 10) + "%";
documentaries.style.left = (Math.random() * (90 - 5) + 10) + "%";

document.getElementById("documentariesImage").appendChild(documentaries);
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

    function closeDragElement(e) {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
/***************************************************************************************/