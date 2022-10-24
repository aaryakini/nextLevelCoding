let dimensions = [60, 120, 180, 240, 290];

let contentBox = document.getElementById("content");
console.log("viewport width = " + window.innerWidth);

function drawDivs(){
	// there needs to be two parts, one for hor and one for ver

	// HOR
	let hors = document.getElementsByClassName("hor");
	let maxW = 0;

	for (let i = 0; i < hors.length; i++){
		let activeDiv = hors[i];
		console.log(activeDiv);

		let height = hors[i].clientHeight;
		let width = hors[i].clientWidth;

		maxW = (width - (width%50)) / 50; //maximum number of divs to be broken down
		let divsToMake = randomNumber(1,maxW);
		console.log("divsToMake = " + divsToMake);

		console.log("width = " + width);
		console.log("height = " + height);
		console.log("maxW = " + maxW);

		let newDiv = document.createElement("DIV");
		newDiv.classList.add("innerDiv");
		newDiv.height = height + "px";

		let sum = 0;
		let arr = [];
		let randomIndex = 0;
		let wifth = 0;

		if (width == 50){
			newDivWidth = 50;
		}
		else if (divsToMake == 0){
			newDivWidth = width;
			newDiv.style.background = "white";
			newDiv.style.border = "8px solid black";
		}
		else if(divsToMake == 1){
			newDivWidth = dimensions[4];
		}

		// for 170px horizontal block

		else if(width == 170 && divsToMake == 2){
			arr.push(dimensions[0], dimensions[1]);
			arr = shuffle(arr);
			console.log("shuffled array = " + arr);
		}
		else if (width == 170 && divsToMake == 3){
			arr.push(dimensions[0], dimensions[0], dimensions[0]);
		}

		// for 240px horizontal block

		else if(width == 230 && divsToMake == 2){
			arr.push(dimensions[0], dimensions[2]);
			arr = shuffle(arr);
			console.log("shuffled array = " + arr);
		}
		else if (width == 230 && divsToMake == 3){
			arr.push(dimensions[0], dimensions[0], dimensions[1]);
			arr = shuffle(arr);
			console.log("shuffled array = " + arr);
		}
		else if (width == 230 && divsToMake == 4){
			arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0]);
		}

		// for 290px horizontal block

		else if (divsToMake == 2){
			let choice  = randomNumber(3,4);
			if (choice == 3){
				arr.push(dimensions[0], dimensions[3]);
				arr = shuffle(arr);
				console.log("shuffled array = " + arr);
			}
			else if (choice == 4){
				arr.push(dimensions[1], dimensions[2]);
				arr = shuffle(arr);
			}
		}
		else if (divsToMake == 3){
			let choice  = randomNumber(2,3);
			if (choice == 2){
				arr.push(dimensions[0], dimensions[1], dimensions[1]);
				arr = shuffle(arr);
				console.log("shuffled array = " + arr);
			}
			else if (choice == 3){
				arr.push(dimensions[0], dimensions[0], dimensions[2]);
				arr = shuffle(arr);
			}
		}
		else if (divsToMake == 4){
			arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[1]);
			arr = shuffle(arr);
			console.log("shuffled array = " + arr);
		}


		//appending divs
		if (divsToMake <= 1){
			newDiv.style.width = newDivWidth + "px";
			activeDiv.appendChild(newDiv);
			console.log("new child appended");
		}
		//taking the entire array as input
		else if (divsToMake > 1){
			for (let k = 0; k < arr.length; k++){
				let newDiv = document.createElement("DIV");
				newDiv.classList.add("innerDiv");
				newDiv.height = height + "px";
				console.log("k = " + k);
				console.log("arr[k] = " + arr[k]);
				newDivWidth = arr[k] - 10;
				newDiv.style.width = newDivWidth + "px";
				console.log("newDivWidth = " + newDivWidth + "px");
				activeDiv.appendChild(newDiv);
				console.log("new child appended");
			}
		}

		arr = [];
	}

	// VER
	let vers = document.getElementsByClassName("ver");
	let maxH = 0;

	for (let i = 0; i < vers.length; i++){
		let activeDiv = vers[i];
		console.log(activeDiv);

		let height = vers[i].clientHeight;
		let width = vers[i].clientWidth;

		maxH = (height - (height%50)) / 50; //maximum number of divs to be broken down
		let divsToMake = randomNumber(1,maxH);
		console.log("divsToMake = " + divsToMake);

		console.log("width = " + width);
		console.log("height = " + height);
		console.log("maxH = " + maxH);

		let newDiv = document.createElement("DIV");
		newDiv.classList.add("innerDiv");
		newDiv.width = width + "px";

		let sum = 0;
		let arr = [];
		let randomIndex = 0;
		let heifth = 0;

		if (height == 50){
			newDivHeight = 50;
		}
		else if (divsToMake == 0){
			newDivHeight = height;
			newDiv.style.background = "white";
			newDiv.style.border = "8px solid black";
		}
		else if(divsToMake == 1){
			newDivHeight = dimensions[4];
		}

		// for 170px horizontal block

		else if(height == 170 && divsToMake == 2){
			arr.push(dimensions[0], dimensions[1]);
			arr = shuffle(arr);
			console.log("shuffled array = " + arr);
		}
		else if (height == 170 && divsToMake == 3){
			arr.push(dimensions[0], dimensions[0], dimensions[0]);
		}

		// for 240px horizontal block

		else if(height == 230 && divsToMake == 2){
			arr.push(dimensions[0], dimensions[2]);
			arr = shuffle(arr);
			console.log("shuffled array = " + arr);
		}
		else if (height == 230 && divsToMake == 3){
			arr.push(dimensions[0], dimensions[0], dimensions[1]);
			arr = shuffle(arr);
			console.log("shuffled array = " + arr);
		}
		else if (height == 230 && divsToMake == 4){
			arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[0]);
		}

		// for 290px horizontal block

		else if (divsToMake == 2){
			let choice  = randomNumber(3,4);
			if (choice == 3){
				arr.push(dimensions[0], dimensions[3]);
				arr = shuffle(arr);
				console.log("shuffled array = " + arr);
			}
			else if (choice == 4){
				arr.push(dimensions[1], dimensions[2]);
				arr = shuffle(arr);
			}
		}
		else if (divsToMake == 3){
			let choice  = randomNumber(2,3);
			if (choice == 2){
				arr.push(dimensions[0], dimensions[1], dimensions[1]);
				arr = shuffle(arr);
				console.log("shuffled array = " + arr);
			}
			else if (choice == 3){
				arr.push(dimensions[0], dimensions[0], dimensions[2]);
				arr = shuffle(arr);
			}
		}
		else if (divsToMake == 4){
			arr.push(dimensions[0], dimensions[0], dimensions[0], dimensions[1]);
			arr = shuffle(arr);
			console.log("shuffled array = " + arr);
		}


		//appending divs
		if (divsToMake <= 1){
			newDiv.style.height = newDivHeight + "px";
			activeDiv.appendChild(newDiv);
			console.log("new child appended");
		}
		//taking the entire array as input
		else if (divsToMake > 1){
			for (let k = 0; k < arr.length; k++){
				let newDiv = document.createElement("DIV");
				newDiv.classList.add("innerDiv");
				newDiv.height = height + "px";
				console.log("k = " + k);
				console.log("arr[k] = " + arr[k]);
				newDivHeight = arr[k] - 10;
				newDiv.style.height = newDivHeight + "px";
				console.log("newDivHeight = " + newDivHeight + "px");
				activeDiv.appendChild(newDiv);
				console.log("new child appended");
			}
		}

		arr = [];
	}
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


// choosing a random number
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}













