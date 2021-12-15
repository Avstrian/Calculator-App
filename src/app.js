import { equals } from './operations.js';

const input = document.getElementById('inputField');
let alreadyClickedOperator = false;
let currentNumber = ''

document.querySelector('.digits').addEventListener('click', onClick);
document.querySelector('.actionsContainer').addEventListener('click', onOperator);

function onClick(ev) {
    if (ev.target.tagName == 'BUTTON') {
        if (ev.target.textContent == 'C') {
            alreadyClickedOperator = false;
            input.value = '';
            currentNumber = '';
        }
        else if (ev.target.textContent == '.') {
            if (!currentNumber.includes('.') && currentNumber != '') {
                input.value += ev.target.textContent;
                currentNumber += ev.target.textContent
            }
        }
        else {
            input.value += ev.target.textContent;
            currentNumber += ev.target.textContent;
        }
    }
}

function onOperator(ev) {
    if (ev.target.tagName == 'BUTTON') {
        if (ev.target.textContent == '←') {
            if (input.value != '') {
                const inputValueArr = [...input.value]
                const currentNumberArr = [...currentNumber];
                let poppedChar = inputValueArr.pop();

                if (poppedChar == '+' || poppedChar == '-' || poppedChar == '*' || poppedChar == '/') {
                    alreadyClickedOperator = false;
                }


                input.value = inputValueArr.join('');
                currentNumber = currentNumberArr.join('');
            }
        }

        else if (ev.target.textContent == '=') {
            if (alreadyClickedOperator) {
                alreadyClickedOperator = false;
                input.value = equals(input.value);
                currentNumber = input.value;
            }

        }
        else {
            currentNumber = '';

            if (alreadyClickedOperator) {
                input.value = equals(input.value);
                input.value += ev.target.textContent;
            }
            else {
                input.value += ev.target.textContent;
                alreadyClickedOperator = true;
            }
        }

    }
}