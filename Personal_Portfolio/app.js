
//SELECTORS
const openBtn  = document.querySelector('.openBtn');
const closeBtn  = document.querySelector('.closeBtn');

 const content = document.querySelector('.mobile-menu');

openBtn.addEventListener('click' , openOverlay);
closeBtn.addEventListener('click' , closeOverlay);

function openOverlay() {
    content.style.width = "100%";
}
function closeOverlay() {
    content.style.width = "0%";
}

