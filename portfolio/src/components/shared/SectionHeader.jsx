/**
 * Reusable section header with label, title, description, and optional link.
 */
export default function SectionHeader({ label, title, description, link }) {
  return (
    <>
      <div className="text-sm uppercase tracking-widest text-blue-600 mb-3 font-semibold">
        {label}
      </div>

      <div className="w-full flex items-center justify-between mb-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-left">
          {title}
        </h2>
        {link && (
          <a
            href={link.href}
            className="text-sm sm:text-base text-gray-400 flex items-center gap-2 ml-4"
          >
            {link.label}
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

      {description && (
        <p className="text-base sm:text-lg text-gray-400 text-left mb-12 md:mb-16 max-w-2xl">
          {description}
        </p>
      )}
    </>
  );
}