let resultEl = document.getElementById("result-el") 

function diceRoller(amount,faces) {
    if (amount < 1) {
        return "No dice detected"
    }
    if (amount % 1 != 0 || faces % 1 !=0) {
        return "Broken dice detected"
    }
    if (amount === 1) {
        return Math.floor(Math.random() * faces) + 1
    } else {
        return Math.floor(Math.random() * faces) + 1 + diceRoller(amount - 1, faces)
    }

}

function rollButton() {
    let amountEl = document.getElementById("amount-el").value
    let facesEl = document.getElementById("faces-el").value
    resultEl.textContent = "Result: " + diceRoller(amountEl,facesEl)
}