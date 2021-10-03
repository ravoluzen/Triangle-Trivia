const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit");
const result = document.querySelector("#result");

const correctAnswers = ["90", "1"];

const calculateScore = () => {
  let score = 0;
  let index = 0;
  const quesResults = new FormData(quizForm);

  for (let value of quesResults.values()) {
    if (value === correctAnswers[index]) {
      score += 1;
    }
    index += 1;
  }

  result.innerText = `Your score is ` + score;
};

submitButton.addEventListener("click", calculateScore);