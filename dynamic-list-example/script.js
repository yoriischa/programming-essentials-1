// Selecting DOM elements
const addItemButton = document.getElementById('addItemButton');
const removeItemButton = document.getElementById('removeItemButton');
const highlightItemsButton = document.getElementById('highlightItemsButton');
const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');

// Add Item to List
addItemButton.addEventListener('click', function() {
    const newItemText = itemInput.value;
    if (newItemText !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);
        itemInput.value = '';  // Clear input after adding
    } else {
        alert('Please enter a valid item.');
    }
});

// Remove Last Item from List
removeItemButton.addEventListener('click', function() {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem);
    } else {
        alert('No more items to remove.');
    }
});

// Highlight All Items
highlightItemsButton.addEventListener('click', function() {
    const items = itemList.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('highlight');
    }
});
