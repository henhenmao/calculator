let n1 = "";
let n2 = "";
let first = true; // used as a selector - true = n1, false = n2
let operation = "";
let result;
let digit;


const display = document.querySelector("#display")

// linking each button to its corresponding function
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("number")) {
            numberClick(button.textContent);
        }
        if (button.classList.contains("operator")) {
            operatorClick(button.textContent);
        }
        if (button.classList.contains("equals")) {
            equalsClick();
        }
        if (button.classList.contains("reset")) {
            resetClick();
        }
    })
});

function numberClick(n) {
    if (!operation) {
        n1 += n;
        console.log(`n1: ${n1}`);
    } else {
        n2 += n;
        console.log(`n2: ${n2}`);
    }
    addDisplay(n);
}


function operatorClick(operator) {
    operation = operator;
    first = false;
    addDisplay(operation);
}

function equalsClick() {
    if (!n1 || !n2 || !operation) { }
    else {
        result = operate(Number(n1), Number(n2), operation);
        n1 = result;
        n2 = "";
        operation = "";
        setDisplay(result);
        first = true;
    }
}

function resetClick() {
    n1 = "";
    n2 = "";
    first = true;
    operation = "";
    clearDisplay();
}


function operate(n1, n2, operation) {
    if (operation == "÷" && n2 == 0) { // closes the tab if divudes by zero
        window.close();
    }
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

function setDisplay(s) {
    display.textContent = s;
}

function addDisplay(s) {
    display.textContent += s;
}

function clearDisplay() {
    display.textContent = "";
}