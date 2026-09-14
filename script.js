document.querySelectorAll('.amount').forEach(function(btn){btn.addEventListener('click',function(){
  if(typeof gtag==='function'){gtag('event','donacion_click',{valor_donacion:btn.dataset.value,metodo:btn.dataset.value==='$0'?'Solicitud de enlace':'ePayco'});}
});});

const otherBtn=document.getElementById('otherAmountBtn');
const panel=document.getElementById('requestPanel');
const closeBtn=document.getElementById('closeRequest');
if(otherBtn && panel){
  otherBtn.addEventListener('click',function(){
    panel.hidden=false;
    panel.scrollIntoView({behavior:'smooth',block:'center'});
    if(typeof gtag==='function') gtag('event','otro_valor_click',{valor_donacion:'$0',metodo:'Solicitud de enlace'});
  });
}
if(closeBtn){closeBtn.addEventListener('click',function(){panel.hidden=true;});}

const requestForm=document.getElementById('requestForm');
const formStatus=document.getElementById('formStatus');
if(requestForm){
  requestForm.addEventListener('submit',function(){
    if(typeof gtag==='function') gtag('event','solicitud_enlace_pago',{metodo:'Formulario',destino:'caudofun@gmail.com'});
    if(formStatus) formStatus.textContent='Enviando solicitud…';
  });
}

const amountInput=document.querySelector('input[name="valor"]');
if(amountInput){
  amountInput.addEventListener('input',function(){
    const digits=this.value.replace(/\D/g,'');
    this.value=digits ? '$ '+Number(digits).toLocaleString('es-CO') : '';
  });
}
