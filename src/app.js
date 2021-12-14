const input = document.getElementById('inputField');
let alreadyClickedOperator = false;

document.querySelector('.digits').addEventListener('click', onClick);

function onClick(ev) {
    if (ev.target.tagName == 'BUTTON') {
        if (ev.target.textContent == 'C') {
            input.value = '';
        }
        else {
            input.value += ev.target.textContent;
        }
    }
}