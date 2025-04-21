
// Mobile menu functionality
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Chat functionality
const messages = [
  { text: "Привет! Это пример чата.", type: "received" },
  { text: "Здесь можно увидеть, как работает чат.", type: "received" }
];

function displayMessages() {
  const chatMessages = document.getElementById('chatMessages');
  // Only run if we're on the chat page
  if (chatMessages) {
    chatMessages.innerHTML = messages
      .map(msg => `
        <div class="message ${msg.type}">
          ${msg.text}
        </div>
      `)
      .join('');
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  
  if (message) {
    messages.push({ text: message, type: 'sent' });
    displayMessages();
    input.value = '';
    
    // Simulate received message
    setTimeout(() => {
      messages.push({
        text: "Это автоматический ответ на ваше сообщение.",
        type: 'received'
      });
      displayMessages();
    }, 1000);
  }
}

// Contact form handling
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  
  // Here you would typically send the data to a server
  alert('Сообщение отправлено!');
  form.reset();
}

// Initialize chat messages
document.addEventListener('DOMContentLoaded', () => {
  displayMessages();
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
      }
    });
  });

  // Initialize any page-specific elements
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }
});
