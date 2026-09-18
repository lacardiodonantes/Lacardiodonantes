(() => {
  const modal = document.getElementById('modal');
  const open = document.getElementById('openModal');
  const close = document.getElementById('closeModal');
  const focusDonate = document.getElementById('focusDonate');

  const setModal = (visible) => {
    modal.classList.toggle('hidden', !visible);
    document.body.style.overflow = visible ? 'hidden' : '';
    if (visible) {
      setTimeout(() => modal.querySelector('input')?.focus(), 40);
    }
  };

  open?.addEventListener('click', () => setModal(true));
  close?.addEventListener('click', () => setModal(false));
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) setModal(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setModal(false);
  });

  focusDonate?.addEventListener('click', () => {
    document.getElementById('donar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
