let n1 = "";
let n2 = "";
let target = 0;
let pressedOperation = false; // indicates beginning of n2
let operation = "";
let result;
let digit;
let justEquals = false;


// all selectors for each of the the buttons
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const resetButton = document.querySelector("#reset");
const equalsButton = document.querySelector("#equals");
const dotButton = document.querySelector("#dot");
const deleteButton = document.querySelector("#delete")


// making the numbers work
numbers.forEach((n) => {
    n.addEventListener("click", e => {
        if (justEquals) {
            reset();
        }
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
resetButton.addEventListener("click", reset);


// making operator functions work kind of
operators.forEach((n) => {
    n.addEventListener("click", () => {
        if (operation && !n2) {
            display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        }
        if (!n1) { // do nothing if a number hasn't been presse dyet
        } else {
            if (n1 && n2 && operation) { // if both numbers and operation have been set then calculate (alternate equals)
                equals();
            }
            // n.classList.toggle("buttonSelect");
            justEquals = false;
            display.textContent += n.textContent;
            operation = n.textContent; // setting tyoe of operation to perform
            pressedOperation = true; // allows for n2 to take over
        }
    });
});


// m aking the equals button work properly
equalsButton.addEventListener("click", () => {
    equals();
});

// making the dot button work properly
dotButton.addEventListener("click", () => {
    alert("i don't know how to implement decimal numbers");
});



// making delet butotn work
deleteButton.addEventListener("click", () => {
    if (justEquals) {
        reset();
    } else {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
        if (pressedOperation) {
            n2 = n2.substring(0, n2.length - 1);
        } else {
            n1 = n1.substring(0, n1.length - 1);
        }
    }
});

function equals() {
    if (!n1 || !n2 || !operation) { }
    else {
        result = operate(Number(n1), Number(n2), operation); // uses n1 n2 and operator
        n1 = result;
        n2 = "";
        operation = ""
        display.textContent = result;
        justEquals = true;
    }

}

function reset() {
    display.textContent = "";
    n1 = "";
    n2 = "";
    operation = null;
    pressedOperation = false;
    justEquals = false;
}


// operation functions
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