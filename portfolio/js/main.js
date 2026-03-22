const roles = [
  'Aspiring Software Engineer',
  'Front-end Web Developer',
  'Graphic Designer',
  'Video Editor',
  'OSINT Investigator',
  'Cybersecurity Enthusiast'
];

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const roleTextElement = document.getElementById('role-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenRoles = 1500;

function type() {
  const currentRole = roles[currentRoleIndex];

  if (isDeleting) {
    // Delete characters one by one
    currentCharIndex--;
  } else {
    // Add characters one by one
    currentCharIndex++;
  }

  // Update the text content
  roleTextElement.textContent = currentRole.substring(0, currentCharIndex);

  let delay = typingSpeed;

  if (isDeleting) {
    delay = deletingSpeed;
  }

  // If we've finished typing the current role
  if (!isDeleting && currentCharIndex === currentRole.length) {
    delay = pauseBetweenRoles;
    isDeleting = true;
  }
  // If we've finished deleting
  else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    delay = 500; // Small pause before typing the next role
  }

  setTimeout(type, delay);
}

// Start the typing animation when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', type);
} else {
  type();
}