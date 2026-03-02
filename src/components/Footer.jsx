const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-text-tertiary/10 bg-background">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 via-purple-400 to-primary flex items-center justify-center">
                <span className="text-xl font-bold text-white">SA</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              I'm Shelvin - a full-stack developer, freelancer & problem solver. Thanks for checking out my site!
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs text-white font-medium">Available for work</span>
            </div>
          </div>

          {/* Column 2 - General */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-text-tertiary mb-4 font-semibold">
              General
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-sm text-text-secondary hover:text-white transition-colors text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('work-experience')} className="text-sm text-text-secondary hover:text-white transition-colors text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tech-stack')} className="text-sm text-text-secondary hover:text-white transition-colors text-left">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-sm text-text-secondary hover:text-white transition-colors text-left">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Specifics */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-text-tertiary mb-4 font-semibold">
              Specifics
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollToSection('say-hello')} className="text-sm text-text-secondary hover:text-white transition-colors text-left">
                  Guest Book
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collaboration')} className="text-sm text-text-secondary hover:text-white transition-colors text-left">
                  Bucket List
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('say-hello')} className="text-sm text-text-secondary hover:text-white transition-colors text-left">
                  Uses
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-sm text-text-secondary hover:text-white transition-colors text-left">
                  Attribution
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 - More */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-text-tertiary mb-4 font-semibold">
              More
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollToSection('cta')} className="text-sm text-text-secondary hover:text-white transition-colors text-left">
                  Book a call
                </button>
              </li>
              <li>
                <a href="https://linkedin.com/in/shelvinakamuran" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-white transition-colors inline-block">
                  Links
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors inline-block">
                  RSS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors inline-block">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors inline-block">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-text-tertiary/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-text-tertiary">
              © {currentYear} <span className="text-white font-semibold">Shelvin Akamuran</span>. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-text-tertiary hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-text-tertiary hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;