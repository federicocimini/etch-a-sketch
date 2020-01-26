// Global Variables

const container = document.querySelector("#container");
const contWidth = container.offsetWidth;
const contHeight = container.offsetHeight;

const btn = document.querySelector("#resize");
let gridLength = 16;

// Create grid of div elements

function setSize(size) {
    let boxWidth = contWidth / size + "px";
    let boxHeight = contHeight / size + "px";
  
    container.style.gridTemplateColumns = `repeat(${size}, ${boxWidth})`;
    container.style.gridTemplateRows = `repeat(${size}, ${boxHeight})`;
    
    for (let i = 0; i < (size*size) ; i++) {
        const box = document.createElement("div");
        box.classList.add("item");
        box.style.width = boxWidth;
        box.style.height = boxHeight;
        box.addEventListener("mouseover", e => {
            box.style.backgroundColor = randomColorGenerator();
        });
        container.appendChild(box);
    }
}


// Click button to clear and resize the grid

btn.addEventListener("click", function () {
    const boxes = document.querySelectorAll(".item");
    boxes.forEach(item => {
        container.removeChild(item);
    });
    gridLength = parseInt(prompt("Please indicate how many squares per side should the grid have:",16));
    setSize(gridLength);
});

// Generate a random color

function randomColorGenerator(){
    let hexStr = '0123456789ABCDEF'
    let color= '#'
    for (var i = 0; i < 6; i++) {
        color += hexStr[Math.floor(Math.random()*16)]	
    }
    return color
}


// Initial Functions

setSize(gridLength);
hover();
