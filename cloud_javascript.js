const newElement = document.createElement('div');
 // Set content and attributes
newElement.textContent = 'Hello, World!';
newElement.setAttribute('id', 'myNewElement');
newElement.style.color = 'blue';

// Find the parent element and append the new element
const parentElement = document.getElementById('parentElementId');
parentElement.appendChild(newElement);
