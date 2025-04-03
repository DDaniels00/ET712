let streak = 0;
let correctAnswer;

// Function to generate a random math question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10); // Random number between 0-9
    const num2 = Math.floor(Math.random() * 10); // Random number between 0-9
    correctAnswer = num1 + num2;
    document.getElementById('question').innerText = `What is ${num1} + ${num2}?`;
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        streak++;
        alert("Correct!");
        document.getElementById('streak').innerText = `Streak: ${streak}`;
        generateQuestion();
    } else {
        alert("Incorrect, try again!");
    }
    document.getElementById('answer').value = ''; // Clear input field
}

// Initialize the first question and attach event listener
window.onload = function () {
    generateQuestion();
    document.getElementById('submitBtn').addEventListener('click', checkAnswer);
};

