var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;



function increment() {
    if (currentNumber < 10) {
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber > 0) {
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

var btnAdicionar = document.querySelector('button[name="adicionar"]');
var btnSubtrair = document.querySelector('button[name="subtrair"]');

btnAdicionar.addEventListener('click', increment);
btnSubtrair.addEventListener('click', decrement);


