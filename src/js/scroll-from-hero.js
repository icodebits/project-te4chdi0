document.getElementById('scrollDownToFooter').addEventListener('click', function() {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' });
  }
});

function scrollToForm() {
  const form = document.querySelector('#register-form');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('scrollDownToForm').addEventListener('click', scrollToForm);
document.getElementById('scrollDownToForm-lessons1').addEventListener('click', scrollToForm);
document.getElementById('scrollDownToForm-lessons2').addEventListener('click', scrollToForm);
document.getElementById('scrollDownToForm-lessons3').addEventListener('click', scrollToForm);
document.getElementById('scrollDownToForm-deal').addEventListener('click', scrollToForm);