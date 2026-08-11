/**
 * Reusable project card with thumbnail, links, description, and tech stack.
 * Supports tap-to-hover on touch devices via the `touched` prop.
 */
export default function ProjectCard({ project, isTouched, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`group flex flex-col h-full min-h-110 sm:min-h-120 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg overflow-hidden cursor-pointer transition hover:border-white/30 hover:bg-white/10 ${
        isTouched ? "border-white/30 bg-white/10" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video rounded-none overflow-hidden transition">
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
}