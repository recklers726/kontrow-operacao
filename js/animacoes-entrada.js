document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.animar-entrada');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecer');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  elementos.forEach(el => observer.observe(el));
});