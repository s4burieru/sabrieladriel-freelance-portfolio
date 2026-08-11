import PageLayout from "../layout/PageLayout";

const LIFE_IMAGES = [
  { src: "/assets/images/life-1.jpg", alt: "Life moment 1" },
  { src: "./assets/images/life-2.jpg", alt: "Life moment 2" },
  { src: "./assets/images/life-3.jpg", alt: "Life moment 3" },
  { src: "./assets/images/life-4.jpeg", alt: "Life moment 4" },
  { src: "./assets/images/life-5.webp", alt: "Life moment 5" },
  { src: "./assets/images/life-6.jpg", alt: "Life moment 6" },
  { src: "./assets/images/life-7.png", alt: "Life moment 7" },
  { src: "./assets/images/life-8.jpg", alt: "Life moment 8" },
  { src: "./assets/images/life-9.jpg", alt: "Life moment 9" },
  { src: "./assets/images/life-10.webp", alt: "Life moment 10" },
  { src: "./assets/images/life-11.jpg", alt: "Life moment 11" },
  { src: "./assets/images/life-12.jpg", alt: "Life moment 12" },
  { src: "./assets/images/life-13.jpg", alt: "Life moment 13" },
  { src: "./assets/images/life-14.jpg", alt: "Life moment 14" },
  { src: "./assets/images/life-15.jpg", alt: "Life moment 15" },
  { src: "./assets/images/life-16.webp", alt: "Life moment 16" },
  { src: "./assets/images/life-17.jpeg", alt: "Life moment 17" },
  { src: "./assets/images/life-18.jpg", alt: "Life moment 18" },
  { src: "./assets/images/life-19.jpg", alt: "Life moment 19" },
  { src: "./assets/images/life-20.jpg", alt: "Life moment 20" },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 30s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex items-center justify-center px-6 sm:px-6 md:px-8 pt-32 md:pt-32 pb-10 md:pb-10"
        style={{ minHeight: "100vh" }}
      >
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column - Profile Section */}
            <div className="flex flex-col items-start">
              <div className="relative w-full max-w-md aspect-square rounded-2xl border-2 border-white/10 bg-linear-to-br from-blue-500/10 to-purple-500/10 overflow-hidden mb-6">
                <img
                  src="/assets/images/hero-picture.jpeg"
                  alt="Sabriel Adriel"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <span>
                    <img
                      src="assets/icons/birthday.svg"
                      className="w-4 h-4"
                      alt="Birthday"
                    />
                  </span>
                  <span>20 years old</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <img
                      src="assets/icons/school.svg"
                      className="w-4 h-4"
                      alt="School"
                    />
                  </span>
                  <span>IT @ ESCR</span>
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="flex flex-col">
              <h1
                className="font-bold flex items-center gap-2 text-white"
                style={{ fontSize: "clamp(24px, 5vw, 40px)" }}
              >
                Sabriel Adriel San Agustin
              </h1>

              <p className="text-blue-600 font-semibold text-lg mb-6">
                IT Junior & Freelancer
              </p>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
                <p>
                  I'm an IT student and freelancer with a deep passion for
                  technology that started when I was young. My curiosity grew
                  from exploring skills, software, and digital tools on my own,
                  turning that early interest into a drive to explore,
                  experiment, and build.
                </p>

                <p>
                  Now I'm exploring various areas of tech, and I'm discovering
                  my real passion lies in cybersecurity, particularly in OSINT
                  investigation. It&rsquo;s a field that challenges me to think
                  critically, stay curious, and continuously learn.
                </p>

                <p>
                  I believe in taking initiative &mdash; when you see a
                  problem or an opportunity, dive in, build, and experiment.
                  Test your ideas, learn from mistakes, and keep improving
                  along the way. Every step is a chance to grow and make a
                  difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where It All Started Section */}
      <section
        id="where-it-started"
        className="flex items-center justify-center px-6 sm:px-6 md:px-8 py-28 md:py-32 relative z-10"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col">
              <h2
                className="font-bold text-white"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                How It All Started
              </h2>

              <p className="text-blue-600 font-semibold text-lg mb-6">
                Where my interest in tech began
              </p>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  As a kid, I was naturally drawn to computers and the digital
                  world, often spending time exploring, testing things, and
                  trying to understand what was happening behind the screen.
                  What began as simple exploration slowly turned into a genuine
                  passion.
                </p>

                <p>
                  That young kid in the photo was fascinated by how things
                  worked and the endless possibilities of the digital world.
                  From those early moments of curiosity and exploration,
                  I&rsquo;ve grown into someone who builds, creates, and
                  pushes beyond what I thought was possible.
                </p>

                <p>
                  It&rsquo;s a reminder that every expert was once a beginner.
                  Every skill and achievement starts with curiosity and a
                  willingness to learn. That same spirit drives me today, as I
                  continue to stay curious, keep learning, and push myself to
                  improve beyond what I already know.
                </p>
              </div>
            </div>

            {/* Right Column - Young Picture */}
            <div className="flex flex-col items-center md:items-end">
              <div className="relative w-full max-w-md aspect-square rounded-2xl border-2 border-white/10 bg-linear-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
                <img
                  src="/assets/images/kid-me.jpg"
                  alt="Young Sabriel Adriel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life, As It Is Section */}
      <section
        id="life-as-it-is"
        className="w-full flex flex-col items-center justify-center overflow-hidden py-12 md:py-20 relative z-10 px-6 sm:px-6 md:px-8"
      >
        {/* Header Content */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center w-full max-w-6xl px-6 sm:px-6 md:px-8 py-4 sm:py-6">
            <h2
              className="font-bold text-white text-center"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Life, As It Is
            </h2>

            <p className="text-base font-semibold sm:text-lg text-blue-600 text-center mb-12 md:mb-16 max-w-2xl">
              A collection of moments that reflect who I am beyond the screen
            </p>
          </div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="w-full flex justify-center">
          <div
            className="w-full max-w-6xl overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div
              className="flex gap-6 animate-infinite-scroll"
              style={{ width: "max-content" }}
            >
              {/* Original Images */}
              {LIFE_IMAGES.map((img, index) => (
                <div
                  key={`orig-${index}`}
                  className="flex flex-col items-center gap-2 shrink-0"
                >
                  <div className="w-56 h-72 sm:w-94 sm:h-110 rounded-lg overflow-hidden bg-linear-to-br from-blue-500/30 to-purple-500/30 border border-white/10 hover:border-white/30 transition group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate Images for Seamless Loop */}
              {LIFE_IMAGES.map((img, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex flex-col items-center gap-2 shrink-0"
                >
                  <div className="w-56 h-72 sm:w-94 sm:h-110 rounded-lg overflow-hidden bg-linear-to-br from-blue-500/30 to-purple-500/30 border border-white/10 hover:border-white/30 transition group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}