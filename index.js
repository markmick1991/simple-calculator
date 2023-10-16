function add() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    let result = num1 + num2;
    document.getElementById("sum-el").textContent = "Result: " + result;
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    let result = num1 - num2;
    document.getElementById("sum-el").textContent = "Result: " + result;
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    let result = num1 / num2;
    document.getElementById("sum-el").textContent = "Result: " + result;
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    let result = num1 * num2;
    document.getElementById("sum-el").textContent = "Result: " + result;
}
