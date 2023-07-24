const textareaEl = document.getElementById('textarea');

const totalCounterEl = document.getElementById('total-counter');

const remainingCounterEl = document.getElementById('remaining-counter');

updateCounter();
updateRemaining();

//keyboard click to counter chnage
textareaEl.addEventListener('keyup', () => {

    updateCounter();
    updateRemaining();
});

//total character counting
function updateCounter() {

    totalCounterEl.innerText =  textareaEl.value.length;
};

//remainder character counting
function updateRemaining () {

    remainingCounterEl.innerText = textareaEl.getAttribute('maxlength') 
     - textareaEl.value.length;
};