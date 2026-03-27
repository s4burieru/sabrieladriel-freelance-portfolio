// Load navbar from partial file
async function loadNavbar() {
  try {
    const response = await fetch('./partials/navbar.html');
    const navbarHTML = await response.text();
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
      navbarContainer.innerHTML = navbarHTML;
      
      // Use a small timeout to ensure DOM is updated
      setTimeout(() => {
        console.log('Initializing navbar after fetch');
        initializeNavbar();
      }, 100);
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
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
      } else {
        html.classList.remove('dark');
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
      }
      localStorage.setItem('theme', theme);
    }

    // Initialize theme
    setTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
      const theme = html.classList.contains('dark') ? 'light' : 'dark';
      setTheme(theme);
    });
  }

  // Mobile Menu Toggle - Create/find or create dynamically if needed
  let mobileMenuBtn = document.getElementById('mobile-menu-btn');
  let mobileMenu = document.getElementById('mobile-menu');
  let menuIcon = document.getElementById('menu-icon');
  let closeIcon = document.getElementById('close-icon');

  // If elements weren't found in DOM (due to parsing issues), create them
  if (!closeIcon && menuIcon) {
    // Create close-icon if it's missing
    closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    closeIcon.id = 'close-icon';
    closeIcon.setAttribute('class', 'w-5 h-5 text-white hidden');
    closeIcon.setAttribute('fill', 'none');
    closeIcon.setAttribute('stroke', 'currentColor');
    closeIcon.setAttribute('viewBox', '0 0 24 24');
    closeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
    menuIcon.parentElement.appendChild(closeIcon);
  }

  if (!mobileMenu) {
    // Create mobile menu if it's missing
    mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.setAttribute('class', 'hidden fixed top-24 left-4 right-4 z-40 backdrop-blur-lg rounded-2xl border border-white/20 p-4 lg:hidden bg-black/90');
    mobileMenu.innerHTML = `
      <div class="flex flex-col gap-3">
        <a href="about.html" class="font-poppins text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 py-2">About</a>
        <a href="skills.html" class="font-poppins text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 py-2">Skills</a>
        <a href="projects.html" class="font-poppins text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 py-2">Projects</a>
        <a href="services.html" class="font-poppins text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 py-2">Services</a>
        <a href="blog.html" class="font-poppins text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 py-2">Blog</a>
        <a href="contact.html" class="font-poppins text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 py-2">Contact</a>
        <a href="#resume" class="font-poppins text-sm font-semibold px-4 py-2 rounded-full bg-white text-black hover:bg-blue-50 transition-colors duration-200 text-center">Resume</a>
      </div>
    `;
    const nav = document.querySelector('nav');
    if (nav) {
      nav.appendChild(mobileMenu);
    }
  }

  console.log('Mobile Menu Elements After Fix:');
  console.log('- mobileMenuBtn:', !!mobileMenuBtn);
  console.log('- mobileMenu:', !!mobileMenu);
  console.log('- menuIcon:', !!menuIcon);
  console.log('- closeIcon:', !!closeIcon);

  // Setup event listeners if all elements exist
  if (mobileMenuBtn && mobileMenu && menuIcon && closeIcon) {
    console.log('Setting up mobile menu functionality');
    mobileMenuBtn.addEventListener('click', () => {
      console.log('Menu button clicked');
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
  } else {
    console.error('Could not initialize mobile menu - missing elements');
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

  // Navbar scroll animation (desktop only - lg breakpoint 1024px and above)
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    // Initialize navbar width on page load
    navbar.style.maxWidth = '1350px';
    
    let scrollTimeout;
    const scrollAnimationBreakpoint = 1024; // lg breakpoint
    
    console.log('Navbar scroll animation initialized');
    
    const handleScroll = () => {
      // Only apply animation on screens lg and above
      if (window.innerWidth < scrollAnimationBreakpoint) {
        return;
      }
      
      if (window.scrollY > 100) {
        // When scrolled down, add delay before making navbar more compact
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          navbar.style.maxWidth = '50rem';
          navbar.style.padding = '0.5rem 1.5rem';
          navbar.style.top = '1rem';
          console.log('Navbar compact - scrollY:', window.scrollY);
        }, 300); // 300ms delay
      } else {
        // When scrolling back up (scrollY <= 100), reset to default wider width immediately
        clearTimeout(scrollTimeout);
        navbar.style.maxWidth = '1350px';
        navbar.style.padding = '0.625rem 2rem';
        navbar.style.top = '1.5rem';
        console.log('Navbar wide - scrollY:', window.scrollY);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Handle window resize to reset animation on smaller screens
    window.addEventListener('resize', () => {
      if (window.innerWidth < scrollAnimationBreakpoint) {
        clearTimeout(scrollTimeout);
        navbar.style.maxWidth = '1350px';
        navbar.style.padding = '0.625rem 2rem';
        navbar.style.top = '1.5rem';
      }
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
  'UI/UX Designer',
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