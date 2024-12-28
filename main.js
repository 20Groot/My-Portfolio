// Add smooth scrolling to navigation links
document.querySelectorAll('.navbar a[href^="#"]').forEach(navLink => {
    navLink.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  