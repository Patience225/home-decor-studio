const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thank you for your message! We'll get back to you soon.";
    feedback.style.color = "green";
    document.getElementById('contact-form').reset();
  }
});

// Hover effect for gallery images
const galleryImages = document.querySelectorAll('.gallery-item');

galleryImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add hover effects for footer social icons
const footerIcons = document.querySelectorAll('.social-icons a');

footerIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)';
    icon.style.transition = 'transform 0.3s ease';
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle form submission feedback with success animation
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const feedback = document.querySelector('#form-feedback');
  feedback.classList.add('success');
  feedback.textContent = 'Thank you! Your message has been sent successfully.';

  // Animation for feedback
  feedback.style.opacity = 0;
  setTimeout(() => {
    feedback.style.transition = 'opacity 1s ease-in-out';
    feedback.style.opacity = 1;
  }, 100);
});

