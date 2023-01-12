'use strict';

const SecretValue = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = SecretValue;
let score = 20;
// document.querySelector('.guess').value
let highscore = SecretValue;
console.log(SecretValue);
const disp = document.querySelector('.message').textContent;
const scoreHandler = function () {
  if (score == 0) {
    document.querySelector('.message').textContent = 'You lost!';
  }
};

const againHandler = function () {
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
};

const again = document
  .querySelector('.again')
  .addEventListener('click', againHandler);

const handler = function () {
  console.log('clicked');
  let guess = document.querySelector('.guess').value;
  if (guess == SecretValue) {
    document.querySelector('.message').textContent = 'You Won!';
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '30rem';
  }
  if (guess > SecretValue) {
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    scoreHandler();
    document.querySelector('.score').textContent = score;
  }
  if (guess < SecretValue) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    scoreHandler();
    document.querySelector('.score').textContent = score;
  }
  console.log(guess, SecretValue);
};

const check = document
  .querySelector('.check')
  .addEventListener('click', handler);
console.log(disp);
