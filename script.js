'use strict';

let randomNum;
let enteredNumber;
let feedbackMsg = '';
let score = 20;
let highScore = 0;

const scoreEle = document.querySelector('.score');
const highscoreEle = document.querySelector('.highscore');
const userInput = document.querySelector('.guess');
const feedbackMsgEle = document.querySelector('.message');
const body = document.querySelector('body');
const number = document.querySelector('.number');

function generateRandomNumber() {
  randomNum = Math.ceil(Math.random() * 20);
}

function setHighScore() {
  if (parseFloat(highscoreEle.textContent) < score) {
    highscoreEle.textContent = score;
  }
}

function checkforMatch() {
  if (enteredNumber > randomNum) {
    feedbackMsg = 'Too High';
    feedbackMsgEle.textContent = feedbackMsg;
    score--;
    scoreEle.textContent = score;
  }
  if (enteredNumber < randomNum) {
    feedbackMsg = 'Too Low';
    feedbackMsgEle.textContent = feedbackMsg;
    score--;
    scoreEle.textContent = score;
  }
  if (enteredNumber == randomNum) {
    feedbackMsg = 'Matching';
    feedbackMsgEle.textContent = feedbackMsg;
    setHighScore();
    body.style.backgroundColor = '#60b347';
    number.textContent = randomNum;
  }
}
const againBtn = document.querySelector('.again');

againBtn.addEventListener('click', function (e) {
  generateRandomNumber();
  feedbackMsgEle.textContent = 'Start guessing...';
  score = 20;
  scoreEle.textContent = score;
  body.style.backgroundColor = '#222';
  number.textContent = '?';
});

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function (e) {
  enteredNumber = +userInput.value;
  checkforMatch();
});
