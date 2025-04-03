function generateShape() {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    currentShape = randomShape;

    const shapeElement = document.getElementById("shape");

    // Reset styles
    shapeElement.style.border = "none";
    shapeElement.style.transform = "none";
    shapeElement.style.clipPath = "none";
    shapeElement.style.width = "150px"; // Default dimensions
    shapeElement.style.height = "150px"; // Default dimensions
    shapeElement.style.backgroundColor = "lightblue"; // Default color

    // Style shape based on type
    switch (randomShape) {
        case "circle":
            shapeElement.style.borderRadius = "50%";
            break;
        case "triangle":
            shapeElement.style.width = "0";
            shapeElement.style.height = "0";
            shapeElement.style.borderLeft = "75px solid transparent";
            shapeElement.style.borderRight = "75px solid transparent";
            shapeElement.style.borderBottom = "150px solid lightblue";
            break;
        case "rectangle":
            shapeElement.style.width = "200px";
            shapeElement.style.height = "100px";
            shapeElement.style.borderRadius = "0";
            break;
        case "rhombus":
            shapeElement.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
            break;
        case "square":
            shapeElement.style.width = "150px";
            shapeElement.style.height = "150px";
            shapeElement.style.borderRadius = "0";
            break;
        case "trapezoid":
            shapeElement.style.clipPath = "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)";
            break;
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase().trim();

    // Check if input matches a valid shape
    if (!shapes.includes(userAnswer)) {
        alert("Please enter a valid shape: circle, triangle, rectangle, rhombus, square, or trapezoid.");
        return;
    }

    if (userAnswer === currentShape) {
        alert("Correct!");
        streak++;
        document.getElementById("streak-counter").textContent = streak;
        generateShape();
    } else {
        alert("Incorrect! Streak reset.");
        streak = 0;
        document.getElementById("streak-counter").textContent = streak;
    }
}
