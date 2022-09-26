let z = 0;
let max = 150;
let min = 20;
let days = document.getElementsByClassName("day");
console.log(days);
let free = Math.floor(Math.random() * days.length);
console.log(days[free].id);

function makeEvent(name){
  let activeDay = document.getElementById(name);
  if (days[free] !== activeDay && z < 101){
    let newDiv = document.createElement("DIV");
    newDiv.classList.add("event");
    newDiv.style.width = "73px";
    newDiv.style.height = makeRandomSize(min, max) + "px";
    newDiv.style.position = "absolute";
    // newDiv.style.left = event.clientX + "px";
    newDiv.style.top = event.clientY + "px";
    // newDiv.style.transform = `translateY(-50%)`;
    newDiv.style.background = `hsla(${Math.random()*360}, 100%, 60%, 60%)`;
    activeDay.appendChild(newDiv);
    z = z + 1;
  }
}

function makeRandomSize(minSize, maxSize){
  return minSize + Math.random()*(maxSize-minSize);
}