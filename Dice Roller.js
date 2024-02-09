/*
program start ->
creates variables for the input fields and result value
*/
const amount = document.getElementById("amount-el");
const sides = document.getElementById("sides-el");
const result = document.getElementById("result-el");

/*
program start ->
---fetches local storage key/values 
---updates input fields and result value
*/
amount.value = localStorage.getItem("amount")
sides.value = localStorage.getItem("sides")
result.textContent = localStorage.getItem("result")

/*
ROLL BUTTON: 
on click -> 
---executes diceRoller() 
---modifies result text
---stores field and result data in local storage
*/
document.getElementById("roll-button").addEventListener("click", function () {
    let amountEl = document.getElementById("amount-el");
    let sidesEl = document.getElementById("sides-el");
    result.textContent = "Result: " + diceRoller(amountEl.value, sidesEl.value);
    localStorage.setItem("amount", amountEl.value);
    localStorage.setItem("sides", sidesEl.value);
    localStorage.setItem("result", result.textContent);
});

/*
called by ROLL BUTTON ->
rolls dice and returns the summed value
*/
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

/*
CLEAR BUTTON: 
on click -> 
---clears input fields, result value, and local storage key/values
*/
document.getElementById("clear-button").addEventListener("click", function() {
    amount.value = null;
    sides.value = null;
    result.textContent = "Result:";
    localStorage.setItem("amount", amount.value);
    localStorage.setItem("sides", sides.value);
    localStorage.setItem("result", result.textContent);
});