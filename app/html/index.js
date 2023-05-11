function navigateToNextRoute() {
  window.location.href = "/"; // Replace "/next-route" with the actual route you want to navigate to
}

// Get the div element where we will display the message
const messageDiv = document.getElementById('123');

// Create a new p element with the message text
const message = document.createElement('p');
message.textContent = 'Hello, World!';

// Add the message element to the div
messageDiv.appendChild(message);
