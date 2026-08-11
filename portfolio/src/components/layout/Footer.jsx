import { useState } from "react";
import { SOCIAL_LINKS } from "../../data/socialLinks";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="border-t border-white/10 mt-16 md:mt-24 py-12 md:py-16 px-6 sm:px-6 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-start md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold text-white">Sabriel Adriel</h3>
              <img
                src="/assets/icons/verified-badge.svg"
                alt="Verified"
                title="Verified"
                className="w-6 h-6"
              />
            </div>
            <p className="text-base text-gray-400">IT Student & Freelancer</p>
            <p className="text-base text-gray-500 mt-3">
              Building solutions that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="/"
                className="text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col items-start">
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-wide">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="/services"
                className="text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="/blog"
                className="text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-base font-semibold text-white mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-3 flex-wrap">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  title={social.title}
                  className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40"
                >
                  <img src={social.img} alt={social.alt} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            &copy; {year} Sabriel Adriel. All rights
            reserved.
          </p>
          <p>Created with ❤️ and ☕ in Rizal, PH.</p>
        </div>
      </div>
    </footer>
  );
}