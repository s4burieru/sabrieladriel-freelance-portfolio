export const servicesData = {
  "web-dev": {
    title: "Website Development",
    heroDesc: "Build fast, modern, responsive websites.",
    badge: "FRONTEND DEVELOPMENT",
    summary:
      "Responsive websites built with a clear process, polished visuals, and a focus on launch-ready results.",
    highlights: [
      "Custom Website Design",
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
            {["Consultation", "Planning", "Design Review", "Development", "Testing", "Deployment", "Revisions"].map((step, i) => (
              <div key={step} className="p-5 rounded-2xl border border-white/10 bg-white/3 text-center group hover:border-blue-500/20 hover:bg-blue-500/3 transition-all duration-300">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-700 font-bold text-lg">{i + 1}</div>
                <h4 className="font-semibold text-white text-sm">{step}</h4>
              </div>
            ))}
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
                  <svg className="w-5 h-5 text-cyan-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
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

        {/* Deliverables */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-cyan-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">Deliverables</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["PNG", "JPG", "PDF", "Figma File", "Editable Source Files"].map((item) => (
              <span key={item} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">{item}</span>
            ))}
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

        {/* Includes */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1 h-7 bg-pink-500 rounded-full shrink-0"></span>
            <h2 className="text-2xl font-bold text-white">What's Included</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Color Correction", "Audio Cleanup", "Captions", "Motion Graphics", "Transitions", "Background Music"].map((item) => (
              <span key={item} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300">{item}</span>
            ))}
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