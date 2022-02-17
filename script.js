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
            innerDiv.addEventListener("mouseover", function() {
                innerDiv.style.backgroundColor = "black"
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