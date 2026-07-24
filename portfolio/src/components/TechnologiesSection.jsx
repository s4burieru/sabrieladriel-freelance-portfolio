const techItems = [
  { name: 'HTML', icon: '/assets/tech-icons/html-5.svg', w: 'w-10', h: 'h-10' },
  { name: 'CSS', icon: '/assets/tech-icons/css-3.svg', w: 'w-10', h: 'h-10' },
  { name: 'JavaScript', icon: '/assets/tech-icons/javascript.svg', w: 'w-9', h: 'h-9', rounded: true },
  { name: 'Tailwind', icon: '/assets/tech-icons/tailwind.svg', w: 'w-10', h: 'h-10' },
  { name: 'React', icon: '/assets/tech-icons/react.svg', w: 'w-8', h: 'h-8' },
  { name: 'Vercel', icon: '/assets/tech-icons/vercel.svg', w: 'w-8', h: 'h-8' },
  { name: 'VB.NET', icon: '/assets/tech-icons/VB.NET.svg', w: 'w-9', h: 'h-9' },
  { name: 'Java', icon: '/assets/tech-icons/java.svg', w: 'w-10', h: 'h-10' },
  { name: 'VS Code', icon: '/assets/tech-icons/visual-studio-code.svg', w: 'w-8', h: 'h-8' },
  { name: 'Visual Studio', icon: '/assets/tech-icons/visual-studio.svg', w: 'w-8', h: 'h-8' },
  { name: 'Git', icon: '/assets/tech-icons/git.svg', w: 'w-9', h: 'h-9' },
  { name: 'GitHub', icon: '/assets/tech-icons/github.svg', w: 'w-9', h: 'h-9' },
  { name: 'Framer', icon: '/assets/tech-icons/framer.svg', w: 'w-10', h: 'h-10' },
  { name: 'WordPress', icon: '/assets/tech-icons/wordpress.svg', w: 'w-10', h: 'h-10' },
  { name: 'XAMPP', icon: '/assets/tech-icons/xampp.svg', w: 'w-8', h: 'h-8' },
  { name: 'Photoshop', icon: '/assets/tech-icons/adobe-photoshop.svg', w: 'w-10', h: 'h-10' },
  { name: 'Illustrator', icon: '/assets/tech-icons/adobe-illustrator.svg', w: 'w-10', h: 'h-10' },
  { name: 'Figma', icon: '/assets/tech-icons/figma.svg', w: 'w-8', h: 'h-8' },
  { name: 'CapCut', icon: '/assets/tech-icons/capcut.svg', w: 'w-8', h: 'h-8' },
  { name: 'Kali Linux', icon: '/assets/tech-icons/kali-linux.svg', w: 'w-10', h: 'h-10' },
  { name: 'Virtual Box', icon: '/assets/tech-icons/virtual-box.svg', w: 'w-8', h: 'h-8' },
  { name: 'Tor Browser', icon: '/assets/tech-icons/tor-browser.svg', w: 'w-10', h: 'h-10' },
  { name: 'Packet Tracer', icon: '/assets/tech-icons/packet-tracer.svg', w: 'w-8', h: 'h-8' },
  { name: 'Office', icon: '/assets/tech-icons/microsoft-office.svg', w: 'w-8', h: 'h-8' },
];

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="py-16 md:py-24 px-6 sm:px-6 md:px-8 flex justify-center"
    >
      <div className="flex flex-col items-start w-full max-w-6xl">
        {/* Section Label */}
        <div className="text-sm uppercase tracking-widest text-blue-600 mb-3 font-semibold">
          TECHNOLOGIES
        </div>

        {/* Heading */}
        <div className="w-full flex items-center justify-between mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-left">
            Tech Stack.
          </h2>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 text-left mb-12 md:mb-16 max-w-2xl">
          The technologies and tools I work with to deliver real-world solutions.
        </p>

        {/* Technologies Grid */}
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {techItems.map((tech) => (
            <a
              key={tech.name}
              href="#"
              className="flex flex-col items-center justify-center p-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg hover:border-white/30 hover:bg-white/10 transition group"
            >
              <div className={`${tech.w} ${tech.h} rounded-lg flex items-center justify-center mb-1.5 group-hover:scale-110 transition`}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`${tech.w} ${tech.h} ${tech.rounded ? 'rounded-lg' : ''}`}
                />
              </div>
              <span className="text-white text-xs font-semibold">{tech.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
