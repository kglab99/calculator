// //global variables
// let firstNumber = 0;
// let firstNumberToggle = false;
// let secondNumber = 0;
// let secondNumberToggle = false;
// let chosenOperation = "";
// let result;
// let wasRun = false;
// let usedDecimal = false;

// //basic calc functions
// function add (a, b){
//     return a+b;
// }

// function substract (a, b){
//     return a-b;
// }

// function multiply (a, b){
//     return a*b;
// }

// function divide (a, b){
//     return a/b;
// }

// //display selectors + default values
// let currentDisplay = document.querySelector("p.current");
// currentDisplay.textContent = "0";

// let equationDisplay = document.querySelector("p.equation");
// equationDisplay.textContent = "0";

// //listeners for input number buttons
// const numberButtons = document.querySelectorAll("button.number");

// numberButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         if (wasRun == false) {
//             appendNumber(button.textContent);
//         } else { //allows calculator to run again after being run when any number is clicked
//             reset();
//             appendNumber(button.textContent);
//         }

//     });
// })

// //ads clicked number to display
// function appendNumber(number) {
//     //conditional prevents ex. 05 from showing when 5 is clicked
//     if (currentDisplay.textContent == 0 && usedDecimal == false) {
//         currentDisplay.textContent = "";
//     }
//     currentDisplay.textContent = currentDisplay.textContent + number;
// }

// //listener for clear button
// const C = document.querySelector("button.C");
// C.addEventListener("click", reset);

// //adds listener to each operator button that saves first number when operator is chosen
// //and shows equation on equationDisplay
// const operatorButtons = document.querySelectorAll("button.operator");

// operatorButtons.forEach((button) => 
//     button.addEventListener("click", () => {
//         if (firstNumberToggle == false && currentDisplay.textContent.slice(-1) != "."){
//             chosenOperation = button.textContent;

//             firstNumber = currentDisplay.textContent;
//             equationDisplay.textContent = `${firstNumber} ${chosenOperation}`;
            
//             currentDisplay.textContent = "0";
//             console.log(firstNumber);

//             firstNumberToggle = true;
//             usedDecimal = false;
//         } else if (firstNumberToggle == false && currentDisplay.textContent.slice(-1) == ".") {
//             chosenOperation = button.textContent;

//             firstNumber = currentDisplay.textContent.slice(0, -1);
//             equationDisplay.textContent = `${firstNumber} ${chosenOperation}`;
            
//             currentDisplay.textContent = "0";
//             console.log(firstNumber);

//             firstNumberToggle = true;
//             usedDecimal = false;
//         }


//         // if (currentDisplay.textContent != "0."){
//         // chosenOperation = button.textContent;
        
//         //     // else if (firstNumberToggle == false && currentDisplay.textContent.slice(-1) == ".") {
//         //     //     //deletes decimal if no value is added after it
//         //     //     firstNumber = currentDisplay.textContent.slice(0, -1);
//         //     //     equationDisplay.textContent = `${firstNumber} ${chosenOperation}`;
                
//         //     //     currentDisplay.textContent = "0";
//         //     //     console.log(firstNumber);
//         //     }
//         // firstNumberToggle = true;
//         // usedDecimal = false;
//     // }

    
// }))

// //sets all values to default in order to run a new calculation
// function reset() {
//     firstNumber = 0;
//     secondNumber = 0;
//     currentDisplay.textContent = "0";
//     firstNumberToggle = false;
//     secondNumberToggle = false;
//     chosenOperation = "";
//     wasRun = false;
//     usedDecimal = false;
//     equationDisplay.textContent = "0";
// }

// //allows usage of a decimal, var usedDecimal prevents more than one decimal being added
// const decimal = document.querySelector("button.decimal");
// decimal.addEventListener("click", () => {
//     if (usedDecimal == false && currentDisplay.textContent != "0") {
//         appendNumber(decimal.textContent);
//         usedDecimal = true;
//     } 
//     else if (usedDecimal == false && currentDisplay.textContent == "0") {
//         appendNumber(`0${decimal.textContent}`);
//         usedDecimal = true;
//     }

// })

// //runs chosen calculation when "=" button is clicked. 
// const sumButton = document.querySelector("button.sum");

// sumButton.addEventListener("click", () => {
    
//     if (firstNumberToggle == true && secondNumberToggle == false && currentDisplay.textContent.slice(-1) != ".") {
//         secondNumber = currentDisplay.textContent;
//         equationDisplay.textContent = `${firstNumber} ${chosenOperation} ${secondNumber}`;
//         // currentDisplay.textContent = "0";
//         console.log(secondNumber);
//         secondNumberToggle = true;

//         switch (chosenOperation) {
//             case "+":
//                 currentDisplay.textContent = (add(Number(firstNumber), Number(secondNumber)));
//                 break;
//             case "-":
//                 currentDisplay.textContent = (substract(Number(firstNumber), Number(secondNumber)));
//                 break;
//             case "/":
//                 result = (divide(Number(firstNumber), Number(secondNumber)));
//                 if (typeof(result) == Number) {
//                     currentDisplay.textContent = result;
//                 } else {//to prevent value 'infinity' when users divide by 0
//                     currentDisplay.textContent = "Error. Don't divide by 0 lol";
//                 }
//                 break;
//             case "X":
//                 currentDisplay.textContent = (multiply(Number(firstNumber), Number(secondNumber)));
//                 break;
//         }
        
//         //prevents adding value to calculation result
//         wasRun = true;
//         //prevents adding decimal to calculation result
//         usedDecimal = true;
//     }

// })

// //live clock for top bar
// let now = new Date();
// let hours = now.getHours();
// let minutes = now.getMinutes();

// if (hours < 10) {
//     hours = "0" + hours;
// }

// if (minutes < 10){
//     minutes = "0" + minutes;
// }

// const clock = document.querySelector("p.clock");
// clock.textContent = `${hours}:${minutes}`;

// // to add:
// // continue calculation after first calc, ex 1+2=3 -2=1



