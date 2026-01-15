const questions = [
  {
    question: "Which planet in our solar system is known as the 'Red Planet'?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: true },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "Which is the only continent that has land in all four hemispheres?",
    answers: [
      { text: "South America", correct: false },
      { text: "Africa", correct: true },
      { text: "Asia", correct: false },
      { text: "Australia", correct: false }
    ]
  },
  {
    question: "Which is the full meaning of the acronym 'URL' as regards technology?",
    answers: [
      { text: "Universal Resource Link", correct: false },
      { text: "United Radio Locator", correct: false },
      { text: "Uniform Resource Locator", correct: true },
      { text: "Unique Routing Line", correct: false }
    ]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Quartz", correct: false }
    ]
  },
  {
    question: "Which of these animals is the only mammal naturally capable of true flight?",
    answers: [
      { text: "Flying Squirrel", correct: false },
      { text: "Sugar Glider", correct: false },
      { text: "Bat", correct: true },
      { text: "Colugo", correct: false }
    ]
  }
];

const questionElement = document.getElementById('question');
const ansBtn = document.getElementById('ans-btns');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {

  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();

}

function showQuestion() {

  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansBtn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  })

}

function resetState() {
  nextBtn.style.display = "none";
  while (ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  };
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct")
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz()
  }
})
startQuiz()