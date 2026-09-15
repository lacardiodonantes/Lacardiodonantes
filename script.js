(function(){
"use strict";

const params=new URLSearchParams(window.location.search);
const token=params.get("access");
const access=document.getElementById("access");
const blocked=document.getElementById("blocked");
const blockedTitle=document.getElementById("blockedTitle");
const blockedText=document.getElementById("blockedText");

function deny(title,text){
  if(access) access.classList.add("hidden");
  if(blocked) blocked.classList.remove("hidden");
  if(blockedTitle) blockedTitle.textContent=title;
  if(blockedText) blockedText.textContent=text;
}

if(!token || !/^[A-Za-z0-9_-]{6,128}$/.test(token)){
  deny("Enlace no válido","Debes ingresar mediante el enlace que recibiste.");
  return;
}

const storageKey="access_used_"+token;
let alreadyUsed=false;

try{
  alreadyUsed=localStorage.getItem(storageKey)==="1";
  if(!alreadyUsed) localStorage.setItem(storageKey,"1");
}catch(error){}

if(alreadyUsed){
  deny("Este enlace ya fue utilizado","Por seguridad, este acceso solo puede utilizarse una vez.");
  return;
}

try{
  window.history.replaceState({},document.title,window.location.pathname);
}catch(error){}

const modal=document.getElementById("customModal");
const customAmount=document.getElementById("customAmount");
const closeModal=document.getElementById("closeModal");

function openModal(){
  if(!modal)return;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}

function closeCustomModal(){
  if(!modal)return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}

if(customAmount) customAmount.addEventListener("click",openModal);
if(closeModal) closeModal.addEventListener("click",closeCustomModal);

if(modal) modal.addEventListener("click",function(e){
  if(e.target===modal) closeCustomModal();
});

document.addEventListener("keydown",function(e){
  if(e.key==="Escape" && modal && !modal.classList.contains("hidden")) closeCustomModal();
});

const puntualBtn=document.getElementById("puntualBtn");
const periodicaBtn=document.getElementById("periodicaBtn");

if(puntualBtn && periodicaBtn){
  puntualBtn.addEventListener("click",function(){
    puntualBtn.classList.add("active");
    periodicaBtn.classList.remove("active");
  });

  periodicaBtn.addEventListener("click",function(){
    periodicaBtn.classList.add("active");
    puntualBtn.classList.remove("active");
    alert("La opción de donación periódica estará disponible próximamente.");
  });
}

document.querySelectorAll(".amount").forEach(function(button){
  button.addEventListener("click",function(){
    button.classList.remove("clicked");
    void button.offsetWidth;
    button.classList.add("clicked");
    setTimeout(function(){button.classList.remove("clicked")},350);
  });
});

})();