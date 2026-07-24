import { useState, useEffect, useRef, useCallback } from 'react';

const roles = [
  "Aspiring Software Engineer",
  "Front-end Web Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Video Editor",
  "OSINT Researcher",
  "Cybersecurity Enthusiast",
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef(null);

  const type = useCallback(() => {
    const currentRole = roles[roleIndexRef.current];

    if (isDeletingRef.current) {
      charIndexRef.current--;
    } else {
      charIndexRef.current++;
    }

    setDisplayedText(currentRole.substring(0, charIndexRef.current));

    let delay = isDeletingRef.current ? 50 : 100;

    if (!isDeletingRef.current && charIndexRef.current === currentRole.length) {
      delay = 1500;
      isDeletingRef.current = true;
    } else if (isDeletingRef.current && charIndexRef.current === 0) {
      isDeletingRef.current = false;
      roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
      delay = 500;
    }

    timeoutRef.current = setTimeout(type, delay);
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(type, 500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [type]);

  return (
    <section
      id="hero"
      className="flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 md:pt-12 lg:pt-0"
      style={{ minHeight: '100dvh' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 items-center max-w-6xl w-full">
        {/* Left Content */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start">
          <div className="inline-block bg-white/10 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full mb-3 sm:mb-6 border border-white/10 backdrop-blur-lg shadow-sm hover:border-white/40 hover:bg-white/20 transition">
            Open to work!
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-center md:text-left text-white">
            Hey, I'm Sabriel Adriel —
          </h1>

          {/* Typing Animation Roles */}
          <div className="text-xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-8 h-8 sm:h-12 text-center md:text-left">
            <span>a </span>
            <span id="role-text">{displayedText}</span>
            <span className="animate-blink">|</span>
          </div>

          <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-10 md:mb-12 leading-relaxed max-w-xl text-center md:text-left">
            IT student and freelancer who is passionate about technology. I
            enjoy building, breaking, and solving the problems I encounter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 mb-6 sm:mb-12 items-stretch sm:items-center w-full sm:w-auto justify-center md:justify-start">
            <a
              href="mailto: savvv.business@gmail.com"
              className="hero-cta-no-hover w-full sm:w-40 px-3 sm:px-5 h-10 sm:h-14 border border-white/10 text-white rounded-full backdrop-blur-lg bg-white/10 shadow-sm flex items-center justify-center text-xs sm:text-base gap-2"
            >
              <img
                src="/assets/social-icons/Envelope-Alt--Streamline-Unicons.svg"
                alt="Email"
                className="w-3.5 sm:w-4 h-3.5 sm:h-4"
              />
              Get in touch
            </a>
            <a
              href="/projects"
              className="hero-cta-no-hover w-full sm:w-52 px-3 sm:px-6 h-10 sm:h-14 bg-white text-black rounded-full flex items-center justify-center text-xs sm:text-base gap-2"
            >
              <img
                src="/assets/social-icons/Bag-Alt--Streamline-Unicons.svg"
                alt="Projects"
                className="w-3.5 sm:w-4 h-3.5 sm:h-4 brightness-0"
              />
              View my Projects
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex flex-col items-center gap-4 sm:gap-8 md:gap-16 lg:gap-20 order-first md:order-last md:col-span-1 self-start mt-2 md:mt-6">
          <div className="relative">
            <div className="relative w-28 sm:w-40 md:w-48 h-28 sm:h-40 md:h-48 rounded-full border-4 border-white overflow-hidden bg-gray-800 flex items-center justify-center group cursor-pointer">
              <img
                src="/assets/images/hero-picture.jpeg"
                alt="Sabriel Adriel"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-1.5 sm:gap-3 justify-center flex-wrap mt-2">
            <a
              href="https://github.com/s4burieru"
              className="w-10 sm:w-14 h-10 sm:h-14 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition backdrop-blur-lg shadow-sm"
              title="GitHub"
            >
              <img
                src="/assets/social-icons/Github--Streamline-Feather.svg"
                alt="GitHub"
                className="w-3.5 sm:w-5 h-3.5 sm:h-5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sabrieladriel/"
              className="w-10 sm:w-14 h-10 sm:h-14 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition backdrop-blur-lg shadow-sm"
              title="LinkedIn"
            >
              <img
                src="/assets/social-icons/Linkedin--Streamline-Feather.svg"
                alt="LinkedIn"
                className="w-3.5 sm:w-5 h-3.5 sm:h-5"
              />
            </a>
            <a
              href="https://behance.net/sabrieladriel"
              className="w-10 sm:w-14 h-10 sm:h-14 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition backdrop-blur-lg shadow-sm"
              title="Behance"
            >
              <img
                src="/assets/social-icons/Behance-Tag--Streamline-Iconoir.svg"
                alt="Behance"
                className="w-3.5 sm:w-5 h-3.5 sm:h-5"
              />
            </a>
            <a
              href="https://medium.com/@sabrieladriel"
              className="w-10 sm:w-14 h-10 sm:h-14 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition backdrop-blur-lg shadow-sm"
              title="Medium"
            >
              <img
                src="/assets/social-icons/Medium--Streamline-Iconoir.svg"
                alt="Medium"
                className="w-3.5 sm:w-5 h-3.5 sm:h-5"
              />
            </a>
            <a
              href="https://www.instagram.com/s4burieru_/"
              className="w-10 sm:w-14 h-10 sm:h-14 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition backdrop-blur-lg shadow-sm"
              title="Instagram"
            >
              <img
                src="/assets/social-icons/Instagram--Streamline-Feather.svg"
                alt="Instagram"
                className="w-3.5 sm:w-5 h-3.5 sm:h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
