const button = document.getElementById('randomButton');

// Generate random CSS values for shapes
function getRandomShape() {
    const borderRadius = `${Math.random() * 50}% ${Math.random() * 50}% ${Math.random() * 50}% ${Math.random() * 50}%`;
    const width = `${Math.floor(Math.random() * 150 + 50)}px`;
    const height = `${Math.floor(Math.random() * 150 + 50)}px`;

    return { borderRadius, width, height };
}

// Apply random shape on click
button.addEventListener('click', () => {
    const { borderRadius, width, height } = getRandomShape();
    button.style.borderRadius = borderRadius;
    button.style.width = width;
    button.style.height = height;
});
