document.addEventListener('scroll', () => {
    // Отримуємо елемент з класом anim-round
    const animRoundElement = document.querySelector('.anim-round');
    if (animRoundElement) {
        // Збільшуємо швидкість обертання
        const rotationSpeed = 2; // Коефіцієнт швидкості
        const rotation = window.scrollY * rotationSpeed;
        animRoundElement.style.transform = `rotate(${rotation}deg)`;
    }
});

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelector('.hero__title').classList.add('visible');
    }, 1000); // Затримка у 3000 мс (3 секунди)
  });