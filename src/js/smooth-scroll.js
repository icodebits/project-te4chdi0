document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const element = document.querySelector(this.getAttribute('href'));
      const y = element.getBoundingClientRect().top + window.scrollY - 40;

      window.scrollTo({top: y, behavior: 'smooth'});
    });
});
