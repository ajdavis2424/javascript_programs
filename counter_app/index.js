// Declared variable for counter
let count = 0

// declared variable for count element--- get element by id grabs "increment-el in HTML file"
let countEl = document.getElementById("count-el")

// declared variable for save element--- get element by id grabs "save-el" in HTML file"
let saveEl = document.getElementById("save-el")

function increment() {
    // count variable increases by each 1 click
    count += 1
    // changes text in HTML
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContentStr
    countEl.textContent = 0
    count = 0
}