console.log(document.cookie);

// setting variables

let isMouseDown = false;
let canvas = document.createElement('canvas');
let body = document.getElementsByTagName("body")[0];
let ctx = canvas.getContext('2d');
let linesArray = [];
let currentSize = getCookie("brushSize");
let currentColor = getCookie("color") || "rgb(0,0,0)";
let currentBg = getCookie("bgColor") || "white";

// let canvas = document.getElementsByTagName("canvas");

//create initial canvas
createCanvas();

//buttons
//colors
document.getElementById('colorPicker').addEventListener('change', function() {
	currentColor = this.value;
	setCookie("color", currentColor,999);
});

document.getElementById('bgColorPicker').addEventListener('change', function() {
	ctx.fillStyle = this.value;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	redraw();
	currentBg = ctx.fillStyle;
	setCookie("bgColor", currentBg,999);
});

//tools
document.getElementById('eraser').addEventListener('click', eraser);
document.getElementById('clear').addEventListener('click', createCanvas);

//size
document.getElementById('controlSize').addEventListener('change', function() {
	currentSize = this.value;
	setCookie("brushSize", currentSize, 999);
	document.getElementById("showSize").innerHTML = this.value;
});

//canvas size update
document.getElementById('canvasUpdate').addEventListener('click', function() {
	createCanvas();
	redraw();
});

//storage
document.getElementById('save').addEventListener('click', save);
document.getElementById('load').addEventListener('click', load);
document.getElementById('clearCache').addEventListener('click', function() {
	localStorage.removeItem("savedCanvas");
	linesArray = [];
	console.log("cache cleared!");
});

//download as image
document.getElementById("saveToImage").addEventListener('click', function() {
	downloadCanvas(this, "canvas", 'yoodle.png');
}, false);

//redraw
function redraw() {
	for (var i = 1; i < linesArray.length; i++) {
		ctx.beginPath();
		ctx.moveTo(linesArray[i-1].x, linesArray[i-1].y);
		ctx.lineWidth  = linesArray[i].size;
		ctx.lineCap = "round";
		ctx.strokeStyle = linesArray[i].color;
		ctx.lineTo(linesArray[i].x, linesArray[i].y);
		ctx.stroke();
	}
}

//drawing event handlers
canvas.addEventListener('mousedown', function() {mousedown(canvas, event);});
canvas.addEventListener('mousemove',function() {mousemove(canvas, event);});
canvas.addEventListener('mouseup', mouseup);


//create canvas
function createCanvas() {
	canvas.id = "canvas";
	canvas.width = getCookie("cweight") || parseInt(document.getElementById("sizeX").value);
	canvas.height = getCookie("cHeight") || parseInt(document.getElementById("sizeY").value);
	setCookie("cWidth", canvas.width, 999);
	setCookie("cHeight", canvas.height, 999);
	canvas.style.zIndex = 8;
	canvas.style.position = "absolute";
	canvas.style.border = "1px solid";
	ctx.fillStyle = currentBg;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	body.appendChild(canvas);
	console.log("canvas created!");
}

//download canvas
function downloadCanvas(link, canvas, filename) {
	link.href = document.getElementById(canvas).toDataURL();
	link.download = filename;
}

//save canvas
function save(){
	localStorage.removeItem("savedCanvas");
	localStorage.setItem("savedCanvas", JSON.stringify(linesArray));
	console.log("saved canvas!");
}

//load
function load() {
	document.getElementById("showSize").innerHTML = getCookie("brushSize");
	canvas.width = getCookie("cWidth");
	canvas.height = getCookie("cHeight");
	if (localStorage.getItem("savedCanvas") != null) {
		linesArray = JSON.parse(localStorage.savedCanvas);
		var lines = JSON.parse(localStorage.getItem("savedCanvas"));
		for (var i = 1; i < lines.length; i++) {
			ctx.beginPath();
			ctx.moveTo(linesArray[i-1].x, linesArray[i-1].y);
			ctx.lineWidth  = linesArray[i].size;
			ctx.lineCap = "round";
			ctx.strokeStyle = linesArray[i].color;
			ctx.lineTo(linesArray[i].x, linesArray[i].y);
			ctx.stroke();
		}
		console.log("Canvas loaded.");
	}
	else {
		console.log("No canvas in memory!");
	}
}

// ERASER HANDLING

function eraser() {
	currentSize = 50;
	currentColor = ctx.fillStyle;
}

// GET MOUSE POSITION

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

// ON MOUSE DOWN

function mousedown(canvas, evt) {
	var mousePos = getMousePos(canvas, evt);
	isMouseDown = true;
	var currentPosition = getMousePos(canvas, evt);
	ctx.moveTo(currentPosition.x, currentPosition.y)
	ctx.beginPath();
	ctx.lineWidth  = currentSize;
	ctx.lineCap = "round";
	ctx.strokeStyle = currentColor;

}

// ON MOUSE MOVE

function mousemove(canvas, evt) {

	if(isMouseDown){
		var currentPosition = getMousePos(canvas, evt);
		ctx.lineTo(currentPosition.x, currentPosition.y)
		ctx.stroke();
		store(currentPosition.x, currentPosition.y, currentSize, currentColor);
	}
}

// STORE DATA

function store(x, y, s, c) {
	var line = {
		"x": x,
		"y": y,
		"size": s,
		"color": c
	}
	linesArray.push(line);
}

// ON MOUSE UP

function mouseup() {
	isMouseDown=false;
	store();
}


//cookie functions
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}

const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}