export default function CTASection() {
  return (
    <section
      id="cta"
      className="pt-32 pb-28 md:pt-40 md:pb-36 px-6 sm:px-6 md:px-8 flex justify-center"
    >
      <div className="flex flex-col items-center w-full max-w-6xl">
        {/* CTA Card */}
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg p-8 sm:p-12 md:p-16 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Ready to work together?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you have an exciting project idea, need specific services,
            or just want to chat about technology, I'd love to hear from
            you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="/contact"
              className="w-full sm:w-52 px-5 sm:px-6 h-12 sm:h-14 bg-white text-black rounded-full hover:bg-gray-200 transition flex items-center justify-center text-sm sm:text-base gap-2"
            >
              <svg
                className="w-4 h-4 brightness-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}