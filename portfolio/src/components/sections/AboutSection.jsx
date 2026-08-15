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
            I've explored different areas of technology, including web
            development, UI/UX design, video editing, and graphic design. These
            experiences have helped me build a strong combination of technical
            and creative skills, allowing me to approach projects from both a
            developer's and a designer's perspective.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            I'm currently focused on growing as a full-stack developer, learning
            how to build complete and scalable web applications from front-end
            interfaces to back-end systems and databases. I enjoy learning new
            technologies, solving problems, and turning ideas into functional
            and user-friendly digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
