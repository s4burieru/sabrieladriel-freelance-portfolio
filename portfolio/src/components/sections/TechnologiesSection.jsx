import SectionHeader from "../shared/SectionHeader";
import { techItems } from "../../data/techItems";

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="py-16 md:py-24 px-6 sm:px-6 md:px-8 flex justify-center"
    >
      <div className="flex flex-col items-start w-full max-w-6xl">
        <SectionHeader
          label="TECHNOLOGIES"
          title="Tech Stack."
          description="The technologies and tools I work with to deliver real-world solutions."
        />

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
                  className={`${tech.w} ${tech.h} ${tech.rounded ? "rounded-lg" : ""}`}
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