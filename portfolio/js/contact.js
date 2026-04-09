// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      // Validate form
      if (!data.name || !data.email || !data.subject || !data.message) {
        showStatus('Please fill in all fields', 'error');
        return;
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        // TODO: Replace with your actual backend endpoint or email service
        // Example options:
        // 1. FormSpree: https://formspree.io/ - Free email form service
        // 2. Netlify Forms: If deployed on Netlify
        // 3. Your own backend API
        
        // For now, log the data to console (replace with actual submission)
        console.log('Contact form data:', data);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show success message
        showStatus('Message sent successfully! I\'ll be in touch soon.', 'success');
        contactForm.reset();
      } catch (error) {
        console.error('Error:', error);
        showStatus('Failed to send message. Please try again.', 'error');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `text-center text-sm ${type === 'success' ? 'text-green-400' : 'text-red-400'}`;
    formStatus.classList.remove('hidden');

    // Hide message after 5 seconds
    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 5000);
  }
});
