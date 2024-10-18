let n1;
let n2;
let operation;
let result;

// all selectors for each of the the buttons
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const reset = document.querySelector("#reset");

// making the numbers work
numbers.forEach((n) => {
    n.addEventListener("click", e => {
        display.textContent += e.target.innerHTML;
    });
});
// learning how to use target and innerhtml 
// numbers.addEventListener("click", e => {
//     const target = e.target;
//     const value = Number(target.innerHTML);
//     console.log(value + 100);
//     console.log(typeof value);
// });


// making the reset button reset things
reset.addEventListener("click", () => {
    console.log("hellow rodl!");
    display.textContent = "";
    n1 = null;
    n2 = null;
});


// making operator functions work kind of
console.log(operators);
operators.forEach((n) => {
    console.log(n.textContent);
    n.addEventListener("click", () => {
        display.textContent += n.textContent;
    });
});


// operation functions
function operate(n1, n2, operation) {
    if (operation == "add") {
        alert("add")
    } else if (operation == "subtract") {
        alert("subtrack")
    } else if (operation == "multiply") {
        alert("multiply  burrton")
    } else if (operation == "divide") {
        alert("divide")
    } else {
        alert("operation did not work")
    }
}