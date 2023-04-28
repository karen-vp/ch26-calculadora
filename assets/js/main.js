
const displayLatestValue=document.getElementById('latest-value');
const displayActualValue=document.getElementById('actual-value');
const buttonsNumber = document.querySelectorAll('.btn-number');
const buttonsOperator = document.querySelectorAll('.btn-operator');

const displayer = new Display(displayLatestValue, displayActualValue);

buttonsNumber.forEach(button=>{
    button.addEventListener('click', ()=>{
        displayer.addNumber(button.innerHTML);
    });
});

buttonsOperator.forEach(button=>{
    button.addEventListener('click',()=>{
        displayer.compute(button.value);
    });
});