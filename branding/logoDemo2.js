// the max number of breaks that an div can have  = {width - (width%50)} / 50

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

		maxW = (width - (width%50)) / 50;

		console.log("width = " + width);
		console.log("height = " + height);
		console.log("maxW = " + maxW);

		let realWidth = width - ((maxW - 1)*10);
		console.log("realWidth = " + realWidth);

		let totalWidths = 0; //width covered as new divs are added
		let areaLeft = 0; //width left to cover as new divs are added

		for (let i = 0; i < maxW;i++){

			let newDivWidth = 0;

			let newDiv = document.createElement("DIV");
			newDiv.classList.add("innerDiv");
			newDiv.height = height + "px";

			console.log("i = " + i);
			
			if (width == 50){
				newDivWidth = 50;
			}
			else if (i == 0){
			newDivWidth = randomNumber(50, realWidth/2);
			console.log("innerDiv width = " + newDivWidth);
			}
			else if (i < maxW - 1){
			newDivWidth = randomNumber(50, areaLeft-50); 
			console.log("innerDiv width = " + newDivWidth);
			}

			else{
			newDivWidth = areaLeft
			console.log("innerDiv width = " + newDivWidth);
			}

			totalWidths = totalWidths + newDivWidth;
			console.log("totalWidths = " + totalWidths);
			areaLeft = realWidth - totalWidths;
			newDiv.style.width = newDivWidth + "px";
			activeDiv.appendChild(newDiv);
			console.log("new child appended");
		}
	}


	let vers = document.getElementsByClassName("ver");
	let maxH = 0;

	for (let i = 0; i < vers.length; i++){
		let activeDiv = vers[i];
		console.log(activeDiv);

		let width = vers[i].clientWidth;
		let height = vers[i].clientHeight;

		maxH = (height - (height%50)) / 50;

		console.log("width = " + width);
		console.log("height = " + height);
		console.log("maxH = " + maxH);

		let realHeight = height - ((maxH - 1)*10);
		console.log("realHeight = " + realHeight);

		let totalHeights = 0; //height covered as new divs are added
		let areaLeft = 0; //height left to cover as new divs are added

		for (let i = 0; i < maxH;i++){
			let newDivHeight = 0;

			let newDiv = document.createElement("DIV");
			newDiv.classList.add("innerDiv");
			newDiv.height = height + "px";

			console.log("i = " + i);

			if (height == 50){
				newDivHeight  = 50;
			}
			else if (i == 0){
			newDivHeight = randomNumber(50, realHeight/2);
			console.log("innerDiv height = " + newDivHeight);
			}
			else if (i < maxH - 1){
			newDivHeight = randomNumber(50, areaLeft-50); 
			console.log("innerDiv height = " + newDivHeight);
			}

			else{
			newDivHeight = areaLeft
			console.log("innerDiv height = " + newDivHeight);
			}

			totalHeights = totalHeights + newDivHeight;
			console.log("totalHeights = " + totalHeights);
			areaLeft = realHeight - totalHeights;
			newDiv.style.height = newDivHeight + "px";
			activeDiv.appendChild(newDiv);
			console.log("new child appended");
		}
	}
}

// choosing a random number
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 