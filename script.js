// script.js

// Example: Add interactivity to hover over links
document.querySelectorAll('li').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#000'; // Black highlight on hover
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '#666'; // Return to grey
    });
});
