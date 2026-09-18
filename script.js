(() => {
  const modal = document.getElementById('modal');
  const open = document.getElementById('openModal');
  const close = document.getElementById('closeModal');
  const toggle = (show) => modal.classList.toggle('hidden', !show);
  open.addEventListener('click', () => toggle(true));
  close.addEventListener('click', () => toggle(false));
  modal.addEventListener('click', e => { if (e.target === modal) toggle(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
})();
