// Load navbar from partial file
async function loadNavbar() {
  try {
    const response = await fetch('./partials/navbar.html');
    const navbarHTML = await response.text();
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
      navbarContainer.innerHTML = navbarHTML;
      // Reinitialize navbar functionality after loading
      initializeNavbar();
    }
  } catch (error) {
    console.error('Error loading navbar:', error);
  }
}

function initializeNavbar() {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  const html = document.documentElement;

  if (themeToggle) {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    function setTheme(theme) {
      if (theme === 'dark') {
        html.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      } else {
        html.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
      localStorage.setItem('theme', theme);
    }

    // Initialize theme
    setTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
      const theme = html.classList.contains('dark') ? 'light' : 'dark';
      setTheme(theme);
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      });

      // Close mobile menu when a link is clicked
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        });
      });
    }

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Load navbar when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
  loadNavbar();
}

// Typing Animation
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