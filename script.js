const words = ["writer", "programmer"];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenWords = 2000;

function type() {
    const currentWord = words[currentWordIndex];
    if (isDeleting) {
        if (currentLetterIndex > 0) {
            currentLetterIndex--;
            typingElement.textContent = currentWord.slice(0, currentLetterIndex);
            setTimeout(type, deletingSpeed);
        } else {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    } else {
        if (currentLetterIndex < currentWord.length) {
            typingElement.textContent = currentWord.slice(0, ++currentLetterIndex);
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => { isDeleting = true; type(); }, delayBetweenWords);
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(type, typingSpeed);
});
