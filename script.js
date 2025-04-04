// Mouse Events
let mouseButton = document.getElementById('mouseButton');
let mouseMessage = document.getElementById('mouseMessage');

mouseButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = 'Mouse is over the button!';
});

mouseButton.addEventListener('mouseout', () => {
    mouseMessage.textContent = 'Mouse has left the button!';
});

//Keyboard Events
let keyboardInput = document.getElementById('keyboardInput');
let keyMessage = document.getElementById('keyMessage');

keyboardInput.addEventListener('keyup', function(event) {
    keyMessage.textContent = `Last key pressed: ${event.key}`;
});

//Form events 
let form = document.getElementById('Form');
let formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Form submitted successfully!';
});

//Focus and Blur events
let focusInput = document.getElementById('focusInput');
let focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = 'Input field is focused!';
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'Input field lost focus!';
});

//Event Delegation
let buttonContainer = document.getElementById('buttonContainer');
let delegationMessage = document.getElementById('delegationMessage');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('delegatedButton')) {
        delegationMessage.textContent = `You clicked: ${event.target.textContent}`;
    }
})