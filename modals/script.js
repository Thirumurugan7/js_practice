'use strict';

const modals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const clickHandler = () => {
  console.log('clikced');
  showModal();
};
const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const HideModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener('click', clickHandler);
}

document.querySelector('.close-modal').addEventListener('click', HideModal);
document.querySelector('.overlay').addEventListener('click', HideModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    HideModal();
  }
  console.log(e.key);
});
