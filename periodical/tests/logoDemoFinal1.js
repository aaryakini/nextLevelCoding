let contentBox = document.getElementById("content");
console.log("viewport width = " + window.innerWidth);

let apiUrl = "https://api.airtable.com/v0/app2hMA9iEWXgiaAO/tblpbtzk7I8feE5cN?api_key=keygMwV8LzfK46eyM";

//variable that stories all the data from the API

let apiData;

let colophon = 0;

//this is where you 'call' your data

//async means asynchronous, the function will always be executed separately, 
//regardless of where it is placed in executable code
//the getData function gets ALL the data from the Airtable API
async function getData(url){
	let response = await fetch(url);
	let jsonData = await response.json();
	return jsonData;
}

//the await in this main function is paired with the async of the getData function
//but await can only exist in async functions
async function main(){
	apiData = await getData(apiUrl);
	console.log(apiData);

	let issue = "";

	do{
		issue = prompt("Enter issue number, between 1 – 12");
	}while(issue > 12 || issue < 1)

	colophon = apiData.records[issue].fields.colophon;
	console.log("colophon = " + colophon);

	colophoner();

}

let dimensions = [4, 8, 12, 16, 20, 23.3333333333];

let w = document.getElementById("w");
let wMax = 16;

let i = document.getElementById("i");
let iMax = 14;

let r = document.getElementById("r");
let rMax = 16;

let e = document.getElementById("e");
let eMax = 17;

let d = document.getElementById("d");
let dMax = 16;

let wiredMin = 20;
let wiredMax = 79;

main();

//first select the colophon number
// let colophon = 30;



//divide the colophon amount into each letter

let wDivs = iDivs = rDivs = eDivs = dDivs = 0;

function colophoner(){

	//exception for colophon of 20
	if (colophon == 20){
		let boxes = document.getElementsByClassName("box");
		for (let i = 0; i < boxes.length; i++){
			boxes[i].style.background = "black";
		}
	}

	//exception for colophon of 14
	else if (colophon == 14){
		let boxes = document.getElementsByClassName("box");
		for (let i = 0; i < boxes.length; i++){
			if (boxes[i].id != "w3" && boxes[i].id != "i1" && boxes[i].id != "i3" && boxes[i].id != "r4" && boxes[i].id != "r5"&& boxes[i].id != "e3"){
				if(boxes[i].id == "i2"){
					boxes[i].style.height = 100 + "%";
					boxes[i].style.zIndex = 3;
					boxes[i].style.top = 0 + "vw";
				}
				boxes[i].style.background = "black";
				console.log("im here!");
			}
		}
	}

	//exception for colophon of 17
	else if (colophon == 17){
		let boxes = document.getElementsByClassName("box");
		for (let i = 0; i < boxes.length; i++){
			if (boxes[i].id != "i1" && boxes[i].id != "i3"){
				if(boxes[i].id == "i2"){
					boxes[i].style.height = 100 + "%";
					boxes[i].style.zIndex = 3;
					boxes[i].style.top = 0 + "vw";
				}
				boxes[i].style.background = "black";
				console.log("im here!");
			}
		}
	}

	else if (colophon > 20){
			//for numbers beyond 20, continue as below
			do{
				if(rDivs < rMax && colophon > 0){
					rDivs++;
					colophon--;

				}

				if(wDivs < wMax && colophon > 0){
					wDivs++;
					colophon--;
				}

				if(eDivs < eMax && colophon > 0){
					eDivs++;
					colophon--;

				}

				if(dDivs < dMax && colophon > 0){
					dDivs++;
					colophon--;
				}

				if(iDivs < iMax && colophon > 0){
					iDivs++;
					colophon--;

				}

			}while (colophon > 0);

			console.log("wDivs = " + wDivs + " and iDivs = " + iDivs + " and rDivs = " + rDivs + " and eDivs = " + eDivs + " and dDivs = " + dDivs);

			//over here need to trigger splitDivs function like splitDivs(w,wDivs); for every letter

			splitDivs(w,wDivs);
			splitDivs(i,iDivs);
			splitDivs(r,rDivs);
			splitDivs(e,eDivs);
			splitDivs(d,dDivs);
	}
}

//letter --> chosen letter; toDivide --> number of blocks to break into
//identify number of boxes, identify max of each box, drawDivs from within
//three-dimensional array --> e.g. for a letter wArray[0] = hor, 12??

function splitDivs(letter, toDivide){
	let twoDims = [];
	let divs = letter.getElementsByClassName("box"); //number of divs in the letter
	console.log("divs.length = " + divs.length);

	//creating two dimensional array to store info for every letter, initialising divsToDraw as 0
	let maxUnits = 0;

	for(let i = 0; i < divs.length; i++){
		if (divs[i].classList.contains('hor')){
			maxUnits = maxDivs(viewportUnits(divs[i].clientWidth));
			twoDims[i] = ["hor", maxUnits, 0];
		}
		else if (divs[i].classList.contains('ver')){
			maxUnits = maxDivs(viewportUnits(divs[i].clientHeight));
			twoDims[i] = ["ver", maxUnits, 0];
		}
	}

	console.table(twoDims);

	//modifying array to include randomised divsToDraw
	let counter = 0;

	while(toDivide > 0){
	for(let i = 0; i < divs.length; i++){
		console.log ("counter = " + counter);
		if (counter < 1 && toDivide > 0 && twoDims[i][2] < twoDims[i][1]){
			twoDims[i][2] = 1;
			console.log("twoDims[" + i + "][2] = " + twoDims[i][2]);
			toDivide = toDivide - 1;
			console.log("toDivide = " + toDivide);
		}

		if (counter == 1 && toDivide > 0 && twoDims[i][2] < twoDims[i][1] && twoDims[i][1] > 1){
			let num = randomNumber(1,twoDims[i][1]);
			twoDims[i][2] = twoDims[i][2] + num;
			console.log("twoDims[" + i + "][2] = " + twoDims[i][2]);
			toDivide = toDivide - num;
			console.log("toDivide = " + toDivide);
		}
		else if (counter >= 1 && toDivide > 0 && twoDims[i][2] < twoDims[i][1]){
			twoDims[i][2] = twoDims[i][2] + 1;
			console.log("twoDims[" + i + "][2] = " + twoDims[i][2]);
			toDivide = toDivide - 1;
			console.log("toDivide = " + toDivide);
		}
	}
	counter++;
}

console.table(twoDims);

drawDivs(letter, twoDims);
	
}

function drawDivs(letter, dims){
	let divs = letter.getElementsByClassName("box");
	
	for(let c = 0; c < dims.length; c++){
		if(dims[c][0] == "hor"){
			drawHorz(letter, divs[c], dims[c][1], dims[c][2]);
		}
		else if(dims[c][0] == "ver"){
			drawVerz(letter, divs[c], dims[c][1], dims[c][2]);
		}
	}
}

function drawHorz(letter, letterBox, max, divsToMake){

	console.log(letterBox);

	let newDiv = document.createElement("DIV");
	newDiv.classList.add("innerDiv");
	let newDivWidth = 0;

	let arr = [];

	if (divsToMake == 1){
		if (max == 6){
			newDivWidth = dimensions[5];
		}
		else if (max == 5){
			newDivWidth = dimensions[4];
		}
		else if (max == 4){
			newDivWidth = dimensions[3];
		}
		else if (max == 3){
			newDivWidth = dimensions[2];
		}
		else if (max == 2){
			newDivWidth = dimensions[1];
		}
		else if (max == 1){
			newDivWidth = dimensions[0];
		}
	}

	// for 110px horizontal block
	else if (max == 2 && divsToMake == 2){
		arr.push(dimensions[0], dimensions[0]);
	}

	
	// for 170px horizontal block
	else if(max == 3 && divsToMake == 2){
		arr.push(dimensions[0], dimensions[1]);
		arr = shuffle(arr);
	}
	else if (max == 3 && divsToMake == 3){
		arr.push(dimensions[0], dimensions[0], dimensions[0]);
		arr = shuffle(arr);
	}

	// for 230px horizontal block
	else if(max == 4 && divsToMake == 2){
		let choice  = randomNumber(2,3);
		if (choice == 2){
			arr.push(dimensions[1], dimensions[1]);
		}
		else if (choice == 3){
			arr.push(dimensions[0], dimensions[2]);
			arr = shuffle(arr);
		}
	}
	else if (max == 4 && divsToMake == 3){
		arr.push(dimensions[0], dimensions[0], dimensions[1]);
		arr = shuffle(arr);
	}
	else if (max == 4 && divsToMake == 4){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0]);
		arr = shuffle(arr);
	}

	// for 290px horizontal block

	else if(max == 5 && divsToMake == 2){
		arr.push(dimensions[0], dimensions[3]);
		arr = shuffle(arr);
	}
	else if (max == 5 && divsToMake == 3){
		let choice  = randomNumber(2,3);
		if (choice == 2){
			arr.push(dimensions[0], dimensions[1], dimensions[1]);
			arr = shuffle(arr);
		}
		else if (choice == 3){
			arr.push(dimensions[0], dimensions[0], dimensions[2]);
			arr = shuffle(arr);
		}
	}
	else if (max == 5 && divsToMake == 4){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[1]);
		arr = shuffle(arr);
	}
	else if (max == 5 && divsToMake == 5){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0], dimensions[0]);
	}

	// for 350px horizontal block

	else if (divsToMake == 2){
		arr.push(dimensions[0], dimensions[4]);
		arr = shuffle(arr);
	}

	else if (divsToMake == 3){
		let choice  = randomNumber(2,3,4);
		if (choice == 2){
			arr.push(dimensions[1], dimensions[1], dimensions[1]);
		}
		else if (choice == 3){
			arr.push(dimensions[0], dimensions[1], dimensions[2]);
			arr = shuffle(arr);
		}
		else if (choice == 4){
			arr.push(dimensions[0], dimensions[0], dimensions[3]);
			arr = shuffle(arr);
		}
	}

	else if (divsToMake == 4){
		let choice  = randomNumber(2,3);
		if (choice == 2){
			arr.push(dimensions[0], dimensions[0], dimensions[1], dimensions[1]);
			arr = shuffle(arr);
		}
		else if (choice == 3){
			arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[2]);
			arr = shuffle(arr);
		}
	}

	else if (divsToMake == 5){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0], dimensions[1]);
		arr = shuffle(arr);
	}

	else if (divsToMake == 6){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0],dimensions[0], dimensions[0]);
	}


	//appending divs
	if (divsToMake <= 1){
		newDiv.style.width = newDivWidth + "vw";
		letterBox.appendChild(newDiv);
		console.log("new child appended");
	}
	//taking the entire array as input
	else if (divsToMake > 1){
		for (let k = 0; k < arr.length; k++){
			let newDiv = document.createElement("DIV");
			newDiv.classList.add("innerDiv");
			console.log("k = " + k);
			console.log("arr[k] = " + arr[k]);
			newDivWidth = arr[k] - 0.6666666667;
			newDiv.style.width = newDivWidth + "vw";
			console.log("newDivWidth = " + newDivWidth + "vw");
			letterBox.appendChild(newDiv);
			console.log("new child appended");
		}
	}

	arr = [];
}


function drawVerz(letter, letterBox, max, divsToMake){

	console.log(letterBox);

	let newDiv = document.createElement("DIV");
	newDiv.classList.add("innerDiv");
	let newDivHeight = 0;

	let arr = [];

	if (divsToMake == 1){
		if (max == 6){
			newDivHeight = dimensions[5];
		}
		else if (max == 5){
			newDivHeight = dimensions[4];
		}
		else if (max == 4){
			newDivHeight = dimensions[3];
		}
		else if (max == 3){
			newDivHeight = dimensions[2];
		}
		else if (max == 2){
			newDivHeight = dimensions[1];
		}
		else if (max == 1){
			newDivHeight = dimensions[0];
		}
	}

	// for 110px horizontal block
	else if (max == 2 && divsToMake == 2){
		arr.push(dimensions[0], dimensions[0]);
	}

	
	// for 170px horizontal block
	else if(max == 3 && divsToMake == 2){
		arr.push(dimensions[0], dimensions[1]);
		arr = shuffle(arr);
	}
	else if (max == 3 && divsToMake == 3){
		arr.push(dimensions[0], dimensions[0], dimensions[0]);
		arr = shuffle(arr);
	}

	// for 230px horizontal block
	else if(max == 4 && divsToMake == 2){
		let choice  = randomNumber(2,3);
		if (choice == 2){
			arr.push(dimensions[1], dimensions[1]);
		}
		else if (choice == 3){
			arr.push(dimensions[0], dimensions[2]);
			arr = shuffle(arr);
		}
	}
	else if (max == 4 && divsToMake == 3){
		arr.push(dimensions[0], dimensions[0], dimensions[1]);
		arr = shuffle(arr);
	}
	else if (max == 4 && divsToMake == 4){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0]);
		arr = shuffle(arr);
	}

	// for 290px horizontal block

	else if(max == 5 && divsToMake == 2){
		arr.push(dimensions[0], dimensions[3]);
		arr = shuffle(arr);
	}
	else if (max == 5 && divsToMake == 3){
		let choice  = randomNumber(2,3);
		if (choice == 2){
			arr.push(dimensions[0], dimensions[1], dimensions[1]);
			arr = shuffle(arr);
		}
		else if (choice == 3){
			arr.push(dimensions[0], dimensions[0], dimensions[2]);
			arr = shuffle(arr);
		}
	}
	else if (max == 5 && divsToMake == 4){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[1]);
		arr = shuffle(arr);
	}
	else if (max == 5 && divsToMake == 5){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0], dimensions[0]);
	}

	// for 350px horizontal block

	else if (divsToMake == 2){
		arr.push(dimensions[0], dimensions[4]);
		arr = shuffle(arr);
	}

	else if (divsToMake == 3){
		let choice  = randomNumber(2,3,4);
		if (choice == 2){
			arr.push(dimensions[1], dimensions[1], dimensions[1]);
		}
		else if (choice == 3){
			arr.push(dimensions[0], dimensions[1], dimensions[2]);
			arr = shuffle(arr);
		}
		else if (choice == 4){
			arr.push(dimensions[0], dimensions[0], dimensions[3]);
			arr = shuffle(arr);
		}
	}

	else if (divsToMake == 4){
		let choice  = randomNumber(2,3);
		if (choice == 2){
			arr.push(dimensions[0], dimensions[0], dimensions[1], dimensions[1]);
			arr = shuffle(arr);
		}
		else if (choice == 3){
			arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[2]);
			arr = shuffle(arr);
		}
	}

	else if (divsToMake == 5){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0], dimensions[1]);
		arr = shuffle(arr);
	}

	else if (divsToMake == 6){
		arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0],dimensions[0], dimensions[0]);
	}


	//appending divs
	if (divsToMake <= 1){
		newDiv.style.height = newDivHeight + "vw";
		letterBox.appendChild(newDiv);
		console.log("new child appended");
	}
	//taking the entire array as input
	else if (divsToMake > 1){
		for (let k = 0; k < arr.length; k++){
			let newDiv = document.createElement("DIV");
			newDiv.classList.add("innerDiv");
			newDivHeight = arr[k] - 0.6666666667;
			newDiv.style.height = newDivHeight + "vw";
			letterBox.appendChild(newDiv);
			console.log("new child appended");
		}
	}

	arr = [];
}

//value is the respective height or width depending on the div  
function maxDivs(value){
	let max = (value - (value%3.3333333333)) / 3.3333333333;
	if (max != 0){
		return max;
	}
	else{
		return 1;
	}
}

//value to be converted
function viewportUnits(value){
	let newUnits = Math.floor((value / window.innerWidth) * 100);
	return newUnits;
}

// choosing a random number
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}

//the function below is called the Fisher-Yates shuffle
//visualisation, explanation, and code at this link — https://bost.ocks.org/mike/shuffle/
//i borrowed the code from the site above

function shuffle(array) {
  var m = array.length;
  let t;
  let i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}