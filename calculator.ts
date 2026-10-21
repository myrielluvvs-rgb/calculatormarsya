
const firstNumber = document.getElementById("firstNumber") as HTMLInputElement;
const secondNumber = document.getElementById("secondNumber") as HTMLInputElement;
const result = document.getElementById("result") as HTMLElement;

function add(): void {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);
    result.textContent = `Result: ${num1 + num2}`;
    result.style.color = `green`;
}

function subtract(): void {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);
    result.textContent = `Result: ${num1 - num2}`
    result.style.color = `purple`;
}

function multiply(): void {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);
    result.textContent = `Result: ${num1 * num2}`;
    result.style.color = `blue`;
}

function divide(): void {
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

document.getElementById("btnAdd")!.addEventListener("click", add);
document.getElementById("btnSubtract")!.addEventListener("click", subtract);
document.getElementById("btnMultiply")!.addEventListener("click", multiply);
document.getElementById("btnDivide")!.addEventListener("click", divide);
