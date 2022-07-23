const input = document.querySelector('.input');
const allButtons = document.querySelectorAll('.button')
const output =  document.querySelector('.output');
let result = '';
let num1;
let num2;
let value = '';

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
    value = e.target.dataset.value
    input.innerText += value;
    result += value;
    console.log(result);
    if (result.includes(".")){
        document.getElementById("dot").disabled = true;
    }
    if(button.id === 'del') {
        input.innerText = input.innerText.slice(0, -1);
    }
    if(button.id === 'equals') {
     if (result.includes("+")) {
        const split = input.innerText.split('+');
        num1 = parseFloat(split[0]);
        num2 = parseFloat(split[1]);
        add(num1,num2);
     }
     else if(result.includes("-")) {
        const split = input.innerText.split('-');
        num1 = parseFloat(split[0]);
        num2 = parseFloat(split[1]);
        subtract(num1,num2);
     }
     else if(result.includes("/")) {
        const split = input.innerText.split('/');
        num1 = parseFloat(split[0]);
        num2 = parseFloat(split[1]);
        divide(num1,num2);
     }
     else if(result.includes("x")) {
        const split = input.innerText.split('x');
        num1 = parseFloat(split[0]);
        num2 = parseFloat(split[1]);
        multiply(num1,num2);
     }
     input.innerText = '';
     result = ''
     document.getElementById("dot").disabled = false;
    }
    if(value === 'clear') {
    input.innerText = '';
    result = '';
    output.innerText = '';
    }
  }
)}
)
function add(a,b) {
    let c = +a + +b;
    return output.innerText = c;
}
function subtract(a,b) {
    let c = a - b;
    return output.innerText = c;
}
function multiply(a,b) {
    let c = a * b;
    return output.innerText = c;
}
function divide(a,b) {
    if(a === 0 && b === 0){
        return output.innerText = 'Error';
    } else {
    let c = a / b;
    return output.innerText = Math.round(c * 100)/100
    }
}
