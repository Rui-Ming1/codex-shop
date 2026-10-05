const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#reserve-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = event.currentTarget.querySelector('.form-message');
  message.textContent = '谢谢，已收到您的预约请求。我们会尽快与您确认。';
  event.currentTarget.reset();
});
