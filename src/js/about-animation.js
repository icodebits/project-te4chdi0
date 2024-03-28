/**
 * Для анімацій краще використовувати Intersection Observer API
 * Він більш оптимізований
 * Код нижче не працював тому, що не правильно було вказано подію
 * в методі window.addEventListener(), тому виправив назву події на 'scroll'
 * Код нижче не видаляв, на всяк випадок. Якщо він не буде актуальним прошу видалити
 * під час прийняття PR
 */
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   console.log('isInViewport  rect:', rect);
//   console.log(window.innerHeight, document.documentElement.clientHeight);

//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to handle scroll event
// function handleScroll() {
//   const element = document.querySelector('.fade-in-animation');
//   if (isInViewport(element)) {
//     element.style.opacity = '1'; // Start the animation when element enters the viewport
//     window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener once animation starts
//   }
// }

// // Add scroll event listener
// window.addEventListener('scroll', handleScroll);

/**
 * Додавання анімації через Intersection Observer
 * Через дивну поведінку сторінки, довелося додати слухач на window
 * і чекати повного завантаження контенту
 * Дивна поведінка проявляється в тому, що сторінка автоматично прокручується до
 * секції .about-section під час завантаження (якорів в адресному рядку не було)
 */
window.addEventListener('load', () => {
  const target = document.querySelector('[data-animation]');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.setAttribute('data-animation', 'fade-in');
        } else {
          target.setAttribute('data-animation', 'blur-out');
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(target);
});
