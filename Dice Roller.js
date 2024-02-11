// Variables for input fields and result
const amount = document.getElementById("amount-el");
const sides = document.getElementById("sides-el");
const result = document.getElementById("result-el");

// Fetch from local storage and update UI
// js:10 - If there's no previous result in localStorage, set the default text
amount.value = localStorage.getItem("amount");
sides.value = localStorage.getItem("sides");
result.textContent = localStorage.getItem("result") || "Result:";

// Roll button event: Execute dice roll, update result, and save to local storage
document.getElementById("roll-button").addEventListener("click", function () {
    result.textContent = "Result: " + diceRoller(amount.value, sides.value);
    localStorage.setItem("amount", amount.value);
    localStorage.setItem("sides", sides.value);
    localStorage.setItem("result", result.textContent);
});

// Dice roller function: Simulate rolling dice and return summed value
function diceRoller(amount,sides) {
    if (amount < 1) {
        console.log(amount)
        return "No dice detected"
    }
    if (amount % 1 != 0 || sides % 1 !=0) {
        return "Broken dice detected"
    }
    if (amount == 1) {
        return Math.floor(Math.random() * sides) + 1
    } else {
        return Math.floor(Math.random() * sides) + 1 + diceRoller(amount - 1, sides)
    }
};

// Clear button event: Clear input fields, result, and local storage
document.getElementById("clear-button").addEventListener("click", function() {
    amount.value = null;
    sides.value = null;
    result.textContent = "Result:";
    localStorage.clear();
});