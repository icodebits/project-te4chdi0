window.addEventListener('load', () => {
  const target = document.querySelector('[data-animation-lessons]');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.setAttribute('data-animation-lessons', 'can-load');
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(target);
});
