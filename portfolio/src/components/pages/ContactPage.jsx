import { useState, useEffect } from "react";
import PageLayout from "../layout/PageLayout";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../data/emailConfig";

const CONTACT_EMAIL = "savvv.business@gmail.com";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({ message: "Please fill in all fields", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ message: "", type: "" });

    try {
      // Check if EmailJS is configured
      if (
        EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
        EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID" ||
        EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID"
      ) {
        throw new Error("EmailJS not configured");
      }

      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to send message");
      }

      // Show success message
      setStatus({
        message: "Message sent successfully! I'll be in touch soon.",
        type: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      const userFriendlyMessage =
        error.message === "EmailJS not configured"
          ? `Form service not configured yet. Please contact me directly at ${CONTACT_EMAIL}`
          : `Failed to send message. Please try again or email me directly at ${CONTACT_EMAIL}.`;
      setStatus({ message: userFriendlyMessage, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section
        id="hero"
        className="flex items-center justify-center px-6 sm:px-6 md:px-8 pt-36 md:pt-44 pb-32 md:pb-40"
        style={{ minHeight: "auto" }}
      >
        <div className="max-w-6xl w-full">
          {/* Contact Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1
              className="font-bold mb-4 text-white"
              style={{ fontSize: "clamp(32px, 6vw, 52px)" }}
            >
              Get in Touch
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Have a project in mind or just want to chat? I'd love to hear
              from you. Feel free to reach out anytime.
            </p>
          </div>

          {/* Contact Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
            {/* Left Column - Contact Info */}
            <div className="md:col-span-1 flex flex-col gap-6">
              {/* Email */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-lg shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/60 flex items-center justify-center shrink-0">
                    <img
                      src="/assets/icons/email.svg"
                      alt="Email"
                      width="18"
                      height="18"
                    />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    Email
                  </h3>
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-gray-300 hover:text-blue-400 transition break-all text-sm font-medium"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* Location */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 backdrop-blur-lg shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/60 flex items-center justify-center shrink-0">
                    <img
                      src="/assets/icons/location.svg"
                      alt="Location"
                      width="20"
                      height="20"
                    />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    Location
                  </h3>
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  Philippines • Remote
                </p>
              </div>

              {/* Availability */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 backdrop-blur-lg shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/60 flex items-center justify-center shrink-0">
                    <img
                      src="/assets/icons/availability.svg"
                      alt="Availability"
                      width="18"
                      height="18"
                    />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    Availability
                  </h3>
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  Available for freelance projects
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="md:col-span-2">
              <div className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Name Field */}
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-white/90"
                    >
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="px-4 py-3 rounded-lg border border-white/15 bg-white/8 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/15 transition-all duration-200 backdrop-blur-sm"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-white/90"
                    >
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="px-4 py-3 rounded-lg border border-white/15 bg-white/8 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/15 transition-all duration-200 backdrop-blur-sm"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-white/90"
                    >
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="px-4 py-3 rounded-lg border border-white/15 bg-white/8 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/15 transition-all duration-200 backdrop-blur-sm"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-white/90"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project or interest..."
                      className="px-4 py-3 rounded-lg border border-white/15 bg-white/8 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/15 transition-all duration-200 backdrop-blur-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 mt-2 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white transition-all duration-200 shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {/* Form Status Message */}
                  {status.message && (
                    <div
                      className={`text-center text-sm ${
                        status.type === "success"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                </form>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4 font-medium">
                  Or connect on social media:
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://www.linkedin.com/in/sabrieladriel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg border text-white border-white/15 bg-white/8 hover:bg-white/15 hover:border-blue-500/30 transition-all duration-200 text-sm font-medium backdrop-blur-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/s4burieru_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg border text-white border-white/15 bg-white/8 hover:bg-white/15 hover:border-blue-500/30 transition-all duration-200 text-sm font-medium backdrop-blur-sm"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/sabrieladriel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg border text-white border-white/15 bg-white/8 hover:bg-white/15 hover:border-blue-500/30 transition-all duration-200 text-sm font-medium backdrop-blur-sm"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}