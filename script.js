// Store name in localStorage and greet user
window.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem('visitorName');
  if (!name) {
    const user = prompt('What is your name, friend of Victoria? 🐄');
    if (user) {
      localStorage.setItem('visitorName', user);
      alert(`Welcome, ${user}! Enjoy Victoria's story!`);
    }
  } else {
    console.log(`Welcome back, ${name}!`);
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('response').textContent = 'Thank you for your message! 🐄💕';
      form.reset();
    });
  }
});
