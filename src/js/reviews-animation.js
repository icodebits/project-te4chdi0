window.addEventListener('load', () => {
  const target = document.querySelector('[data-animation-reviews]');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.setAttribute('data-animation-reviews', 'can-load');
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(target);
});
