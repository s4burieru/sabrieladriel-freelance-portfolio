import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Exchange rate: 1 PHP ≈ 0.017 USD (roughly 58 PHP = 1 USD)
const PHP_TO_USD_RATE = 0.01724;

/**
 * Extracts a numeric price from a PHP price string (e.g. "₱3,000+") and converts to USD.
 * @param {string} phpStr - The PHP price string.
 * @returns {string} Formatted USD price string with ~ prefix.
 */
function convertToUSD(phpStr) {
  // Remove ₱, commas, + signs, and any non-numeric chars except decimal
  const cleaned = phpStr.replace(/[₱,+\s]/g, "").trim();
  const num = parseFloat(cleaned);
  if (isNaN(num)) return "";
  const usd = num * PHP_TO_USD_RATE;
  return `~$${Math.round(usd)}`;
}

const servicesData = {
  "web-dev": {
    title: "Frontend Website Development",
    heroDesc: "Build fast, modern, responsive websites.",
    badge: "FRONTEND DEVELOPMENT",
    summary:
      "Responsive websites built with a clear process, polished visuals, and a focus on launch-ready results.",
    highlights: [
      "Custom Webdsite Design",
      "Fast and Responsive",
      "Built for Business Growth",
    ],
    accent: "rgba(59, 130, 246, 0.18)",
    accentGlow: "rgba(96, 165, 250, 0.34)",
    textColor: "text-blue-700",
    textColorStrong: "text-blue-400",
    content: (
      <>
        {/* Overview */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-blue-700 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Pricing Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-blue-500/[0.07] to-transparent p-8">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-5 h-5 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                  <h3 className="text-xl font-bold text-white">Perfect For</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Businesses</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Students</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Startups</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Freelancers</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Personal Brands</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Organizations</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Agencies</li>
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-blue-500/[0.07] to-transparent p-8">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-5 h-5 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                  <h3 className="text-xl font-bold text-white">Services Included</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Responsive Design</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Mobile Optimization</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Landing Pages</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Portfolio Websites</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Business Websites</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Website Redesign</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Frontend Development</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> UI Implementation</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Content Writing</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-700 rounded-full shrink-0"></span> Deployment Assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-blue-700 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Process</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-white/10 bg-white/3 text-center group hover:border-blue-500/20  hover:bg-blue-500/3 transition-all duration-300">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 font-bold text-lg">1</div>
              <h4 className="font-semibold text-white text-sm">Consultation</h4>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/3 text-center group hover:border-blue-500/20  hover:bg-blue-500/3 transition-all duration-300">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 font-bold text-lg">2</div>
              <h4 className="font-semibold text-white text-sm">Planning</h4>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/3 text-center group hover:border-blue-500/20  hover:bg-blue-500/3 transition-all duration-300">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 font-bold text-lg">3</div>
              <h4 className="font-semibold text-white text-sm">Design Review</h4>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/3 text-center group hover:border-blue-500/20  hover:bg-blue-500/3 transition-all duration-300">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 font-bold text-lg">4</div>
              <h4 className="font-semibold text-white text-sm">Development</h4>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/3 text-center group hover:border-blue-500/20  hover:bg-blue-500/3 transition-all duration-300">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 font-bold text-lg">5</div>
              <h4 className="font-semibold text-white text-sm">Testing</h4>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/3 text-center group hover:border-blue-500/20 hover:bg-blue-500/3 transition-all duration-300">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 font-bold text-lg">6</div>
              <h4 className="font-semibold text-white text-sm">Deployment</h4>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/3 text-center group hover:border-blue-500/20 hover:bg-blue-500/3 transition-all duration-300">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 font-bold text-lg">7</div>
              <h4 className="font-semibold text-white text-sm">Revisions</h4>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-blue-700 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Pricing Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Starter</h3>
                <p className="text-sm text-gray-500 mb-4">Perfect for getting started</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-blue-700">₱5,000+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$80 USD
                </div>
                <ul className="space-y-3.5 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>1 Page Website</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Fully Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Contact Form Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Basic SEO Setup</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-700 text-center text-sm font-medium hover:bg-blue-500/20 hover:text-white transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Professional</h3>
                <p className="text-sm text-gray-500 mb-4">Best value for growing brands</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-blue-700">₱12,000+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$194 USD
                </div>
                <ul className="space-y-3.5 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Up to 5 Pages</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Fully Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Custom Animations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Contact Form Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Image Gallery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>Deployment Assistance</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-700 text-center text-sm font-medium hover:bg-blue-500/20 hover:text-white transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m0 0a6.023 6.023 0 01-2.77-.896m0 0A5.964 5.964 0 017.73 9.728"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Premium</h3>
                <p className="text-sm text-gray-500 mb-4">For complex, large-scale projects</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-blue-700">₱20,000+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$323 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                  For larger projects with custom requirements. Get a tailored solution built to your exact specifications.
                </p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-700 text-center text-sm font-medium hover:bg-blue-500/20 hover:text-white transition-all duration-300">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  multimedia: {
    title: "Multimedia Design",
    heroDesc: "Design that communicates and converts.",
    badge: "Creative Design",
    summary:
      "Clean visual systems and branded assets that keep your content consistent across platforms.",
    highlights: [
      "UI/UX Prototyping",
      "Branding Design",
      "Social Media Visuals",
    ],
    accent: "rgba(14, 165, 233, 0.18)",
    accentGlow: "rgba(34, 211, 238, 0.30)",
    textColor: "text-cyan-400",
    textColorStrong: "text-cyan-400",
    content: (
      <>
        {/* Overview */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-cyan-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Overview</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-cyan-500/[0.07] to-transparent p-8">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-5 h-5 text-cyan-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                  <h3 className="text-xl font-bold text-white">Services</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Social Media Graphics</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Posters</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Flyers</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Tarpaulins</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Logos</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Brand Assets</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> UI Design</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Mockups</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Mobile App UI</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Wireframes</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Prototypes</li>
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-cyan-500/[0.07] to-transparent p-8">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-5 h-5 text-cyan-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <h3 className="text-xl font-bold text-white">Tools</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Figma</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Adobe Photoshop</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Adobe Illustrator</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></span> Canva</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-cyan-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Pricing Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.053 3H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zM19.053 3h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zM9.053 13H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zM19.053 13h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Social Graphics</h3>
                <p className="text-sm text-gray-500 mb-4">Per design</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-cyan-500">₱500+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$9 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Single design project for social media graphics.</p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-center text-sm font-medium hover:bg-cyan-500/20 hover:text-white transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Branding Kit</h3>
                <p className="text-sm text-gray-500 mb-4">Complete brand identity</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-cyan-500">₱2,500+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$43 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Logo + Color Palette + Typography for your brand.</p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-center text-sm font-medium hover:bg-cyan-500/20 hover:text-white transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">UI Design</h3>
                <p className="text-sm text-gray-500 mb-4">Screen designs & mockups</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-cyan-500">₱5,000+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$86 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Landing page or app screens designed in Figma.</p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-center text-sm font-medium hover:bg-cyan-500/20 hover:text-white transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-cyan-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Deliverables</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">PNG</span>
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">JPG</span>
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">PDF</span>
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">Figma File</span>
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">Editable Source Files</span>
          </div>
        </div>
      </>
    ),
  },
  "video-editing": {
    title: "Video Editing",
    heroDesc: "Transform raw footage into engaging content.",
    badge: "Content Editing",
    summary:
      "Tighter pacing, cleaner storytelling, and motion-ready edits for short and long-form video.",
    highlights: [
      "Content Creation Editing",
      "Color Correction",
      "Motion Graphics",
    ],
    accent: "rgba(236, 72, 153, 0.18)",
    accentGlow: "rgba(251, 146, 60, 0.26)",
    textColor: "text-pink-400",
    textColorStrong: "text-pink-400",
    content: (
      <>
        {/* Overview */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-pink-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Overview</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-pink-500/[0.07] to-transparent p-8">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-5 h-5 text-pink-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                  <h3 className="text-xl font-bold text-white">Services</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></span> YouTube Editing</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></span> Reels</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></span> TikTok</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></span> Facebook Videos</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></span> Promotional Videos</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></span> School Projects</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></span> Business Ads</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></span> Highlight Videos</li>
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-pink-500/[0.07] to-transparent p-8">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-5 h-5 text-pink-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <h3 className="text-xl font-bold text-white">Tools</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></span> CapCut</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-pink-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Pricing Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.97 1.97a.75.75 0 011.06 0l3.5 3.5a.75.75 0 01-1.06 1.06l-2.22-2.22V9.5a.75.75 0 01-1.5 0V4.31L9.47 6.53a.75.75 0 01-1.06-1.06l3.5-3.5zM9.75 13a.75.75 0 01.75.75v3.94l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.22 2.22V13.75a.75.75 0 01.75-.75z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Short Form</h3>
                <p className="text-sm text-gray-500 mb-4">Up to 60 seconds</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-pink-500">₱800+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$14 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Quick edits for Reels, TikTok, and social clips.</p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-pink-500/20 bg-pink-500/5 text-pink-500 text-center text-sm font-medium hover:bg-pink-500/20 hover:text-white transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.84 3.75a2.25 2.25 0 012.42 3.29M12 18.75a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 00.75 7.5v9a2.25 2.25 0 002.25 2.25h9z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Long Form</h3>
                <p className="text-sm text-gray-500 mb-4">5-15 minutes</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-pink-500">₱2,000+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$34 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Ideal for YouTube videos and longer content.</p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-pink-500/20 bg-pink-500/5 text-pink-500 text-center text-sm font-medium hover:bg-pink-500/20 hover:text-white transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m0 0a6.023 6.023 0 01-2.77-.896m0 0A5.964 5.964 0 017.73 9.728"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Custom</h3>
                <p className="text-sm text-gray-500 mb-4">Tailored to your needs</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-pink-500">₱3,000+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$52 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">For specialized projects with custom requirements.</p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-pink-500/20 bg-pink-500/5 text-pink-500 text-center text-sm font-medium hover:bg-pink-500/20 hover:text-white transition-all duration-300">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Includes */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-pink-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">What's Included</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">Color Correction</span>
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">Audio Cleanup</span>
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">Captions</span>
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">Motion Graphics</span>
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">Transitions</span>
            <span className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">Background Music</span>
          </div>
        </div>
      </>
    ),
  },
  osint: {
    title: "Open-Source Intelligence",
    heroDesc: "Digital Research & Analysis",
    badge: "Research & Analysis",
    summary:
      "Ethical research using publicly available information to gather, verify, and organize digital evidence into structured reports.",
    highlights: [
      "Digital Footprint Analysis",
      "Fact Checking",
      "Public Source Research",
    ],
    accent: "rgba(34, 197, 94, 0.16)",
    accentGlow: "rgba(74, 222, 128, 0.26)",
    textColor: "text-green-400",
    textColorStrong: "text-green-400",
    content: (
      <>
        {/* Overview */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-green-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Overview</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-green-500/[0.07] to-transparent p-8">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-green-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                  <h3 className="text-xl font-bold text-white">Services</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Username Investigation</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Public Digital Footprint Analysis</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Email Enumeration (Public Sources Only)</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Domain & WHOIS Research</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Company Background Research</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Brand Mention Monitoring</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Social Media Profile Research</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Website & Infrastructure Research</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Archive Research (Wayback Machine)</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Data Collection & Verification</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Timeline Creation</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Fact Checking</li>
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-green-500/[0.07] to-transparent p-8">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-green-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <h3 className="text-xl font-bold text-white">Tools</h3>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Google Advanced Search</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Google Dorking</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Maltego (Basic)</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> SpiderFoot (Basic)</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Shodan</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> VirusTotal</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Intelligence X</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Have I Been Pwned</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Wayback Machine</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> WHOIS & DNS Lookup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-green-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Pricing Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Basic OSINT Research</h3>
                <p className="text-sm text-gray-500 mb-4">1 investigation target</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-green-500">₱1,500+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$26 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Single investigation target with full report.</p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-green-500/20 bg-green-500/5 text-green-500 text-center text-sm font-medium hover:bg-green-500/20 hover:text-white transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Business Research</h3>
                <p className="text-sm text-gray-500 mb-4">Company & domain research</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-green-500">₱3,000+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$52 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">In-depth company and domain investigation.</p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-green-500/20 bg-green-500/5 text-green-500 text-center text-sm font-medium hover:bg-green-500/20 hover:text-white transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div>
                <div className="w-12 h-12 mb-5 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m0 0a6.023 6.023 0 01-2.77-.896m0 0A5.964 5.964 0 017.73 9.728"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Custom Research</h3>
                <p className="text-sm text-gray-500 mb-4">Custom investigation scope</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-green-500">₱4,500+</span>
                </div>
                <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  ~$78 USD
                </div>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">Tailored investigation to your specific needs.</p>
              </div>
              <div className="mt-auto">
                <a href="/contact" className="block w-full py-3 px-6 rounded-xl border border-green-500/20 bg-green-500/5 text-green-500 text-center text-sm font-medium hover:bg-green-500/20 hover:text-white transition-all duration-300">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables + Notice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-green-500/[0.07] to-transparent p-8">
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-green-500/10 blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h3 className="text-xl font-bold text-white">Deliverables</h3>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Professional PDF Report</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Executive Summary</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Investigation Methodology</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Evidence Links</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Screenshots</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Source Citations</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Timeline (When Applicable)</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span> Findings & Recommendations</li>
              </ul>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-linear-to-br from-yellow-500/6 to-transparent p-8">
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-yellow-500/10 blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
                <h3 className="text-xl font-bold text-white">Important Notice</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                I conduct investigations exclusively using legally accessible public information (OSINT). I do not hack accounts, bypass authentication, access private databases, purchase leaked information, or perform activities that violate laws or platform terms of service. Every investigation follows ethical OSINT practices with proper documentation and source attribution.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
};

const services = [
  {
    id: 1,
    number: '01',
    title: 'Website Development',
    description:
      'I create modern and responsive websites tailored to meet user needs, focusing on clean design, functionality, and smooth performance across all devices.',
    link: '/services?service=web-dev',
  },
  {
    id: 2,
    number: '02',
    title: 'Multimedia Design',
    description:
      'I produce modern visual designs that balance creativity and clarity, ensuring each work is engaging, purposeful, and visually effective.',
    link: '/services?service=multimedia',
  },
  {
    id: 3,
    number: '03',
    title: 'Video Editing',
    description:
      'I edit for content creators, businesses, and individuals. I produce high-quality videos with smooth transitions, effects, and color grading to tell your story effectively.',
    link: '/services?service=video-editing',
  },
  {
    id: 4,
    number: '04',
    title: 'Open-Source Intelligence',
    description:
      'I conduct OSINT research to support fact-checking, risk assessment, and intelligence gathering for personal and professional needs.',
    link: '/services?service=osint',
  },
];

const faqs = [
  {
    question: "Why hire you for more than one skill?",
    answer: "Skills across dev, design, and analysis allow for a well-rounded approach that keeps both the creative and technical sides of a project in balance."
  },
  {
    question: "How do you keep the project focused on my goals?",
    answer: "Your goals are the priority. I make sure the work aligns with your specific needs, timeline, and the outcome you want to achieve."
  },
  {
    question: "Why should I trust your process stays current?",
    answer: "I stay updated with the latest trends and technologies so I can provide modern, practical solutions that remain relevant over time."
  },
  {
    question: "Can you move fast without sacrificing quality?",
    answer: "I work with a clear process that keeps projects moving and helps avoid unnecessary delays, while still protecting quality."
  },
  {
    question: "How will I stay updated during the project?",
    answer: "I keep communication simple, direct, and consistent so feedback, changes, and next steps are always easy to follow."
  },
  {
    question: "What kind of support do you provide after launch?",
    answer: "I focus on being dependable throughout the entire project so you have someone you can count on at every stage."
  }
];

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
    url.searchParams.delete('service');
    window.history.pushState({}, '', url);
  };

  const data = selectedService ? servicesData[selectedService] : null;

  return (
    <>
      {/* Dark Horizon Glow */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(125% 125% at 50% 10%, #00000000 40%, #0d1a36 100%)',
        }}
      />

      {/* Dark White Dotted Grid Background */}
      <div
        className="fixed inset-0 z-5 pointer-events-none"
        style={{
          background: '#000000',
          backgroundImage:
            'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0',
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-20 flex-1 w-full">
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
        <Navbar />

        {/* Hero Section */}
        <section
          id="services-hero"
          className="flex items-center justify-center px-6 sm:px-6 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24"
          style={{ 
            paddingTop: isDetailView ? 'clamp(60px, 8vw, 100px)' : undefined 
          }}
        >
          <div className="max-w-6xl w-full text-center">
            <h1
              id="hero-title"
              className="font-bold mb-6 text-white"
              style={{ fontSize: 'clamp(32px, 6vw, 52px)' }}
            >
              {isDetailView ? '' : 'What I Do'}
            </h1>
            <p
              id="hero-desc"
              className={`text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${isDetailView ? 'hidden' : ''}`}
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
              <div 
                className="mb-12 p-8 rounded-2xl border border-white/14 bg-gray/10 relative overflow-hidden"
              >
                {/* Enhanced glow effects */}
                <div 
                  className="absolute -right-8 -top-8 w-40 h-40 rounded-full blur-3xl"
                  style={{
                    backgroundColor: data.accentGlow,
                  }}
                />
                <div 
                  className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full blur-3xl"
                  style={{
                    backgroundColor: data.accentGlow,
                  }}
                />
                <div 
                  className="absolute right-1/4 top-1/4 w-32 h-32 rounded-full blur-3xl"
                  style={{
                    backgroundColor: data.accentGlow,
                  }}
                />
                <div 
                  className="absolute left-1/3 bottom-1/4 w-28 h-28 rounded-full blur-3xl"
                  style={{
                    backgroundColor: data.accentGlow,
                  }}
                />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="px-4 py-1.5 rounded-full text-xs font-semibold border border-white/20 bg-white/10 text-gray-200"
                    >
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
                  <div
                    key={service.id}
                    className="group flex flex-col p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg hover:border-white/30 hover:bg-white/10 transition"
                  >
                    {/* Icon/Number */}
                    <div
                      className="w-12 h-12 mb-4 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-lg font-bold text-blue-600 group-hover:border-white/40 transition"
                    >
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
                    <button
                      onClick={() => handleServiceClick(service.link.split('=')[1])}
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
                        ></path>
                      </svg>
                    </button>
                  </div>
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
                <div
                  className="text-base sm:text-lg text-gray-400 mt-7 max-w-2xl mx-auto"
                >
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
                    <div
                      className="px-6 py-6 text-gray-400 text-sm sm:text-base leading-relaxed"
                    >
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
              <div
                className="w-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg p-8 sm:p-12 md:p-16 text-center"
              >
                {/* Heading */}
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8"
                >
                  Ready to work together?
                </h2>

                {/* Description */}
                <p
                  className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                  Whether you have an exciting project idea, need specific services,
                  or just want to chat about technology, I'd love to hear from you.
                </p>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
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

        <Footer />
      </div>
    </>
  );
}