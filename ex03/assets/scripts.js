let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function updateNumber() {
    currentNumberWrapper.innerHTML = currentNumber;
    currentNumberWrapper.style.color = currentNumber < 0 ? 'red' : 'black';
    btnAdicionar.disabled = currentNumber >= 10;
    btnSubtrair.disabled = currentNumber <= -10;
}

function increment() {
    if (currentNumber < 10) {
        currentNumber += 1;
        updateNumber();
    }
}

function decrement() {
    if (currentNumber > -10) {
        currentNumber -= 1;
        updateNumber();
    }
}

let btnAdicionar = document.querySelector('button[name="adicionar"]');
let btnSubtrair = document.querySelector('button[name="subtrair"]');

btnAdicionar.addEventListener('click', increment);
btnSubtrair.addEventListener('click', decrement);


updateNumber();
