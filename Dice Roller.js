let resultEl = document.getElementById("result-el");
let sides = document.getElementById("sides-el");
let amount = document.getElementById("amount-el");
resultEl.textContent = localStorage.getItem("result") || resultEl.textContent;
amount.value = localStorage.getItem("amount") || amount.value;
sides.value = localStorage.getItem("sides") || sides.value;

document.getElementById("roll-button").addEventListener("click", function rollButton() {
    let amountEl = document.getElementById("amount-el").value;
    let sidesEl = document.getElementById("sides-el").value;
    resultEl.textContent = "Result: " + diceRoller(amountEl, sidesEl);
    localStorage.setItem("result", resultEl.textContent);
    localStorage.setItem("amount", amountEl);
    localStorage.setItem("sides", sidesEl);
}
);

document.getElementById("clear-button").addEventListener("click", function clearButton() {
    let amountEl = document.getElementById("amount-el");
    let sidesEl = document.getElementById("sides-el");
    amountEl.value = null;
    sidesEl.value = null;
    resultEl.textContent = "Result:";
    localStorage.setItem("result", resultEl.textContent);
    localStorage.setItem("amount", amountEl);
    localStorage.setItem("sides", sidesEl);
}
);

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