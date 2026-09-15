'use strict';
const modal=document.getElementById('modal');
const openModal=document.getElementById('openModal');
const closeModal=document.getElementById('closeModal');
function show(){modal.classList.remove('hidden');document.body.style.overflow='hidden';closeModal.focus()}
function hide(){modal.classList.add('hidden');document.body.style.overflow=''}
openModal.addEventListener('click',show);
closeModal.addEventListener('click',hide);
modal.addEventListener('click',e=>{if(e.target===modal)hide()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')hide()});
