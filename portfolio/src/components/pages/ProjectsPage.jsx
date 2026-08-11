import { useState, useEffect, useRef } from "react";
import PageLayout from "../layout/PageLayout";
import ProjectCard from "../shared/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [touchedId, setTouchedId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
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

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      searchTerm.trim() === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "" ||
      (Array.isArray(project.category)
        ? project.category.includes(selectedCategory)
        : project.category === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout>
      {/* Dropdown Styles */}
      <style>{`
        #sort-dropdown {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1.5rem;
          padding-right: 2.5rem;
        }

        #sort-dropdown option {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        #sort-dropdown option:hover {
          background-color: #2a2a2a;
        }

        #sort-dropdown option:checked {
          background-color: #3a3a3a;
          color: #ffffff;
        }
      `}</style>

      {/* Hero Section for Projects */}
      <section
        id="hero"
        className="flex items-center justify-center px-6 sm:px-6 md:px-8 pt-28 md:pt-24 pb-4 md:pb-4"
        style={{ minHeight: "50vh" }}
      >
        <div className="flex flex-col items-center max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center text-white">
            My Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-2xl">
            A complete showcase of projects I've built across various niches,
            highlighting adaptability, creativity, and real-world problem
            solving.
          </p>
        </div>
      </section>

      {/* All Projects Section */}
      <section
        ref={sectionRef}
        id="all-projects"
        className="pb-16 md:pb-24 px-6 sm:px-6 md:px-8 flex justify-center"
      >
        <div className="flex flex-col items-start w-full max-w-6xl">
          {/* Search and Sort Controls */}
          <div className="w-full mb-8 sm:mb-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            {/* Search Input */}
            <div className="flex-1 w-full sm:w-auto">
              <input
                type="text"
                id="search-input"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-black/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              id="sort-dropdown"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-black/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 focus:bg-white/20 transition cursor-pointer hover:bg-white/15"
            >
              <option value="">All Projects</option>
              <option value="graphic design">Graphic Design</option>
              <option value="video editing">Video Editing</option>
              <option value="osint">OSINT</option>
              <option value="web development">Web Development</option>
              <option value="desktop app development">
                Desktop App Development
              </option>
              <option value="uiux design">UI/UX Design</option>
            </select>
          </div>

          {/* Projects Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.length > 0
              ? filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isTouched={touchedId === project.id}
                    onToggle={() =>
                      setTouchedId(touchedId === project.id ? null : project.id)
                    }
                  />
                ))
              : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-400">
                    No projects found matching your criteria.
                  </p>
                </div>
              )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}