import { useState, useEffect, useRef } from "react";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [touchedId, setTouchedId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 3)))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  // Close touched card when tapping outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        touchedId !== null &&
        sectionRef.current &&
        !sectionRef.current.contains(e.target)
      ) {
        setTouchedId(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [touchedId]);

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
      className="py-16 md:py-24 px-6 sm:px-6 md:px-8 flex justify-center"
    >
      <div className="flex flex-col items-start w-full max-w-6xl">
        {/* Section Label */}
        <div className="text-sm uppercase tracking-widest text-blue-600 mb-3 font-semibold">
          PORTFOLIO
        </div>

        {/* Heading with View All Projects */}
        <div className="w-full flex items-center justify-between mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-left">
            Featured Projects.
          </h2>
          <a
            href="/projects"
            className="text-sm sm:text-base text-gray-400 flex items-center gap-2 ml-4"
          >
            View All Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 text-left mb-12 md:mb-16 max-w-2xl">
          A selection of projects across different areas, focused on delivering
          effective results.
        </p>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.length > 0
            ? projects.map((project) => {
                const isTouched = touchedId === project.id;
                return (
                  <div
                    key={project.id}
                    onClick={() => setTouchedId(isTouched ? null : project.id)}
                    className={`group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg overflow-hidden cursor-pointer transition hover:border-white/30 hover:bg-white/10 ${
                      isTouched ? "border-white/30 bg-white/10" : ""
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className={`w-full h-full object-cover transition duration-300 group-hover:scale-105 ${
                          isTouched ? "scale-105" : ""
                        }`}
                      />
                      <div
                        className={`absolute inset-0 transition duration-300 group-hover:bg-black/50 ${
                          isTouched ? "bg-black/50" : ""
                        }`}
                      ></div>

                      {/* Project Link Buttons */}
                      <div
                        className={`absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2 transition duration-300 flex-wrap opacity-0 group-hover:opacity-100 ${
                          isTouched ? "opacity-100" : ""
                        }`}
                      >
                        {project.website && project.website !== "#" && (
                          <a
                            href={project.website}
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white text-black rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition shadow-lg"
                            title="View Website"
                          >
                            <img
                              src="/assets/icons/web.svg"
                              alt="Website"
                              className="w-6 h-6 brightness-0"
                            />
                          </a>
                        )}
                        {project.source && project.source !== "#" && (
                          <a
                            href={project.source}
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white text-black rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition shadow-lg"
                            title="View Source"
                          >
                            <img
                              src="/assets/icons/external-link.svg"
                              alt="Source"
                              className="w-5 h-5 brightness-0"
                            />
                          </a>
                        )}
                        {project.figmaLink && project.figmaLink !== "#" && (
                          <a
                            href={project.figmaLink}
                            className="px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center bg-white text-black rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition shadow-lg"
                            title="View Figma"
                          >
                            Figma
                          </a>
                        )}
                        {project.behanceLink && project.behanceLink !== "#" && (
                          <a
                            href={project.behanceLink}
                            className="px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center bg-white text-black rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-100 transition shadow-lg"
                            title="View Behance"
                          >
                            Behance
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-7">
                      <h3
                        className={`text-lg sm:text-xl font-bold transition mb-2 sm:mb-3 ${
                          isTouched
                            ? "text-blue-700"
                            : "text-white group-hover:text-blue-700"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })
            : // Skeleton loading placeholders
              [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse"
                >
                  <div className="w-full aspect-video bg-white/10"></div>
                  <div className="flex-1 p-4 sm:p-6 md:p-7">
                    <div className="h-5 bg-white/10 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                    <div className="h-4 bg-white/10 rounded w-5/6 mb-6"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-white/10 rounded-full w-16"></div>
                      <div className="h-6 bg-white/10 rounded-full w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
