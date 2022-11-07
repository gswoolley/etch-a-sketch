const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn");
let numSquares = 256;
let gridSquares = document.getElementsByClassName("grid-element");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

createSquares();


//create grid of squares
function createSquares() {
  reset();
  for (let i = 0; i < numSquares; i++) {
    div = document.createElement("div");
    div.className = "grid-element";
    container.appendChild(div);
  }
}

function clear(){
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].style.backgroundColor = "white";
      }
}

//deletes all grid-elements
function reset() {
    document
      .querySelectorAll(".grid-element")
      .forEach((e) => e.parentNode.removeChild(e));
  }

//create 'etch a sketch' effect
document.querySelectorAll("#container").forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    container.style.backgroundColor = 'white';
    event.target.style.backgroundColor = "black";
  });
});

//clear grid of squares of all colors
clearBtn.addEventListener("click", () => {
  for (let i = 0; i < gridSquares.length; i++) {
    gridSquares[i].style.backgroundColor = "white";
  }
});


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  numSquares = this.value ** 2;
  numSquares = (this.value)*(this.value);
  console.log(numSquares);
  createSquares();
  container.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`
  container.style.gridTemplateRows = `repeat(${this.value}, 1fr)`
  container.style.backgroundColor = 'white';
  
};

