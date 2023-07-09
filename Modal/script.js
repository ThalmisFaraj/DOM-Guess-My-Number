'use strict';

const btns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const body = document.querySelector('body');

const btnsArray = Array.from(btns);

const escapeCloseHandler = function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
};

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  body.addEventListener('keydown', escapeCloseHandler);
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  body.removeEventListener('keydown', escapeCloseHandler);
}

btnsArray.forEach(item => item.addEventListener('click', openModal));

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
