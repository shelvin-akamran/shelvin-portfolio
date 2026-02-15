import { useEffect, useState } from 'react';
import { ArrowRight, Copy, Check, X, Calendar, Mail, MessageSquare, Linkedin, Github, Twitter } from 'lucide-react';

const Hero = () => {
  const [stars, setStars] = useState([]);
  const [copied, setCopied] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Generate random stars on mount
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 3,
          duration: Math.random() * 2 + 2,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('akamranshelvin@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyEmailInModal = () => {
    navigator.clipboard.writeText('akamranshelvin@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <>
      <section className="relative min-h-[85vh] max-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Starfield Background */}
        <div className="starfield">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star animate-twinkle"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Background */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-8">
          {/* Upcoming Badge */}
          <div className="mb-6 animate-slide-up">
            <a
              href="#nextnode"
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 hover:bg-surface-lighter transition-all duration-300 group"
            >
              <span className="px-2 py-0.5 bg-primary text-white text-xs font-semibold rounded-full">
                Upcoming
              </span>
              <span className="text-sm text-text-secondary group-hover:text-white transition-colors">
                Nextnode is launching soon!
              </span>
              <ArrowRight size={14} className="text-text-tertiary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 serif-heading leading-tight">
              I help founders turn ideas
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl serif-heading leading-tight">
              into seamless <span className="serif-italic text-text-secondary">digital experiences</span>
            </h1>
          </div>

          {/* Subheading with Avatar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-base md:text-lg text-text-secondary">Hello, I'm</span>
            <span className="text-base md:text-lg font-semibold text-white">Shelvin Akamuran</span>
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-surface-lighter">
              <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                SA
              </div>
            </div>
            <span className="text-base md:text-lg text-text-secondary">a Full Stack Developer</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up relative z-20" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => setIsBookCallOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 group cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-full font-medium hover:bg-surface-lighter transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-green-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">akamranshelvin@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom Decorative Curve */}
          <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 w-full"
            >
              <path
                d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z"
                fill="rgba(10, 10, 15, 0.3)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Book a Call Modal - Hero's Own Modal */}
      {isBookCallOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay" onClick={() => setIsBookCallOpen(false)}>
          <div className="glass rounded-3xl p-8 max-w-xl w-full menu-enter" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-light serif-heading">Get in touch</h2>
              <button
                onClick={() => setIsBookCallOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-surface-lighter transition-all flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <a
                href="#book-call"
                className="glass-light rounded-2xl p-6 hover:bg-surface transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-surface-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Book a Call</h3>
                <p className="text-sm text-text-secondary">Schedule a 30-min chat</p>
              </a>

              <button
                onClick={copyEmailInModal}
                className="glass-light rounded-2xl p-6 hover:bg-surface transition-all duration-300 group cursor-pointer text-left"
              >
                <div className="w-12 h-12 rounded-full bg-surface-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Email Me</h3>
                <p className="text-sm text-text-secondary flex items-center gap-2">
                  {emailCopied ? (
                    <>
                      <Check size={16} className="text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <span>akamranshelvin@gmail.com</span>
                      <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )}
                </p>
              </button>
            </div>

            <button className="w-full glass-light rounded-2xl p-4 hover:bg-surface transition-all duration-300 flex items-center gap-3 mb-6">
              <MessageSquare size={20} className="text-primary" />
              <div className="flex-1 text-left">
                <div className="text-sm text-text-secondary">Or write me a message here</div>
              </div>
              <div className="text-xs text-text-tertiary">Tap to open</div>
            </button>

            <div className="text-center">
              <p className="text-xs text-text-tertiary uppercase tracking-wider mb-4">Connect on Socials</p>
              <div className="flex items-center justify-center gap-4">
                <a href="https://linkedin.com/in/shelvinakamuran" className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:bg-surface transition-all hover:scale-110">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/shelvinakamuran" className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:bg-surface transition-all hover:scale-110">
                  <Github size={18} />
                </a>
                <a href="https://twitter.com/shelvinakamuran" className="w-10 h-10 glass-light rounded-full flex items-center justify-center hover:bg-surface transition-all hover:scale-110">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;