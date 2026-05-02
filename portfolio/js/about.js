// ==========================================
// About Page JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  initializeInfiniteScroll();
  initializeScrollAnimations();
});

// ==========================================
// Infinite Scroll Animation for Carousel
// ==========================================
function initializeInfiniteScroll() {
  const scrollContainer = document.querySelector('.animate-infinite-scroll');
  
  if (!scrollContainer) return;

  // Get the width of one complete set of images
  const itemWidth = scrollContainer.querySelector('div').offsetWidth + 24; // 24px is gap
  const totalWidth = itemWidth * 6; // 6 original images

  // Animate the scroll
  gsap.to(scrollContainer, {
    x: -totalWidth,
    duration: 20,
    ease: 'none',
    repeat: -1,
    onRepeat: function() {
      scrollContainer.style.transform = 'translateX(0)';
    }
  });

  // Pause animation on hover
  scrollContainer.addEventListener('mouseenter', function() {
    gsap.to(scrollContainer, { paused: true });
  });

  scrollContainer.addEventListener('mouseleave', function() {
    gsap.to(scrollContainer, { paused: false });
  });
}

// ==========================================
// Scroll Animations
// ==========================================
function initializeScrollAnimations() {
  // Animate hero section content on load
  gsap.from('.hero-content h1', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.hero-content p', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
  });

  // ScrollTrigger animations for sections
  gsap.registerPlugin(ScrollTrigger);

  // "How It All Started" section animation
  gsap.to('#where-it-started', {
    scrollTrigger: {
      trigger: '#where-it-started',
      start: 'top center',
      end: 'top top',
      scrub: 1,
      markers: false
    },
    opacity: 1
  });

  // Animate heading on scroll
  gsap.from('#where-it-started h2', {
    scrollTrigger: {
      trigger: '#where-it-started',
      start: 'top 80%',
      end: 'top 60%',
      scrub: 1
    },
    opacity: 0,
    x: -50,
    duration: 0.8
  });

  // "Life, As It Is" section animation
  gsap.from('#life-as-it-is h2', {
    scrollTrigger: {
      trigger: '#life-as-it-is',
      start: 'top 80%',
      end: 'top 60%',
      scrub: 1
    },
    opacity: 0,
    y: -50,
    duration: 0.8
  });

  // Animate images on scroll
  const images = document.querySelectorAll('#life-as-it-is .group');
  images.forEach((img, index) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top 90%',
        end: 'top 70%',
        scrub: 1
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: index * 0.1
    });
  });
}

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: targetSection,
        duration: 1,
        ease: 'power2.inOut'
      });
    }
  }
});

// ==========================================
// Parallax Effect for Images
// ==========================================
function initializeParallax() {
  const parallaxImages = document.querySelectorAll('img[src*="my-picture"], img[src*="kid-me"]');
  
  parallaxImages.forEach(img => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        scrub: 0.5,
      },
      y: window.innerWidth < 768 ? 0 : -30,
      duration: 1
    });
  });
}

// Initialize parallax on scroll
window.addEventListener('load', initializeParallax);
