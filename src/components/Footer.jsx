const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-text-tertiary/10 bg-background">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
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
                <a href="#hero" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#work-experience" className="text-sm text-text-secondary hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Blog
                </a>
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
                <a href="#say-hello" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Guest Book
                </a>
              </li>
              <li>
                <a href="#collaboration" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Bucket List
                </a>
              </li>
              <li>
                <a href="#say-hello" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Uses
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Attribution
                </a>
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
                <a href="#say-hello" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Book a call
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/shelvinakamuran" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Links
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">
                  RSS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">
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