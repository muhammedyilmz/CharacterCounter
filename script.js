const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');
updateCounter();
updateRemaining();
textareaEl.addEventListener('keyup', () => {
    updateCounter();
    updateRemaining();
});
function updateCounter() {
    totalCounterEl.innerText =  textareaEl.value.length;
};
function updateRemaining () {
    remainingCounterEl.innerText = textareaEl.getAttribute('maxlength') 
     - textareaEl.value.length;
};