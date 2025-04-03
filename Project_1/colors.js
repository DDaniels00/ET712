const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"]; // List of colors
let currentColor = "";
let streak = 0;

// Function to set a random color
function setRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    currentColor = colors[randomIndex];
    document.getElementById("colorBox").style.backgroundColor = currentColor;
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById("userInput").value.toLowerCase().trim();
    if (userAnswer === currentColor) {
        alert("Correct!");
        streak++;
    } else {
        alert("Incorrect!");
        streak = 0; // Reset streak on incorrect answer
    }
    document.getElementById("streakCounter").textContent = streak; // Update streak counter
    setRandomColor(); // Set new random color
    document.getElementById("userInput").value = ""; // Clear input field
}

// Initialize the game with the first color
window.onload = setRandomColor;

