document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Intersection Observer for fade-in effects
  const observerOptions = { threshold: 0.1 };
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  fadeInElements.forEach(element => observer.observe(element));

  // Typewriter Effect for the "Hello" Section
  const typedSpan = document.getElementById('typed');
  const text = "Hello, I am Michael Njoku";
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      typedSpan.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 110);
    }
  }
  typeWriter();
});
