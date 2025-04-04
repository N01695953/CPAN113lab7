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
    console.log(`Key released: ${event.key}`);
    if(event.key === 'Enter') {
        console.log('Enter key  released.');
    }
});
