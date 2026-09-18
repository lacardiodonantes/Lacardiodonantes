(function(){
  'use strict';
  const modal=document.getElementById('modal');
  const open=document.getElementById('openModal');
  const close=document.getElementById('closeModal');
  const menu=document.querySelector('.menu');
  if(open&&modal) open.addEventListener('click',()=>{modal.classList.remove('hidden');document.body.style.overflow='hidden';});
  if(close&&modal) close.addEventListener('click',()=>{modal.classList.add('hidden');document.body.style.overflow='';});
  if(modal) modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.add('hidden');document.body.style.overflow='';}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal&&!modal.classList.contains('hidden')){modal.classList.add('hidden');document.body.style.overflow='';}});
  if(menu) menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));});
})();
