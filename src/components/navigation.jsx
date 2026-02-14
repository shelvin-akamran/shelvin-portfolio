import { useState } from 'react';
import { ChevronDown, X, Calendar, Mail, MessageSquare, Home, User, Briefcase, BookOpen, MessageCircle, List, Phone, Laptop, Award, Link as LinkIcon, Github, Linkedin, Twitter, FileText, Shield, Scale } from 'lucide-react';

const Navigation = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const moreItems = [
    { 
      icon: MessageCircle, 
      label: 'Guestbook', 
      desc: 'Let me know you were here', 
      href: '#guestbook',
      hasImage: true,
      imageUrl: '/guestbook-bg.jpg'
    },
    { 
      icon: List, 
      label: 'Bucket List', 
      desc: 'Things to do at least once in my life', 
      href: '#bucket-list',
      hasImage: true,
      imageUrl: '/bucketlist-bg.jpg'
    },
    { 
      icon: LinkIcon, 
      label: 'Links', 
      desc: 'All my links are here', 
      href: '#links',
      hasImage: false
    },
    { 
      icon: Laptop, 
      label: 'Uses', 
      desc: 'A peek into my digital...', 
      href: '#uses',
      hasImage: false
    },
    { 
      icon: Award, 
      label: 'Attribution', 
      desc: 'Journey to create this site', 
      href: '#attribution',
      hasImage: false
    },
  ];

  const menuPages = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Briefcase, label: 'Projects', href: '#projects' },
    { icon: BookOpen, label: 'Blog', href: '#blog' },
    { icon: MessageCircle, label: 'Guestbook', href: '#guestbook' },
    { icon: List, label: 'Bucket List', href: '#bucket-list' },
    { icon: Phone, label: 'Book a call', href: '#book-call' },
    { icon: Laptop, label: 'Uses', href: '#uses' },
    { icon: Award, label: 'Attribution', href: '#attribution' },
    { icon: LinkIcon, label: 'Links', href: '#links' },
  ];

  const menuConnect = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/shelvinakamuran' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/shelvinakamuran' },
    { icon: Twitter, label: 'X (Twitter)', href: 'https://twitter.com/shelvinakamuran' },
    { icon: FileText, label: 'Resume', href: '#resume' },
  ];

  const menuLegal = [
    { icon: Shield, label: 'Privacy Policy', href: '#privacy' },
    { icon: Scale, label: 'Terms of Use', href: '#terms' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - LEFT BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-surface-lighter transition-all duration-300 group overflow-hidden"
          >
            {/* Your logo image will go here */}
            <img 
              src="public/Badge Collection Vol_ 1 - Daniel Lasso.jpg" 
              alt="Shelvin Akamuran" 
              className="w-20 h-20 rounded-lg overflow-hidden"
            />
            {/* Fallback if image doesn't load */}
            <div className="hidden text-lg font-bold text-white group-hover:scale-110 transition-transform">
              SA
            </div>
          </button>

          {/* Center Navigation */}
          <div className="glass rounded-full px-2 py-2 flex items-center gap-1">
            <a href="#home" className="nav-pill active">Home</a>
            <a href="#about" className="nav-pill">About</a>
            <a href="#work" className="nav-pill">Work</a>
            <a href="#blog" className="nav-pill">Blog</a>
            
            {/* More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="nav-pill flex items-center gap-1"
              >
                More
                <ChevronDown size={16} className={`transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu - SIDE BY SIDE LAYOUT */}
              {isMoreOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsMoreOpen(false)}
                  />
                  <div className="absolute top-full mt-2 right-0 glass rounded-2xl p-3 min-w-[600px] dropdown-enter z-50">
                    <div className="flex gap-3">
                      {/* LEFT SIDE - Image Cards */}
                      <div className="flex-1 grid grid-cols-1 gap-2">
                        {moreItems.filter(item => item.hasImage).map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="relative h-32 rounded-xl overflow-hidden group cursor-pointer"
                            onClick={() => setIsMoreOpen(false)}
                          >
                            {/* Background Image */}
                            <div 
                              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                              style={{ 
                                backgroundImage: `url(${item.imageUrl})`,
                                backgroundColor: '#1a1a24'
                              }}
                            >
                              {/* Fallback gradient if no image */}
                              <div className="w-full h-full bg-gradient-to-br from-surface/90 to-surface-dark/90"></div>
                            </div>
                            
                            {/* Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                              <div className="font-semibold text-white text-sm mb-0.5">{item.label}</div>
                              <div className="text-xs text-gray-300">{item.desc}</div>
                            </div>
                            
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                          </a>
                        ))}
                      </div>

                      {/* RIGHT SIDE - Regular Items */}
                      <div className="flex-1 space-y-1">
                        {moreItems.filter(item => !item.hasImage).map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-lighter transition-all duration-300 group"
                            onClick={() => setIsMoreOpen(false)}
                          >
                            <div className="w-9 h-9 rounded-lg bg-surface-dark flex items-center justify-center flex-shrink-0 group-hover:bg-surface group-hover:scale-110 transition-all">
                              <item.icon size={18} className="text-text-secondary group-hover:text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-white text-sm mb-0.5">{item.label}</div>
                              <div className="text-xs text-text-secondary">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setIsBookCallOpen(true)}
              className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-all duration-300 hover:scale-105 ml-1"
            >
              Book a Call
            </button>
          </div>

          {/* Command Icon - RIGHT BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-surface-lighter transition-all duration-300 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
              <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" className="text-text-secondary group-hover:text-primary transition-colors"/>
              <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" className="text-text-secondary group-hover:text-primary transition-colors"/>
              <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" className="text-text-secondary group-hover:text-primary transition-colors"/>
              <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" className="text-text-secondary group-hover:text-primary transition-colors"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Book a Call Modal */}
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

              <a
                href="mailto:akamranshelvin@gmail.com"
                className="glass-light rounded-2xl p-6 hover:bg-surface transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-surface-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Email Me</h3>
                <p className="text-sm text-text-secondary">akamranshelvin@gmail.com</p>
              </a>
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

      {/* Full Menu Panel - CENTERED WITH FULL BLUR */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="w-full max-w-md glass menu-enter rounded-3xl p-6 max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Search Bar */}
            <div className="glass-light rounded-2xl px-4 py-3 mb-6 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-tertiary">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-text-tertiary"
              />
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded-lg glass-light flex items-center justify-center text-xs">
                  ☀️
                </button>
                <kbd className="px-2 py-1 glass-light rounded text-xs text-text-tertiary">ESC</kbd>
              </div>
            </div>

            {/* Pages Section */}
            <div className="mb-8">
              <h3 className="text-xs text-text-tertiary uppercase tracking-wider mb-3 px-2">Pages</h3>
              <div className="space-y-1">
                {menuPages.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-lighter transition-all group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} className="text-text-tertiary group-hover:text-primary transition-colors" />
                    <span className="text-text-secondary group-hover:text-white transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="mb-8">
              <h3 className="text-xs text-text-tertiary uppercase tracking-wider mb-3 px-2">Connect</h3>
              <div className="space-y-1">
                {menuConnect.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-lighter transition-all group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} className="text-text-tertiary group-hover:text-primary transition-colors" />
                    <span className="text-text-secondary group-hover:text-white transition-colors flex-1">{item.label}</span>
                    {item.href.startsWith('http') && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-tertiary">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-xs text-text-tertiary uppercase tracking-wider mb-3 px-2">Legal</h3>
              <div className="space-y-1">
                {menuLegal.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-lighter transition-all group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={18} className="text-text-tertiary group-hover:text-primary transition-colors" />
                    <span className="text-text-secondary group-hover:text-white transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;