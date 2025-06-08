let correctQuestionsNum = 0;
let questionsAnsweredNum = 0;
let answered = [];

const onQuestionNumbering = () => {
  const questions = document.querySelectorAll(".test-item-heading");
  questions.forEach((element, index) => {
    const question = element.querySelector("span");
    question.innerText = index + 1 + ". " + question.innerText;
  });
};
onQuestionNumbering();

const handleQuestionList = () => {
  const questions = document.querySelectorAll(".test-item-list");
  questions.forEach((element, index) => {
    const liElements = element.querySelectorAll("li");
    liElements.forEach((li) => {
      const strongElement = li.querySelector("strong");
      li.classList.add("question-item");
      li.style.cursor = "pointer";
      li.setAttribute("question-index", index);
      if (strongElement) {
        li.innerHTML = strongElement.innerHTML;
        li.classList.add("question-item-anser");
      }
    });
  });
};
handleQuestionList();

const handleAnser = (element) => {
  const questionIndex = element.getAttribute("question-index");
  if (questionIndex) {
    if (answered[questionIndex]) return;
    answered[questionIndex] = true;
    questionsAnsweredNum += 1;
    element.style.fontWeight = "bold";
    const correctly = element.classList.contains("question-item-anser");
    if (correctly) {
      correctQuestionsNum += 1;
    }
    onUpdateAnswer(questionIndex, correctly);
    onUpdateScore();
  }
};

const onUpdateScore = () => {
  document.querySelector("#correct-questions-num").innerText =
    correctQuestionsNum;
  document.querySelector("#questions-answered-num").innerText =
    questionsAnsweredNum;
};

const onUpdateAnswer = (questionIndex, correctly) => {
  const questionNoItems = document.querySelectorAll(".question-no-item");
  questionNoItems[questionIndex].classList.add(
    correctly ? "correct" : "incorrect"
  );
};

const handleClickEvent = () => {
  const questionItems = document.querySelectorAll(".question-item");
  questionItems.forEach((item) => {
    item.addEventListener("click", function () {
      handleAnser(item);
    });
  });
};

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};
const onShowQuestionBoard = () => {
  const questions = document.querySelectorAll(".test-item-heading");
  let questionNumHtml = "";
  questions.forEach((element, index) => {
    answered.push(false);
    const question = element.querySelector("span");
    questionNumHtml += `<div class="question-no-item" onclick="scrollToElement('${
      question.id
    }')">${index + 1}</div>`;
  });
  const html =
    `<div class="question-box">
      <div class="score-box">
        <div id="correct-questions-num">0</div>
        <div>/</div>
        <div id="questions-answered-num">0</div>
      </div>
      <div class="question-list-box">` +
    questionNumHtml +
    `</div>
    </div>`;
  document.body.innerHTML = document.body.innerHTML + html;
  handleClickEvent();
};
onShowQuestionBoard();
