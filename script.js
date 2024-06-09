let currentDisplay = document.querySelector("p.current");
currentDisplay.textContent = "0";

let firstNumber = 0;
let firstNumberToggle = false;
let secondNumber = 0;
let secondNumberToggle = false;
let chosenOperation = "";
let result;
let wasRun = false;
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let usedDecimal = false;

if (hours < 10) {
    hours = "0" + hours;
}

if (minutes < 10){
    minutes = "0" + minutes;
}

let equationDisplay = document.querySelector("p.equation");
equationDisplay.textContent = "0";

const clock = document.querySelector("p.clock");
clock.textContent = `${hours}:${minutes}`;

const numberButtons = document.querySelectorAll("button.number");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (wasRun == false) {
            appendNumber(button.textContent);
        } else {
            reset();
            appendNumber(button.textContent);
        }

    });


})

function reset() {
    firstNumber = 0;
    secondNumber = 0;
    currentDisplay.textContent = "0";
    firstNumberToggle = false;
    secondNumberToggle = false;
    chosenOperation = "";
    wasRun = false;
    usedDecimal = false;
    equationDisplay.textContent = "0";
}

const operatorButtons = document.querySelectorAll("button.operator");

operatorButtons.forEach((button) => 
    button.addEventListener("click", () => {
       
        chosenOperation = button.textContent;

        if (firstNumberToggle == false){
        firstNumber = currentDisplay.textContent;
        equationDisplay.textContent = `${firstNumber} ${chosenOperation}`;
        
        currentDisplay.textContent = "0";
        console.log(firstNumber);
        }
        firstNumberToggle = true;
        usedDecimal = false;

        if (firstNumberToggle == true && secondNumberToggle == true) {

        }
}))

const C = document.querySelector("button.C");
C.addEventListener("click", reset);

const decimal = document.querySelector("button.decimal");
decimal.addEventListener("click", () => {
    if (usedDecimal == false) {
        appendNumber(decimal.textContent);
        usedDecimal = true;
    }
})

const sumButton = document.querySelector("button.sum");

sumButton.addEventListener("click", () => {
    
    if (firstNumberToggle == true && secondNumberToggle == false) {
        secondNumber = currentDisplay.textContent;
        equationDisplay.textContent = `${firstNumber} ${chosenOperation} ${secondNumber}`;
        // currentDisplay.textContent = "0";
        console.log(secondNumber);
        secondNumberToggle = true;

        switch (chosenOperation) {
            case "+":
                currentDisplay.textContent = (add(Number(firstNumber), Number(secondNumber)));
                break;
            case "-":
                currentDisplay.textContent = (substract(Number(firstNumber), Number(secondNumber)));
                break;
            case "/":
                result = (divide(Number(firstNumber), Number(secondNumber)));
                if (typeof(result) == Number) {
                    currentDisplay.textContent = result;
                } else {
                    currentDisplay.textContent = "Error. Don't divide by 0 lol";
                }
                break;
            case "X":
                currentDisplay.textContent = (multiply(Number(firstNumber), Number(secondNumber)));
                break;
        }
        

        wasRun = true;
        usedDecimal = true;
    }

})

function appendNumber(number) {
    if (currentDisplay.textContent == 0) {
        currentDisplay.textContent = "";
    }
    currentDisplay.textContent = currentDisplay.textContent + number;
}

function add (a, b){
    return a+b;
}

function substract (a, b){
    return a-b;
}

function multiply (a, b){
    return a*b;
}

function divide (a, b){
    return a/b;
}

if (currentDisplay == "Infinity") {
    currentDisplay.textContent = "Error";
}

