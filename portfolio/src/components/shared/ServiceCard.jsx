/**
 * Reusable service card with number, title, description, and link.
 */
export default function ServiceCard({ service, onViewDetails }) {
  return (
    <div className="group flex flex-col p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg hover:border-white/30 hover:bg-white/10 transition">
      {/* Icon/Number */}
      <div className="w-12 h-12 mb-4 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-lg font-bold text-blue-600 group-hover:border-white/40 transition">
        {service.number}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 flex-1">
        {service.description}
      </p>

      {onViewDetails ? (
        <button
          onClick={() => onViewDetails(service)}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center gap-2"
        >
          View Details
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
        </button>
      ) : (
        <a
          href={service.link}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center gap-2"
        >
          View Details
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
      )}
    </div>
  );
}