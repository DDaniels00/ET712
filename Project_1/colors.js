const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"]; // List of colors
let currentColor = "";
let streak = 0;

// Function to set a random color
function setRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    currentColor = colors[randomIndex]; // Update currentColor
    document.getElementById("colorBox").style.backgroundColor = currentColor; // Update box
    console.log("Current color:", currentColor); // Debug: Log the current color
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById("userInput").value.toLowerCase().trim(); // Normalize input
    
    if (userAnswer === currentColor) {
        alert("Correct!");
        streak++; // Increase streak
    } else {
        alert("Incorrect! Streak reset.");
        streak = 0; // Reset streak
    }

    document.getElementById("streakCounter").textContent = streak; // Update streak counter
    setRandomColor(); // Set a new random color
    document.getElementById("userInput").value = ""; // Clear input field
}

// Initialize the game with the first color
window.onload = setRandomColor;
