import { useState, useEffect } from "react";
import PageLayout from "../layout/PageLayout";
import ServiceCard from "../shared/ServiceCard";
import { services, faqs } from "../../data/services";
import { servicesData } from "../../data/servicesDetail.jsx";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);

  useEffect(() => {
    // Handle routing based on URL query params
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get("service");

    if (serviceId && servicesData[serviceId]) {
      setSelectedService(serviceId);
      setIsDetailView(true);
      // Scroll to top when viewing service detail
      window.scrollTo(0, 0);
    } else {
      setSelectedService(null);
      setIsDetailView(false);
    }
  }, [window.location.search]);

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    setIsDetailView(true);
    window.scrollTo(0, 0);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
    setIsDetailView(false);
    // Remove query param from URL
    const url = new URL(window.location.href);
    url.searchParams.delete("service");
    window.history.pushState({}, "", url);
  };

  const data = selectedService ? servicesData[selectedService] : null;

  return (
    <PageLayout>
      <style>{`
        #detailed-services [data-accordion-summary] {
          -webkit-tap-highlight-color: transparent;
          -webkit-appearance: none;
          appearance: none;
          outline: none;
          transition: none;
          transform: none;
          box-shadow: none;
        }

        #detailed-services [data-accordion-summary]::-webkit-details-marker {
          display: none;
        }

        #detailed-services [data-accordion-summary]::marker {
          content: "";
        }

        #detailed-services [data-accordion-summary]:hover,
        #detailed-services [data-accordion-summary]:focus,
        #detailed-services [data-accordion-summary]:focus-visible {
          background: transparent !important;
          color: inherit !important;
          transform: none !important;
          box-shadow: none !important;
        }

        /* Accordion icon rotation animation */
        [data-accordion-icon] {
          transition: transform 0.3s ease;
        }

        details[open] [data-accordion-icon] {
          transform: rotate(180deg);
        }

        /* Smooth open/close animation for details content */
        details[open] [data-accordion-icon] svg {
          transition: transform 0.3s ease;
        }
      `}</style>

      {/* Hero Section */}
      <section
        id="services-hero"
        className="flex items-center justify-center px-6 sm:px-6 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24"
        style={{
          paddingTop: isDetailView ? "clamp(60px, 8vw, 100px)" : undefined,
        }}
      >
        <div className="max-w-6xl w-full text-center">
          <h1
            id="hero-title"
            className="font-bold mb-6 text-white"
            style={{ fontSize: "clamp(32px, 6vw, 52px)" }}
          >
            {isDetailView ? "" : "What I Do"}
          </h1>
          <p
            id="hero-desc"
            className={`text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              isDetailView ? "hidden" : ""
            }`}
          >
            Delivering high-quality digital solutions tailored to your needs.
            Explore the services I offer to help your projects succeed.
          </p>
        </div>
      </section>

      {/* Dynamic Service Detail Section */}
      {isDetailView && data && (
        <section
          id="service-detail"
          className="px-6 sm:px-6 md:px-8 pb-24 flex justify-center"
        >
          <div className="w-full max-w-4xl">
            <button
              onClick={handleBackToServices}
              className="text-blue-700 hover:text-blue-500 transition mb-12 inline-flex items-center gap-2"
            >
              <span>&larr;</span>
              Back to All Services
            </button>

            {/* Service Header */}
            <div className="mb-12 p-8 rounded-2xl border border-white/14 bg-gray/10 relative overflow-hidden">
              {/* Enhanced glow effects */}
              <div
                className="absolute -right-8 -top-8 w-40 h-40 rounded-full blur-3xl"
                style={{ backgroundColor: data.accentGlow }}
              />
              <div
                className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full blur-3xl"
                style={{ backgroundColor: data.accentGlow }}
              />
              <div
                className="absolute right-1/4 top-1/4 w-32 h-32 rounded-full blur-3xl"
                style={{ backgroundColor: data.accentGlow }}
              />
              <div
                className="absolute left-1/3 bottom-1/4 w-28 h-28 rounded-full blur-3xl"
                style={{ backgroundColor: data.accentGlow }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold border border-white/20 bg-white/10 text-gray-200">
                    {data.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  {data.title}
                </h2>
                <p className={`text-lg sm:text-xl font-bold ${data.textColor} mb-6`}>
                  {data.heroDesc}
                </p>
                <p className="text-base text-gray-300 leading-relaxed max-w-3xl">
                  {data.summary}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {data.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-gray-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div id="detail-content" className="space-y-12">
              {data.content}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Services Grid */}
      {!isDetailView && (
        <section
          id="detailed-services"
          className="px-6 sm:px-6 md:px-8 pb-24 flex justify-center"
        >
          <div className="w-full max-w-6xl">
            {/* Services Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onViewDetails={(s) =>
                    handleServiceClick(s.link.split("=")[1])
                  }
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Simple Why Me Section */}
      {!isDetailView && (
        <section
          id="why-me-section"
          className="py-16 md:py-24 px-6 sm:px-6 md:px-8 flex justify-center"
        >
          <div className="max-w-4xl w-full">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Why Work With Me?
              </h2>
              <div className="text-base sm:text-lg text-gray-400 mt-7 max-w-2xl mx-auto">
                A quick look at the strengths I bring to every project.
              </div>
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden shadow-lg"
                >
                  <summary
                    data-accordion-summary
                    className="flex items-center justify-between gap-4 px-6 py-5 list-none cursor-pointer text-gray-300 group-open:border-b group-open:border-white/10 group-open:rounded-b-none"
                  >
                    <div className="font-semibold text-base sm:text-lg">
                      {faq.question}
                    </div>
                    <span
                      data-accordion-icon
                      className="shrink-0 w-9 h-9 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="m5 15 7-7 7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 py-6 text-gray-400 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {!isDetailView && (
        <section
          id="cta-section"
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
                Whether you have an exciting project idea, need specific
                services, or just want to chat about technology, I'd love to
                hear from you.
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
                    ></path>
                  </svg>
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}