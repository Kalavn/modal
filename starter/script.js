'use strict';
/* 
- Click show modal => open modal window with overlay background
  + get 3 buttons node
  + for all 3 buttons with click event
  + open modal window
- close modal window:
  + click close button
  + click overlay
*/
//Get 3 buttons in array
const btnModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//set click event for 3 buttons
for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
//close modal window when click close button
const closeModalBtn = document.querySelector('.close-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
//close modal window when click overlay
overlay.addEventListener('click', closeModal);
//close modal window when press 'esc' key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
