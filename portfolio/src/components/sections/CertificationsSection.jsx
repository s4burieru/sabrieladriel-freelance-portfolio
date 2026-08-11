const certifications = [
  {
    name: "Introduction to Cybersecurity",
    image: "/assets/certificates/CISCO Introduction to Cybersecurity.jpg",
  },
  {
    name: "HTML Essentials",
    image: "/assets/certificates/CISCO HTML Essentials.jpg",
  },
  {
    name: "CSS Essentials",
    image: "/assets/certificates/CISCO CSS Essentials.jpg",
  },
  {
    name: "Github Foundations",
    image: "/assets/certificates/Data Camp Github Foundations.jpg",
  },
  {
    name: "Dark Web, Anonymity, and Cryptocurrency",
    image:
      "/assets/certificates/EC-Council Introduction to Dark Web, Anonymity, and Cryptocurrency.jpg",
  },
  {
    name: "Introduction to Generative AI",
    image:
      "/assets/certificates/Google Cloud Introduction to Generative AI.jpg",
  },
  {
    name: "HTB 2nd Meetup",
    image: "/assets/certificates/HTB 2nd Meetup.jpg",
  },
  {
    name: "Certified Threat Intelligence & Governance Analyst",
    image:
      "/assets/certificates/Red Team Leaders Certified Threat Intelligence & Governance Analyst.jpg",
  },
  {
    name: "Introduction to OSINT",
    image:
      "/assets/certificates/Security Blue Team Introduction to OSINT.jpg",
  },
  {
    name: "Developing Designs for User Experience",
    image:
      "/assets/certificates/TESDA Developing Designs for User Experience.jpg",
  },
];

export default function CertificationsSection() {
  // Duplicate for seamless loop
  const allCerts = [...certifications, ...certifications];

  return (
    <section
      id="certifications"
      className="w-full flex flex-col items-center justify-center overflow-hidden py-12 md:py-20"
    >
      {/* Header Content (constrained width) */}
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center w-full max-w-6xl px-6 sm:px-6 md:px-8 py-4 sm:py-6">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            Certifications & Credentials.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-2xl">
            Online courses, certifications, and community participation that
            showcase my commitment to continuous learning.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container (full width) */}
      <div
        className="w-screen overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-6 animate-infinite-scroll"
          style={{ width: "max-content" }}
        >
          {allCerts.map((cert, index) => (
            <div
              key={`${cert.name}-${index}`}
              className="flex flex-col items-center gap-2 shrink-0 group"
            >
              <div className="w-56 h-44 sm:w-72 sm:h-52 md:w-80 md:h-60 lg:w-96 lg:h-72 rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/30 transition">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-300 text-center">
                {cert.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}