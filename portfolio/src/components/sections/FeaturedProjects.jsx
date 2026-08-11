import { useState, useEffect, useRef } from "react";
import SectionHeader from "../shared/SectionHeader";
import ProjectCard from "../shared/ProjectCard";

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
        <SectionHeader
          label="PORTFOLIO"
          title="Featured Projects."
          description="A selection of projects across different areas, focused on delivering effective results."
          link={{ href: "/projects", label: "View All Projects" }}
        />

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.length > 0
            ? projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isTouched={touchedId === project.id}
                  onToggle={() =>
                    setTouchedId(touchedId === project.id ? null : project.id)
                  }
                />
              ))
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