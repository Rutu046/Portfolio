// script.js

// Example: Display a pop-up alert when the user clicks a button
document.getElementById('contact-button').addEventListener('click', function() {
    alert('Thank you for reaching out. We will get back to you soon.');
  });
  
  // Example: Smooth scrolling to sections when navigation links are clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Remove the "#" character
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  