function rollButton() {
    let resultEl = document.getElementById("result-el") 
    let amountEl = document.getElementById("amount-el").value
    let sidesEl = document.getElementById("sides-el").value
    resultEl.textContent = "Result: " + diceRoller(amountEl,sidesEl)
}

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

}