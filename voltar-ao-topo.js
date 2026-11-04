(() => {
  if (document.querySelector('.back-to-top')) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'back-to-top';
  button.setAttribute('aria-label', 'Voltar ao topo');
  button.title = 'Voltar ao topo';
  button.hidden = true;
  button.innerHTML = '<svg viewBox="0 0 24 28" aria-hidden="true" focusable="false"><path d="M12 24V4M5 11l7-7 7 7"/></svg>';
  const update = () => { button.hidden = window.scrollY < 300; };
  button.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  });
  document.body.append(button);
  window.addEventListener('scroll', update, {passive: true});
  window.addEventListener('pageshow', update);
  update();
})();
