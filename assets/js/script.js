const deleteText = document.querySelector('.navigation__logo');
const text = deleteText.textContent;
let count = 0;
let index = 0;
let currentText = '';
let interval = setInterval(() => {
    if (index < text.length) {
        currentText += text.charAt(index);
        deleteText.textContent = currentText;
        index++;
    } else {
        currentText = currentText.slice(0, -1);
        deleteText.textContent = currentText;
        count++;
    }

    if (count === text.length) {
        index = 0;
        count = 0;
    }
    
}, 600);
