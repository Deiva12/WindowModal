'use strict';

const hiddenModal = document.querySelector('.hidden');
const overlay =  document.querySelector('.overlay');
const closeModalsBtn = document.querySelector('.close-modal');
const openModalsBtn = document.querySelectorAll('.show-modal');

const openModal = function(){
    hiddenModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    hiddenModal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0;i<openModalsBtn.length;i++){
    openModalsBtn[i].addEventListener('click', openModal);
}

closeModalsBtn.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(event){
    if(event.key === 'Escape' && ! hiddenModal.classList.contains('hidden')){
        closeModal();
    }
});