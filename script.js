// Mouse Events
let mouseButton = document.getElementById('mouseButton');
let mouseMessage = document.getElementById('mouseMessage');

mouseButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = 'Mouse is over the button!';
});

mouseButton.addEventListener('mouseout', () => {
    mouseMessage.textContent = 'Mouse has left the button!';
});