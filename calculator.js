"use strict";
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const result = document.getElementById("result");
function add() {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);
    result.textContent = `Result: ${num1 + num2}`;
    result.style.color = `green`;
}
function subtract() {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);
    result.textContent = `Result: ${num1 - num2}`;
    result.style.color = `purple`;
}
function multiply() {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);
    result.textContent = `Result: ${num1 * num2}`;
    result.style.color = `blue`;
}
function divide() {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);
    if (num2 === 0) {
        result.textContent = `cannot devide by 0`;
    }
    else {
        result.textContent = `Result: ${num1 / num2}`;
        result.style.color = `orange`;
    }
}
document.getElementById("btnAdd").addEventListener("click", add);
document.getElementById("btnSubtract").addEventListener("click", subtract);
document.getElementById("btnMultiply").addEventListener("click", multiply);
document.getElementById("btnDivide").addEventListener("click", divide);
