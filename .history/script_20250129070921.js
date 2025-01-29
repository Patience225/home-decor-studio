const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const galleryImages = document.querySelectorAll('.gallery-item');
const backToTopButton = document.getElementById('back-to-top');
const footerIcons = document.querySelectorAll('.social-icons a');
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Toggle navigation menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
// Combined both instances of the same function
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form validation & feedback animation
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thank you! Your message has been sent successfully.";
    feedback.style.color = "green";
    contactForm.reset();
  }

  // Add fade-in effect for feedback
  feedback.style.opacity = 0;
  setTimeout(() => {
    feedback.style.transition = 'opacity 1s ease-in-out';
    feedback.style.opacity = 1;
  }, 100);
});

// Hover effect for gallery images & footer social icons
const addHoverEffect = (elements) => {
  elements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'scale(1.1)';
      el.style.transition = 'transform 0.3s ease';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'scale(1)';
    });
  });
};

addHoverEffect(galleryImages);
addHoverEffect(footerIcons);

// Back to top button functionality
window.addEventListener('scroll', () => {
  backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
