const dialog = document.querySelector('#application');
const opener = document.querySelector('#open-form');
const frame = dialog.querySelector('iframe');
opener.addEventListener('click', () => {
  if (frame.getAttribute('src') === 'about:blank') frame.src = frame.dataset.src;
  dialog.showModal();
  document.body.classList.add('modal-open');
});
document.querySelector('#close-form').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); opener.focus(); });
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
