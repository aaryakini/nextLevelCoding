let max = 10;

function drawDivs(max){
  let activeDiv = document.getElementById('hor');
  console.log(activeDiv)
  let height = document.getElementById('hor').clientHeight;
  let width = document.getElementById('hor').clientWidth;
  
  console.log("width = " + width);
  console.log("height = " + height);
  
  let realWidth = width - ((max - 1)*10); //i want the distance between every box to be 10px.
                                          // This gets rid of the prerequiste space and returns
                                          // only the total width that should be occupied by new divs

  console.log("realWidth = " + realWidth);
  

  let totalWidths = 0; //width covered as new divs are added
  let areaLeft = 0; //width left to cover as new divs are added

  for (let i = 0; i < max;i++){
    let w = 0;

    let newDiv = document.createElement("DIV");
    newDiv.classList.add("innerDiv");
    newDiv.height = height + "px";

    console.log("i = " + i);

    if (i == 0){
      w = randomNumber(50, realWidth/2);
      console.log("innerDiv width = " + w);
    }
    else if (i < max - 1){
      w = randomNumber(50, areaLeft-50); 
      console.log("innerDiv width = " + w);
    }

    //for ranges

    // if (i == 0){
    //   w = Math.ceil(randomNumber(25, realWidth/2)/25)*25;
    //   console.log("innerDiv width = " + w);
    // }
    // else if (i < max - 1){
    //   w = Math.ceil(randomNumber(25, areaLeft - 25)/25)*25;
    //   console.log("innerDiv width = " + w);
    // }

    else{
      w = areaLeft
      console.log("innerDiv width = " + w);
    }

    totalWidths = totalWidths + w;
    console.log("totalWidths = " + totalWidths);
    areaLeft = realWidth - totalWidths;
    newDiv.style.width = w + "px";
    activeDiv.appendChild(newDiv);
    console.log("new child appended");
  }


  let divsMade = document.getElementsByClassName("innerDiv");
  console.log("divsMade = " + divsMade.length);
}

// choosing a random number
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 