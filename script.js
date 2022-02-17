let gridStyle = "classic"

let classicButton = document.querySelector(".blackStyle")
classicButton.addEventListener("click", function() {
    gridStyle = "classic"
})
let fadeButton = document.querySelector(".fadeStyle")
fadeButton.addEventListener("click", function() {
    gridStyle = "fade"
})
let randomButton = document.querySelector(".randomColour")
randomButton.addEventListener("click", function() {
    gridStyle = "random"
})

function createGrid(size) {
    if (size > 100) {
        alert("error: Maximum grid size:100")
        return
    }
    const divArea = document.querySelector(`.gridArea`)
    for (let n = 1; n <= size; n++) {
        let div = document.createElement(`div`);
        div.classList.add("vertical");
        divArea.appendChild(div)
        for (let n = 1; n <= size; n++) {
            let innerDiv = document.createElement(`div`);
            innerDiv.classList.add("horizontal");
            div.appendChild(innerDiv);
            innerDiv.style.backgroundColor = "hsl(0,0%,100%)"
            innerDiv.addEventListener("mouseover", function() {
              if (gridStyle == "classic") { innerDiv.style.backgroundColor = "black"}
              else if (gridStyle == "fade") { 
                let rgb = innerDiv.style.backgroundColor.slice(4,7);
                let darkness = parseInt(rgb, 10);
                let newDarkness;
                if (darkness < 26) {
                    newDarkness = 0;
                } else {
                    newDarkness = darkness - 26;
                } 
                innerDiv.style.backgroundColor = "rgb(" + newDarkness + "," + newDarkness + "," + newDarkness + ")"


              } else {
                  let random1 = Math.random() * 255;
                  let random2 = Math.random() * 255;
                  let random3 = Math.random() * 255;
                  innerDiv.style.backgroundColor = "rgb(" + random1 + "," + random2 + "," + random3 + ")"
              }
            })
        }
    }
}

createGrid(16)

const resetButton = document.querySelector(`.reset`)
resetButton.addEventListener("click", function() {
    let oldDivs = document.querySelectorAll(`.vertical`);
    oldDivs.forEach(e => e.remove());
    createGrid(prompt("Grid size?"))
})