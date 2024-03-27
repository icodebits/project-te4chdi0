document.getElementById('scrollDownToFooter').addEventListener('click', function() {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' });
  }
});

document.getElementById('scrollDownToForm').addEventListener('click', function() {
  const form = document.querySelector('form');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth' });
  }
});