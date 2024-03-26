document.addEventListener('DOMContentLoaded', function() {
    let level = 1;
    let operation = "addition"; // Tracks the current operation mode
    let correctAnswer;
    let wrongAnswerCount = 0; // Initialize a counter for consecutive wrong answers

    correctAnswer = generateEquation(); // Initial call to set the first question

    function generateEquation() {
        let num1, num2;
        switch (level) {
            case 1:
            case 4:
            case 7:
                num1 = Math.floor(Math.random() * 11);
                num2 = Math.floor(Math.random() * 11);
                break;
            case 2:
            case 5:
            case 8:
                num1 = Math.floor(Math.random() * 11);
                num2 = Math.floor(Math.random() * 101);
                break;
            case 3:
            case 6:
            case 9:
                num1 = Math.floor(Math.random() * 101);
                num2 = Math.floor(Math.random() * 101);
                break;
            case 10:
                num2 = Math.floor(Math.random() * 9) + 2;
                let multiplier = Math.floor(Math.random() * 10) + 1;
                num1 = num2 * multiplier;
                break;
            default:
                num1 = Math.floor(Math.random() * 101);
                num2 = Math.floor(Math.random() * 101);
        }

        let questionText = `What is ${num1} + ${num2}?`; // Default question format for addition
        switch (operation) {
            case "subtraction":
                if (num1 < num2) [num1, num2] = [num2, num1];
                questionText = `What is ${num1} - ${num2}?`;
                break;
            case "multiplication":
                questionText = `What is ${num1} * ${num2}?`;
                break;
            case "division":
                questionText = `What is ${num1} / ${num2}?`;
                break;
        }

        document.getElementById("question").innerText = questionText;

        switch (operation) {
            case "addition":
                return num1 + num2;
            case "subtraction":
                return num1 - num2;
            case "multiplication":
                return num1 * num2;
            case "division":
                return num1 / num2;
            default:
                return num1 + num2; // Default to addition if something goes wrong
        }
    }

    // Function to handle user input
    function handleUserInput(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    }

    // Add event listener for Enter key press
    document.getElementById("answer").addEventListener("keypress", handleUserInput);

    window.checkAnswer = function() {
        const userAnswer = parseInt(document.getElementById("answer").value, 10);
        if (userAnswer === correctAnswer) {
            alert("Correct!");
            wrongAnswerCount = 0; // Reset the counter on a correct answer
    
            // Check for level transitions and notify the user
            if (level === 3 && operation === "addition") {
                alert("Congratulations! Now starting subtraction.");
                operation = "subtraction";
                level = 4; // Adjust to your levels for subtraction
            } else if (level === 6 && operation === "subtraction") {
                alert("Great job! Now starting multiplication.");
                operation = "multiplication";
                level = 7; // Adjust to your levels for multiplication
            } else if (level === 9 && operation === "multiplication") {
                alert("Fantastic! Now starting division.");
                operation = "division";
                level = 10; // Adjust to your levels for division
            } else if (level === 10 && operation === "division") {
                alert("Congratulations! You've completed all levels.");
                showRestartButton();
                return; // Prevent generating a new equation and clear the question
            } else {
                level++;
            }
        } else {
            alert("Incorrect! Try another equation.");
            wrongAnswerCount++;
            if (wrongAnswerCount >= 3) {
                if (level > 1) {
                    level--;
                    wrongAnswerCount = 0; // Reset the counter after decreasing the level
                    alert("Too many incorrect answers. Moving back a level.");
                } else {
                    alert("Try again! You're still at level 1.");
                }
            }
        }
        correctAnswer = generateEquation();
        document.getElementById("answer").value = ""; // Clear input
    };
    
    function showRestartButton() {
        const restartBtn = document.createElement("button");
        restartBtn.innerText = "Restart Game";
        restartBtn.onclick = function() { window.location.reload(); }; // Changed to reload the current page
        document.body.appendChild(restartBtn);
    
        // Hide the question and answer input when showing the restart button
        document.getElementById("question").style.display = "none";
        document.getElementById("answer").style.display = "none";
        // Assuming you have a submit button, hide it as well
        if (document.getElementById("submit")) {
            document.getElementById("submit").style.display = "none";
        }
    }
})
