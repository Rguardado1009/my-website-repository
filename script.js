const h2 = document.createElement('h2');
h2.textContent = "this is my website"; 
document.querySelector('body').appendChild(h2); 

document.getElementById("name").addEventListener("mouseover", mouseOver);
document.getElementById("name").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("name").style.color = "red";
}

function mouseOut() {
  document.getElementById("name").style.color = "black";
}