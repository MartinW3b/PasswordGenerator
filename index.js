const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const withoutNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const withoutSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const withoutBoth = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const passwordOneEl = document.getElementById("password-one-el")
const passwordTwoEl = document.getElementById("password-two-el")
const buttonEl = document.getElementById("button-el")
const inputEl = document.getElementById("inpt-value")
const symbolsEl = document.getElementById("symbols-el")  
const numbersEl = document.getElementById("numbers-el") 
const errorMsg = document.getElementById("error-msg")

let delka = 0

function firstOne() {
    let text = ""
    if (symbolsEl.checked === true && numbersEl.checked === true) {
    for (let i = 0; i < delka; i++) {
    let test = Math.floor(Math.random() * withoutBoth.length)
    text += withoutBoth[test]
    }
    return passwordOneEl.textContent = text
 } else if (numbersEl.checked === true) {
    for (let i = 0; i < delka; i++) {
    let test = Math.floor(Math.random() * withoutNumbers.length)
    text += withoutNumbers[test]
    }
    return passwordOneEl.textContent = text
 } else if(symbolsEl.checked === true) {
    for (let i = 0; i < delka; i++) {
    let test = Math.floor(Math.random() * withoutSymbols.length)
    text += withoutSymbols[test]
    }
    return passwordOneEl.textContent = text
 } else {
    for (let i = 0; i < delka; i++) {
    let test = Math.floor(Math.random() * characters.length)
    text += characters[test]
    }
    return passwordOneEl.textContent = text  
 }
}  
 
 function secondOne() { 
    let text = ""
    if (symbolsEl.checked === true && numbersEl.checked === true) {
    for (let i = 0; i < delka; i++) {
    let test = Math.floor(Math.random() * withoutBoth.length)
    text += withoutBoth[test]
    }
    return passwordTwoEl.textContent = text 
 } else if (numbersEl.checked === true) {
    for (let i = 0; i < delka; i++) {
    let test = Math.floor(Math.random() * withoutNumbers.length)
    text += withoutNumbers[test]
    }
    return passwordTwoEl.textContent = text
 } else if(symbolsEl.checked === true) {
    for (let i = 0; i < delka; i++) {
    let test = Math.floor(Math.random() * withoutSymbols.length)
    text += withoutSymbols[test]
    }
    return passwordTwoEl.textContent = text
 } else {
    for (let i = 0; i < delka; i++) {
    let test = Math.floor(Math.random() * characters.length)
    text += characters[test]
    }
    return passwordTwoEl.textContent = text  
 }
}  
 
buttonEl.addEventListener("click", function() {
    delka = inputEl.value
    if (delka > 15 || delka < 5 || delka === "") {
        errorMsg.textContent = "Choose the number of characters between 5 and 15"
        errorMsg.style.background = "rgba(255, 99, 71, 0.3)"
    } else {
    firstOne()
    secondOne()
    errorMsg.textContent = ""
    errorMsg.style.background = "none"
    }
})

function copyit() {
  const textToCopy = passwordOneEl.textContent
  navigator.clipboard.writeText(textToCopy).then( 
    function () {
      errorMsg.textContent = textToCopy + " password copied successfully"
      errorMsg.style.background = "rgba(138, 238, 130, 0.3)"
    },
    function (err) {
      errorMsg.textContent = "Something went wrong. Try it again", err
      errorMsg.style.background = "rgba(255, 99, 71, 0.3)"
    }
  )
}

function copyittwo() {
  const textToCopyTwo = passwordTwoEl.textContent
  navigator.clipboard.writeText(textToCopyTwo).then( 
    function () {
      errorMsg.textContent = textToCopyTwo + " password copied successfully"
      errorMsg.style.background = "rgba(138, 238, 130, 0.3)"
    },
    function (err) {
      errorMsg.textContent = "Something went wrong. Try it again", err
      errorMsg.style.background = "rgba(255, 99, 71, 0.3)"
    }
  )
}