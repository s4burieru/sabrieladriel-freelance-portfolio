import SectionHeader from "../shared/SectionHeader";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="pt-16 md:pt-24 lg:pt-0 pb-16 md:pb-24 px-6 sm:px-6 md:px-8 flex justify-center"
    >
      <div className="flex flex-col items-start w-full max-w-6xl">
        <SectionHeader
          label="ABOUT"
          title="My Passion."
          description="My journey through technology, creativity, and the digital landscape."
          link={{ href: "/about", label: "More About Me" }}
        />

        {/* Content */}
        <div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
            I've explored various areas of technology, including
            front-end web development, video editing, UI/UX, and graphic
            design. Through these experiences, I've built a strong
            foundation in both creativity and technical skills, allowing me to
            approach projects with a well-rounded perspective.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            While I enjoy working across these different fields, I've
            discovered that my true passion lies in cybersecurity,
            particularly in OSINT investigation. I love the challenge of
            uncovering information, analyzing data from open sources, and
            staying one step ahead in an ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
}