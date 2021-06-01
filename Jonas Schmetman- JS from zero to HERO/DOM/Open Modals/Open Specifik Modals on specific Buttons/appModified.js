
const modal = document.querySelectorAll('.modal');
const overlay  = document.querySelector('.overlay');
const openModals = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');


function opentheModal() {
    for (let i = 0; i < modal.length; i++) {
        openModals[i].addEventListener('click' ,  modal[i].classList.remove('hidden'))          
            }
  overlay.classList.remove('hidden');
}


function closeTheModal() {
    for (let i = 0; i < modal.length; i++) {
       modal[i].classList.add('hidden');   
    }
    overlay.classList.add('hidden');
}

closeModal.addEventListener('click' , closeTheModal);



// for (let i = 0; i < openModals.length; i++) {
//      openModals[i].addEventListener('click' , opentheModal);
    
//  }


for (let i = 0; i < modal.length; i++) {

     openModals[i].addEventListener('click', function (params) {
        modal[i].classList.remove('hidden');
        overlay.classList.remove('hidden');
     });

     
        

}