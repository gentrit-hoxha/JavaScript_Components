
const modal = document.querySelectorAll('.modall');
const overlay  = document.querySelector('.overlay');
const openModals = document.querySelectorAll('.show-modal');
const closeModal = document.querySelectorAll('.close-modal');


for (let i = 0; i < modal.length; i++) {

     openModals[i].addEventListener('click', function (params) {
        modal[i].classList.remove('hidden');
        overlay.classList.remove('hidden');
     });

}

for (let i = 0; i < modal.length; i++) {
    closeModal[i].addEventListener('click', function() {
        modal[i].classList.add('hidden');
        overlay.classList.add('hidden');
    });
}



