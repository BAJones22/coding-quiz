// Questions/Answers List
var questionList = [
  {
    questionText: "Commonly used data types do NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },

  {
    questionText: "The condition in an if/else statement is enclosed with:",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis",
  },

  {
    questionText: "Arrays in JavaScript can be used to store:",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },

  {
    questionText:
      "When being assigned to variables, string values must be enclosed within:",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },

  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
];

var questionTextElement = document.getElementById("question-text");
var choicesContainerElement = document.getElementById("choices-container");
var questionContainerElement = document.getElementById("question-container");
var answerContainerElement = document.getElementById("answer-container");
var resetButton = document.getElementById("reset");

function resetQuiz() {
  currentQuestionIndex = 0;
  seconds = 60;
  clearInterval(timer);
  document.getElementById("timer").innerHTML = "1:00";
  updateQuestion(currentQuestionIndex);
}

function main() {
  function updateQuestion(index) {
    questionTextElement.textContent = questionList[index].questionText;
    answerContainerElement.innerHTML = "";
    for (var i = 0; i < questionList[index].choices.length; i++) {
      var newChoiceButton = document.createElement("button");
      newChoiceButton.textContent = questionList[index].choices[i];
      answerContainerElement.appendChild(newChoiceButton);
      newChoiceButton.addEventListener("click", handleButtonClick);
    }
  }

  // Initialize the quiz
  var currentQuestionIndex = 0;
  updateQuestion(currentQuestionIndex);

  function handleButtonClick(event) {
    var userAnswer = event.target.textContent;
    var correctAnswer = questionList[currentQuestionIndex].correctAnswer;
    if (userAnswer === correctAnswer) {
    } else {
      seconds -= 10; // deduct 10 seconds from the timer
    }
    currentQuestionIndex++;
  
    if (currentQuestionIndex === questionList.length || seconds === 0) {
      console.log("Quiz complete!");
      clearInterval(timer); // stop the timer when the quiz is complete
      var finalScore = seconds;
      var initials = prompt(
        "Quiz Complete! Your final score is " +
          finalScore +
          ". Please enter your initials for the high score list."
      );
      if (initials) {
        // save the high score with the initials
        console.log("High score saved: " + initials + " - " + finalScore);
      }
      currentQuestionIndex = 0;
      seconds = 60; // reset the timer to 60 seconds
      document.getElementById("timer").innerHTML = "1:00"; // reset the timer display
      updateQuestion(currentQuestionIndex); // reset the quiz
      window.location.href = "index.html"; // redirect to the start page
    } else {
      updateQuestion(currentQuestionIndex);
    }
  }
  

  // Attach event listeners to the answer buttons
  var answerButtons = answerContainerElement.querySelectorAll("button");
  answerButtons.forEach(function (button) {
    button.addEventListener("click", handleButtonClick);
  });

  // Add a loop to create buttons for each question in the list
  var questionButtonContainer = document.getElementById(
    "question-button-container"
  );
  questionList.forEach(function (question, index) {
    var newQuestionButton = document.createElement("button");
    newQuestionButton.textContent = "Question " + (index + 1);
    newQuestionButton.addEventListener("click", function () {
      currentQuestionIndex = index;
      updateQuestion(currentQuestionIndex);
    });
  });
}

let container = document.querySelector("#container");

// Set timer
var seconds = 60;
var timer;
function myFunction() {
  if (seconds < 60) {
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timer);
  }
}

document.getElementById("start").onclick = function () {
  if (!timer) {
    timer = window.setInterval(function () {
      myFunction();
    }, 1000);
  }
  main();
};

document.getElementById("timer").innerHTML = "1:00";

start.addEventListener("click", () => {
  start.style.display = "none";
  container.style.display = "none";
});
