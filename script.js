
const questions = [
  {
    question: "Какое количество планет в Солнечной системе?",
    options: ["8", "9", "10", "11"],
    correctAnswer: "8"
  },
  {
    question: "Какое животное является символом США?",
    options: ["Орёл", "Буйвол", "Медведь", "Лев"],
    correctAnswer: "Орёл"
  },
  {
    question: "Кто написал роман 'Война и мир'?",
    options: ["Александр Пушкин", "Лев Толстой", "Фёдор Достоевский", "Иван Тургенев"],
    correctAnswer: "Лев Толстой"
  },
  {
    question: "Какая страна производит больше всего кофе в мире?",
    options: ["Колумбия", "Индонезия", "Бразилия", "Вьетнам"],
    correctAnswer: "Бразилия"
  }
  
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");

  const currentQuestionObj = questions[currentQuestion];
  questionText.textContent = currentQuestionObj.question;

  optionsContainer.innerHTML = "";

  currentQuestionObj.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", checkAnswer);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestionObj = questions[currentQuestion];

  if (selectedAnswer === currentQuestionObj.correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {

    displayResults();
  }
}

function displayResults() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  const resultText = document.createElement("h2");
  resultText.textContent = `Вы набрали ${score} из ${questions.length} правильных ответов.`;
  quizContainer.appendChild(resultText);
}

displayQuestion();
