// * Global cars, default values
let calcResult = 0;
let operator = "";
let errorMessage = "Error";
let clickedOperator;
let clearSecondNumber = true;
let secondNumberMemory = "";
let firstNumber = "0";
let secondNumber = "";

// * Basic calc functions
function add(a, b) {
    return a + b;
}

function substract(a, b){
    return a - b;
}

function x(a, b) {
    return a * b;
}

function divide(a, b) {
    let result;
    if (b == 0) {
        result = errorMessage;
    } else if (a == 0) {
        result = 0;
    } else {
        result = a / b;
    }
    return result;
}

// * Operator selection
let operatorButtons = document.querySelectorAll("button.operator");
let chosenOperation
let firstNumberChosen = false;

// append chosen function for every operator button based on its value, print
// toogles firstNumberChosen to switch to secondNumber when clicking numbers

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // Adds functionality of calculating shown function and starting next calculation
        // When operator button was clicked before = button
        if (firstNumberChosen == true && operator != ""){   
                document.querySelector(`button#sum`).click();     
            }

        switch(button.id) {
            case "multiply":
                chosenOperation = "x";
                operator = "x";
                firstNumberChosen = true;
                break;
            case "add":
                chosenOperation = "add";
                operator = "+";
                firstNumberChosen = true;
                break;
            case "substract":
                chosenOperation = "substract";
                operator = "-";
                firstNumberChosen = true;
                break;
            case "divide":
                chosenOperation = "divide";
                operator = "/";
                firstNumberChosen = true;
                break;
        }
        updateCurrentDisplay();
    })
})


// * Clear button functionality -> remove last inputed number
let clearButton = document.querySelector("button#C");
clearButton.addEventListener("click", () => {
    if (firstNumber.length == 1){
        firstNumber = "0";
    }
    else if (firstNumberChosen == false && firstNumber != "0") {
        firstNumber = firstNumber.substring(0, firstNumber.length - 1)
    } else if (firstNumberChosen == true && secondNumber != "0") {
        secondNumber = secondNumber.substring(0, secondNumber.length - 1)
    } 
    updateCurrentDisplay();
})

// * Clear All function

// * Clear All button functionality
let clearAllButton = document.querySelector("button#AC");
clearAllButton.addEventListener("click", () => {
    updateCurrentDisplay();
    AC();
})

// * Clear All function
function AC() {
    firstNumberChosen = false;
    firstNumber = "0";
    secondNumber = "";
    chosenOperation = "";
    operator = "";
    calcResult = "0";
    updateCurrentDisplay();
}

// Decimal button functionality and logic
let decimalButton = document.querySelector("button#decimal");
decimalButton.addEventListener("click", () => {

    if (firstNumberChosen == false) {
        if (firstNumber == "" && firstNumber != "0." && firstNumber.includes(".") == false) {
            firstNumber = "0.";
        } else if (firstNumber != "" && firstNumber.slice(-1) != "." && firstNumber.includes(".") == false) {
            firstNumber = firstNumber + "."
        }
    } else if (firstNumberChosen == true && secondNumber.includes(".") == false) {
        if (secondNumber == "" && secondNumber != "0.") {
            secondNumber = "0.";
            updateCurrentDisplay();
        } else if (secondNumber != "" && secondNumber.slice(-1) != ".") {
            secondNumber = secondNumber + "."
            updateCurrentDisplay();
        }
    }
    updateCurrentDisplay();


})


// * Number buttons functionality
let numberButtons = document.querySelectorAll("button.number");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // for firstNumber
        if (firstNumberChosen == false) {
            // Append clicked value to "firstNumber" string
            if (firstNumber == "") {
                firstNumber = button.textContent;
            } else if (firstNumber != "" && firstNumber != "0") {
                firstNumber = firstNumber + button.textContent;
            } else if (firstNumber == "0") {
                firstNumber = button.textContent;
            }

            // limit input lenght
            firstNumber = firstNumber.substring(0, 9);
        } // switch to secondNumber when operator is clicked
        else if (firstNumberChosen == true) {
            if (secondNumber == "") {
                secondNumber = button.textContent;
            } else if (secondNumber != "") {
                secondNumber = secondNumber + button.textContent;
            }


            // limit input lenght
            secondNumber = secondNumber.substring(0, 9);
        }
        updateCurrentDisplay();

    })
})

// * Sum button functionality
// run chosen operation
let sumButton = document.querySelector("button#sum");
sumButton.addEventListener("click", () => {
    
    if (firstNumber != "" && secondNumber != "") {
        switch (chosenOperation) {
            case "x":
            calcResult = x(Number(firstNumber), Number(secondNumber));
            chosenOperation = "";
            break;
            case "add":
            calcResult = add(Number(firstNumber), Number(secondNumber));
            chosenOperation = "";
            break;
            case "substract":
            calcResult = substract(Number(firstNumber), Number(secondNumber));
            chosenOperation = "";
            break;
            case "divide":
            calcResult = divide(Number(firstNumber), Number(secondNumber));
            chosenOperation = "";
            break;
        }

        // prevents problems with floating point numbers by rounding result if decimal is present
        if (calcResult.toString().includes(".") == true && calcResult != errorMessage){
            calcResult = calcResult.toFixed(2);
        }
        operator = "";
        firstNumber = calcResult;
        secondNumber = "";
        firstNumberChosen = true; // prevents from adding numbers to firstNumber, which becomes equal to calcresult
    } else {
        firstNumberChosen = true;
        secondNumber = "";
    }

    
    updateCurrentDisplay();

})


// * Calc display
let currentDisplay = document.querySelector("p.current");
currentDisplay.textContent = "0";
let secondaryDisplay = document.querySelector("p.secondary");
secondaryDisplay.textContent = "";

let dynamicFontSize;

function updateCurrentDisplay() {

    //Change font size dynamically based on lenght

    let length = currentDisplay.textContent.length;    

    switch (true) {
        case length <= 9 :
            currentDisplay.style.setProperty(`font-size`, `36px`);
            break;
        case length <= 15 :
            currentDisplay.style.setProperty(`font-size`, `32px`);
            break;
        case length <= 21 :
            currentDisplay.style.setProperty(`font-size`, `24px`);
            break;
        case length <= 28 :
            currentDisplay.style.setProperty(`font-size`, `21px`);
            break;
    }

    //Change display content
    if (firstNumberChosen == false && operator == "") {
    currentDisplay.textContent = `${firstNumber}`;
    secondaryDisplay.textContent = "";
    } else if (firstNumberChosen == true && secondNumber != "" && operator == "") {
    currentDisplay.textContent = `${firstNumber} ${secondNumber}`;
    secondaryDisplay.textContent = "Choose an operator to continue";
    } else {
    currentDisplay.textContent = `${firstNumber}${operator}${secondNumber}`;
    secondaryDisplay.textContent = "";
    }


}


// * ADDITIONAL FUNCTIONS
// * Keyboard support

document.addEventListener("keydown", (e) =>  {
    switch (e.key) {
        case "Enter":
            e.preventDefault();
            document.querySelector(`button#sum`).click();
            break;
        case "1" :
        case "2" :
        case "3" :
        case "4" :
        case "5" :
        case "6" :
        case "7" :
        case "8" :
        case "9" :
        case "0" :     
            document.querySelector(`button#n${e.key}`).click();
            break;
        case "+" :
            document.querySelector(`button#add`).click();
            break;
        case "-" :
            document.querySelector(`button#substract`).click();
            break;
        case "/" :
            document.querySelector(`button#divide`).click();
            break;
        case "*" :
            document.querySelector(`button#multiply`).click();
            break;
        case "Backspace" :
            document.querySelector(`button#C`).click();
            break;
        case "Escape" :
            document.querySelector(`button#AC`).click();
            break;
        case "=" :
            e.preventDefault();
            document.querySelector(`button#sum`).click();
            break;
        case "." :
            document.querySelector(`button#decimal`).click();
            break;

    }
}
)

// * Dark mode
let root = document.querySelector(':root');
let svgs = document.querySelectorAll("img");
let slider = document.querySelector("input.switch");
let info = document.querySelector("div#info");

slider.addEventListener("change", () => {
    if (slider.checked) {
        changeUI();
    } else {
        restoreUI();
    }
} )

function changeUI () {
    root.style.setProperty("--bg-color", "#1a1c23");
    root.style.setProperty("--calc-bg-color", "#22252D");
    root.style.setProperty("--button-bg-color", "#2A2D37");
    root.style.setProperty("--button-hover-bg-color", "#282832");
    root.style.setProperty("--font-color", "#f3f6f4");
    root.style.setProperty("--secondary-font-color", "grey");
    root.style.setProperty("--button-color", "#f3f6f4");
    svgs.forEach((svg) => {
        svg.style.filter = "brightness(0) saturate(100%) invert(90%) sepia(13%) saturate(265%) hue-rotate(164deg) brightness(114%) contrast(92%)";
    }
)
}

function restoreUI (){
    root.removeAttribute("style");
    svgs.forEach((svg) => {
        svg.removeAttribute("style");
    })
    info.removeAttribute("style");
}

// * Clock display
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

if (hours < 10) {
    hours = "0" + hours;
}

if (minutes < 10){
    minutes = "0" + minutes;
}

// Update clock on page load
const clock = document.querySelector("p#clock");
clock.textContent = `${hours}:${minutes}`;


// Update clock every minute
setInterval( ()=> {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();

    clock.textContent = `${hours}:${minutes}`;
}, 60 * 1000);
