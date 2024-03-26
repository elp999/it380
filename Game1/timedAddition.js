// Function to generate a random integer within a range
//document.getElementById('question').innerText = generateEquation().equation;
var globalEquation;
displayEquation();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate a random equation
  function generateEquation() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    let operand1, operand2, result;
  
    // Ensure the division operation results in a whole number
    do {
      operand1 = getRandomInt(1, 20);
      operand2 = getRandomInt(1, 20);
      if (operator === '/') {
        result = operand1 / operand2;
      } else {
        result = eval(`${operand1} ${operator} ${operand2}`);
      }
    } while (operator === '/' && !Number.isInteger(result));
  
    // Construct the equation string
    let equation = `${operand1} ${operator} ${operand2}`;
  
    return {
      equation: equation,
      solution: result
    };
  }
  
  // Function to display a random equation on the HTML page
  function displayEquation() {
    const equationContainer = document.getElementById('question');
    const equation = generateEquation();
    equationContainer.textContent = `Equation: ${equation.equation}`;
    globalEquation = equation;
    return equation;
  }
  
  // Function to check the user's answer
  correctAnswers = 0;
  function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value, 10);
    
    console.log(globalEquation.solution, typeof globalEquation);
  
    if (isNaN(userAnswer)) {
      alert('Please enter a valid number.');
    }
    if (userAnswer === globalEquation.solution) {
      correctAnswers++;
      document.getElementById('score').textContent = `Correct Answers: ${correctAnswers}`;
      alert('Correct!');

    }
    if (userAnswer !== globalEquation.solution) {
      alert('Incorrect!');
    }
    displayEquation();
    document.getElementById("answer").value = ""; // Clear input
  } 

  function handleUserInput(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
}

document.getElementById("answer").addEventListener("keypress", handleUserInput);

