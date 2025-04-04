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

//Form events 
let form = document.getElementById('myForm');
let username = document.getElementById('username');
let status = document.getElementById('status');

// Handle form submission
form.addEventListener('submit', function(event) {
    console.log('Form submitted');
    event.preventDefault(); // Prevent the actual form submission
    alert(`Username: ${username.value}, Status: ${status.value}`);
});

// Handle changes in the select menu
status.addEventListener('change', function() {
    console.log('Selection changed to:', this.value);
});

// Handle real-time input changes in the username field
username.addEventListener('input', function() {
    console.log('Input changed: ', this.value);
});
