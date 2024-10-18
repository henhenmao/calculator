let n1 = "";
let n2 = "";
let pressedOperation = false; // indicates beginning of n2
let operation;
let result;
let digit;

// all selectors for each of the the buttons
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const reset = document.querySelector("#reset");
const equals = document.querySelector("#equals");

// making the numbers work
numbers.forEach((n) => {
    n.addEventListener("click", e => {
        digit = e.target.innerHTML
        display.textContent += digit;
        if (!pressedOperation) {
            n1 += digit;
            console.log(`n1: ${n1}`);
        } else {
            n2 += digit;
            console.log(`n2: ${n2}`);
        }
    });
});
// learning how to use target and innerhtml and converting to Numbers
// numbers.addEventListener("click", e => {
//     const target = e.target;
//     const value = Number(target.innerHTML);
//     console.log(value + 100);
//     console.log(typeof value);
// });


// making the reset button reset things
reset.addEventListener("click", resetValues);


// making operator functions work kind of
operators.forEach((n) => {
    n.addEventListener("click", () => {
        display.textContent += n.textContent;
        operation = n.textContent; // setting tyoe of operation to perform
        pressedOperation = true; // allows for n2 to take over
    });
});


//m aking the equals buttons work properly
equals.addEventListener("click", () => {
    result = operate(Number(n1), Number(n2), operation);
    console.log(result);
    display.textContent = result;
});


function resetValues() {
    display.textContent = "";
    n1 = "";
    n2 = "";
    operation = null;
    pressedOperation = false;
}


// operation functions
function operate(n1, n2, operation) {
    if (operation == "+") {
        return n1 + n2;
    } else if (operation == "-") {
        return n1 - n2;
    } else if (operation == "*") {
        return n1 * n2;
    } else if (operation == "÷") {
        return n1 / n2;
    } else {
        alert("operation did not work")
    }
}