const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn");
let numSquares = 256;
let gridSquares = document.getElementsByClassName("grid-element");

//create grid of squares
for (let i = 0; i < numSquares; i++) {
  div = document.createElement("div");
  div.className = "grid-element";
  container.appendChild(div);
}

//create 'etch a sketch' effect
document.querySelectorAll("#container").forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "pink";
  });
});

//clear grid of squares of all colors
clearBtn.addEventListener("click", () => {
  for (let i = 0; i < gridSquares.length; i++) {
    gridSquares[i].style.backgroundColor = "white";
  }
});
