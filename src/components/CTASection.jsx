import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/30 to-background"></div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Wings and Logo */}
        <div className="relative mb-12 flex items-center justify-center">
          {/* Left Wing */}
          <svg className="absolute left-0 w-32 h-32 opacity-30" viewBox="0 0 100 100" fill="none">
            <path d="M50,50 Q30,30 10,40 Q20,50 30,45 Q40,48 50,50 Z" fill="url(#wingGradient)" />
            <path d="M50,50 Q35,25 15,30 Q25,45 35,42 Q42,46 50,50 Z" fill="url(#wingGradient)" opacity="0.7" />
            <path d="M50,50 Q40,20 20,20 Q30,40 40,38 Q45,44 50,50 Z" fill="url(#wingGradient)" opacity="0.5" />
            <defs>
              <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-primary flex items-center justify-center shadow-2xl shadow-primary/50 border-4 border-white/10">
              <span className="text-3xl font-bold text-white">SA</span>
            </div>
          </div>

          {/* Right Wing (Mirrored) */}
          <svg className="absolute right-0 w-32 h-32 opacity-30 scale-x-[-1]" viewBox="0 0 100 100" fill="none">
            <path d="M50,50 Q30,30 10,40 Q20,50 30,45 Q40,48 50,50 Z" fill="url(#wingGradient2)" />
            <path d="M50,50 Q35,25 15,30 Q25,45 35,42 Q42,46 50,50 Z" fill="url(#wingGradient2)" opacity="0.7" />
            <path d="M50,50 Q40,20 20,20 Q30,40 40,38 Q45,44 50,50 Z" fill="url(#wingGradient2)" opacity="0.5" />
            <defs>
              <linearGradient id="wingGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Rotating "Open to Work" Badge */}
          <div className="absolute -right-8 top-0 animate-spin-slow">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="8" fill="white" fontWeight="600">
                  <textPath href="#circlePath">
                    OPEN TO WORK • OPEN TO WORK • 
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
          FROM CONCEPT TO <span className="font-bold text-white">CREATION</span>
          <br />
          LET'S MAKE IT <span className="font-bold text-white">HAPPEN!</span>
        </h1>

        {/* CTA Button */}
        <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 mb-16 border border-white/20">
          Get In Touch
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-background group-hover:rotate-45 transition-transform">
            <ArrowRight size={20} />
          </div>
        </button>

        {/* Availability Text */}
        <div className="space-y-4">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            I'm available for full-time roles & freelance projects.
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            I thrive on crafting dynamic web applications, and delivering seamless user experiences.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-3 h-3 rounded-full bg-blue-400 animate-pulse delay-100"></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 rounded-full bg-primary animate-pulse delay-200"></div>
    </section>
  );
};

export default CTASection;