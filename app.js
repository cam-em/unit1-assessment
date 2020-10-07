const plusBtn = document.querySelector('#plusBtn')
const minusBtn = document.querySelector('#minusBtn')
let numField

let numDisplay = document.querySelector('#numDisplay')


function getNumFieldVal() {
    let numField = document.querySelector('#numField')
    return parseInt(numField.value)
}

function getNumDisplayVal() {
    return parseInt(numDisplay.textContent)
}

function add() {
    const sum = getNumFieldVal() + getNumDisplayVal()
    numDisplay.textContent = sum.toString()
    console.log(getNumDisplayVal())

    if(getNumDisplayVal() >= 0) {
        numDisplay.classList.remove('red')
    }
}

function subtract() {
    const difference = getNumDisplayVal() - getNumFieldVal()
    numDisplay.textContent = difference.toString()
    //console.log(getNumDisplayVal()>0)
    if(getNumDisplayVal() < 0) {
        numDisplay.classList.add('red')
    }
}


document.addEventListener('DOMContentLoaded', () => {
    plusBtn.addEventListener('click', add)
    minusBtn.addEventListener('click', subtract)
})