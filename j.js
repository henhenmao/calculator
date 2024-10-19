let n1 = "";
let n2 = "";
let first = true; // used as a selector - true = n1, false = n2
let operation = "";
let result;
let digit;
let justEquals = false;


const display = document.querySelector("#display")

// linking each button to its corresponding function
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("number")) {
            numberClick(button.textContent);
        } else if (button.classList.contains("operator")) {
            operatorClick(button.textContent);
        } else if (button.classList.contains("equals")) {
            equalsClick();
        } else if (button.classList.contains("reset")) {
            resetClick();
        } else if (button.classList.contains("dot")) {
            dotClick();
        } else if (button.classList.contains("sign")) {
            signClick();
        } else if (button.classList.contains("delete")) {
            clickDelete();
        }
    })
});

function numberClick(n) {
    if (justEquals) { // start new equation if equals has just been pressed
        resetClick();
        justEquals = false;
    }
    if (!operation) {
        n1 += n;
    } else {
        n2 += n;
    }
    addDisplay(n);
}


function operatorClick(operator) {
    if (n1 != "" && n2 != "" && operation != "") { // chaining operators kind of
        equalsClick();
    }
    if (!operation) {
        operation = operator;
        first = false;
        addDisplay(operation);
        justEquals = false;
    }
}

function equalsClick() {
    if (n1 === "" || n2 === "" || operation === "") {}
    else {
        result = operate(Number(n1), Number(n2), operation);
        n1 = result;
        n2 = "";
        operation = "";
        setDisplay(result);
        justEquals = true;
    }
}

function resetClick() {
    n1 = "";
    n2 = "";
    first = true;
    operation = "";
    clearDisplay();
}


function dotClick() {
    if (first) {
        if (!n1.includes(".")) {
            n1 += ".";
            addDisplay(".");
        }
    } else {
        if (!n2.includes(".")) {
            n2 += ".";
            addDisplay(".");
        }
    }
}

function signClick() {
    if (justEquals) {
        resetClick();
        justEquals = false;
        return;
    }
    if (first) {
        if (n1 == "") {
            n1 += "-";
            addDisplay("-")
        }
    } else {
        if (operation && n2 == "") {
            n2 += "-";
            addDisplay("-");
        }
    }
}

function clickDelete() {
    if (justEquals) {
        resetClick();
        justEquals = false;
        return;
    }
    if (!operation && n2 == "") { // currently selecting n1
        n1 = n1.substring(0, n1.length - 1);
    } else if (n2 == "") { // currently selecting the operator
        operation = "";
    } else {
        n2 = n2.substring(0, n2.length - 1);
    }
    deleteDisplay();

}


function operate(n1, n2, operation) {
    if (operation == "÷" && n2 == 0) {
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

function deleteDisplay() {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
}

function clearDisplay() {
    display.textContent = "";
}
