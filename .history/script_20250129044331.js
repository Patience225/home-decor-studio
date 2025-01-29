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

