
const modal = document.querySelector('.modal');
const overlay  = document.querySelector('.overlay');
const openModals = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

function opentheModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeTheModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < openModals.length; i++) {
    openModals[i].addEventListener('click' , opentheModal);
    
}

closeModal.addEventListener('click' , closeTheModal);
overlay.addEventListener('click', closeTheModal);

