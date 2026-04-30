// GSAP Animations for Portfolio
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
function initHeroAnimations() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  // Set initial state - Make sure everything is visible
  gsap.set([
    heroSection.querySelector('.inline-block'),
    heroSection.querySelector('h1'),
    heroSection.querySelector('.text-2xl'),
    heroSection.querySelector('p.text-gray-400'),
    heroSection.querySelector('.flex.flex-col.sm\\:flex-row'),
    heroSection.querySelector('.flex.flex-col.items-center'),
    heroSection.querySelector('.flex.gap-2')
  ], { opacity: 1, y: 0, x: 0 });

  const timeline = gsap.timeline();

  // Animate the badge "Open to work!"
  const badge = heroSection.querySelector('.inline-block');
  if (badge) {
    timeline.from(badge, {
      duration: 0.7,
      opacity: 0,
      y: -20,
      ease: 'power2.out'
    }, 0);
  }

  // Animate the main heading
  const heading = heroSection.querySelector('h1');
  if (heading) {
    timeline.from(heading, {
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: 'power2.out'
    }, 0.2);
  }

  // Animate role text
  const roleDiv = heroSection.querySelector('.text-2xl');
  if (roleDiv) {
    timeline.from(roleDiv, {
      duration: 0.6,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    }, 0.4);
  }

  // Animate description paragraph
  const description = heroSection.querySelector('p.text-gray-400');
  if (description) {
    timeline.from(description, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    }, 0.55);
  }

  // Animate CTA buttons
  const ctaContainer = heroSection.querySelector('.flex.flex-col.sm\\:flex-row.gap-4');
  if (ctaContainer) {
    timeline.from(ctaContainer, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    }, 0.7);

    // Add hover animations to CTA buttons
    const buttons = ctaContainer.querySelectorAll('a');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          duration: 0.3,
          y: -5,
          boxShadow: '0 10px 25px rgba(255, 255, 255, 0.1)',
          overwrite: 'auto'
        });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          duration: 0.3,
          y: 0,
          boxShadow: 'none',
          overwrite: 'auto'
        });
      });
    });
  }

  // Animate profile image with rotation
  const profileDiv = heroSection.querySelector('.flex.flex-col.items-center.gap-8');
  if (profileDiv) {
    timeline.from(profileDiv, {
      duration: 0.8,
      opacity: 0,
      x: 50,
      rotation: -5,
      ease: 'power2.out'
    }, 0.2);
  }

  // Animate social icons
  const socialContainer = heroSection.querySelector('.flex.gap-2');
  if (socialContainer) {
    timeline.from(socialContainer, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    }, 0.85);

    // Add hover animation to social icons
    const socialIcons = socialContainer.querySelectorAll('a');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1.15,
          rotation: 10,
          overwrite: 'auto'
        });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          duration: 0.3,
          scale: 1,
          rotation: 0,
          overwrite: 'auto'
        });
      });
    });
  }
}

// Profile Image Hover Animation
function initProfileImageAnimation() {
  const profileCircle = document.querySelector('.w-32.sm\\:w-40.md\\:w-48');
  if (!profileCircle) return;

  profileCircle.addEventListener('mouseenter', () => {
    gsap.to(profileCircle, {
      duration: 0.4,
      scale: 1.05,
      boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
      overwrite: 'auto'
    });
  });

  profileCircle.addEventListener('mouseleave', () => {
    gsap.to(profileCircle, {
      duration: 0.4,
      scale: 1,
      boxShadow: 'none',
      overwrite: 'auto'
    });
  });
}

// Scroll Animations for Sections
function initScrollAnimations() {
  // Animate all h2 headings on scroll
  const headings = document.querySelectorAll('h2');
  headings.forEach((heading) => {
    gsap.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: 'power2.out'
    });
  });

  // Animate section cards with hover effects (excluding certificates)
  const cardSelectors = ['a.flex', '.group.flex', '[class*="group"]'];
  const allCards = document.querySelectorAll(cardSelectors.join(', '));
  
  allCards.forEach(card => {
    // Skip certificate cards (they're nested in the carousel)
    if (card.closest('#certifications-carousel')) {
      return;
    }

    // Skip navbar logo
    if (card.closest('#main-navbar')) {
      return;
    }

    // Add scroll animation
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.6,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    });

    // Add hover animation
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -8,
        boxShadow: '0 8px 24px rgba(255, 255, 255, 0.1)',
        overwrite: 'auto'
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: 'none',
        overwrite: 'auto'
      });
    });
  });
}

// Carousel animations are now handled by CSS
// See animate-infinite-scroll class in css/input.css

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initHeroAnimations();
    initProfileImageAnimation();
    initScrollAnimations();z
  }, 50);
});

// Refresh ScrollTrigger on load
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
