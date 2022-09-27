let event = document.getElementById("outer").event;
let z = 0;
let max = 150;
let min = 50;
let days = document.getElementsByClassName("day");
console.log(days);
let free = Math.floor(Math.random() * days.length);
console.log(days[free].id);

function makeEvent(name){
  let activeDay = document.getElementById(name);
  if (days[free] !== activeDay && z < 101 && Math.random()<0.5){
    let newDiv = document.createElement("DIV");
    newDiv.classList.add("event");
    newDiv.style.width = "73px";

    let h = makeRandomSize(min, max);
    newDiv.style.height = h + "px";

    newDiv.style.position = "absolute";

    let pos = event.clientY - 241; //what do I subtract???
    newDiv.style.top = pos + "px"; //this is causing PROBLEMS!!!!!!!!
    newDiv.style.filter = `drop-shadow(0px 0px 5px #D333FF)`;
    newDiv.style.borderRadius = "6px"
    // newDiv.style.transform = `translateY(-50%)`;
    newDiv.style.background = `hsla(${Math.random()*360}, 100%, 60%, 60%)`;
    activeDay.appendChild(newDiv); //how to append at a specific position?
    z = z + 1;
  }
}

function makeRandomSize(minSize, maxSize){
  return minSize + Math.random()*(maxSize-minSize);
}