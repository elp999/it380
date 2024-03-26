
function startTimer() {
  let count = 30;
  document.getElementById('answer').disabled = false;
  let interval = setInterval(function() {
    if (count <= 0) {
      clearInterval(interval);
      document.getElementById('timer').innerHTML = 'Time is up!';
      document.getElementById('answer').disabled = true;
    } else {
      document.getElementById('timer').innerHTML = count;
    }
    count--;
  }, 1000);
  document.getElementById('score').textContent = 'Correct Answers: 0';
}

// Add event listener to the button to start the timer
document.getElementById('startButton').addEventListener('click', startTimer);

