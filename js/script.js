const dayNames = ["日","月","火","水","木","金","土"];
let date = new Date();
const day = document.getElementById("day");
day.innerText = dayNames[date.getDay()];

let dayElements = [];
for (  var i = 1;  i <= 5;  i++  ) {
    dayElements.push(document.getElementById("day"+String(i)));
}
dayElements[date.getDay()-1].classList.add("today");