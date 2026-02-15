import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase, Award, Code, Sparkles } from 'lucide-react';

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  const experiences = [
    {
      id: 1,
      title: 'Fullstack Developer',
      company: 'Papai and Associates Advocates',
      location: 'Nairobi, Kenya',
      period: 'January 2025 - Present',
      type: 'Full-Time',
      current: true,
      description: 'Promoted to permanent position. Leading development of comprehensive legal case management system and client portal. Architecting and implementing blockchain-based solutions for legal document verification and NFT-based certificates of authenticity.',
      highlights: [
        'Architected legal case management system handling complex workflows',
        'Designed and deployed smart contracts for document verification',
        'Built secure client portal with real-time case updates using WebSockets',
        'Implemented AI-powered features using OpenAI LLMs for document analysis',
        'Set up AWS infrastructure for scalable backend services'
      ],
      achievements: [
        'Transitioned from intern to permanent fullstack developer',
        'Built NFT-based certificate system on Ethereum',
        'Led cross-functional projects combining Web3, AI, and backend'
      ],
      tech: ['React', 'Next.js', 'FastAPI', 'Solidity', 'PostgreSQL', 'AWS', 'OpenAI', 'Web3.js']
    },
    {
      id: 2,
      title: 'Fullstack Developer Intern',
      company: 'Papai and Associates Advocates',
      location: 'Nairobi, Kenya',
      period: 'September 2024 - December 2024',
      type: 'Internship',
      current: false,
      description: 'Developed full-stack features for legal management systems. Contributed to building client portals and implementing smart contracts for legal document management and verification.',
      highlights: [
        'Built responsive frontend components using React and Next.js',
        'Developed backend APIs using FastAPI and Node.js',
        'Implemented smart contracts on Ethereum',
        'Collaborated with legal team to understand requirements'
      ],
      tech: ['React', 'Next.js', 'TypeScript', 'FastAPI', 'Solidity', 'TailwindCSS']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const elements = timelineRef.current.querySelectorAll('.timeline-item');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      elements.forEach((element, index) => {
        const elementPosition = element.offsetTop;
        const elementBottom = elementPosition + element.offsetHeight;
        
        if (scrollPosition >= elementPosition) {
          setActiveIndex(index);
        }
        
        // Check if we've scrolled past the first card
        if (index === 0 && scrollPosition > elementBottom + 100) {
          setActiveIndex(1); // Activate second card
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 px-6 max-w-[1100px] mx-auto relative" ref={timelineRef}>
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
          <Briefcase size={16} className="text-pink-400" />
          <span className="text-xs uppercase tracking-wider text-text-tertiary">Work Experience</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-light serif-heading mb-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-primary">Professional Journey</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Building innovative solutions at the intersection of legal tech, blockchain, and AI
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line (Center) */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400/20 via-purple-400/20 to-primary/20 transform md:-translate-x-1/2"></div>

        {/* Animated Progress Line */}
        <div 
          className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-primary transform md:-translate-x-1/2 transition-all duration-500"
          style={{ 
            height: `${(activeIndex + 1) * (100 / experiences.length)}%`,
          }}
        ></div>

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <div 
            key={exp.id}
            className={`timeline-item relative mb-32 last:mb-0 ${
              index % 2 === 0 
                ? 'md:ml-0 md:mr-auto md:pr-[calc(50%+3rem)]' 
                : 'md:ml-auto md:mr-0 md:pl-[calc(50%+3rem)]'
            }`}
          >
            {/* Timeline Dot */}
            <div 
              className={`absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full transform md:-translate-x-1/2 transition-all duration-500 ${
                index <= activeIndex 
                  ? 'bg-gradient-to-br from-pink-400 via-purple-400 to-primary scale-125 shadow-lg shadow-primary/50' 
                  : 'bg-surface-lighter scale-100'
              }`}
            >
              {index <= activeIndex && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-primary animate-ping opacity-75"></div>
              )}
            </div>

            {/* Content Card */}
            <div 
              className={`ml-20 md:ml-0 glass rounded-3xl p-8 transition-all duration-700 hover:scale-[1.02] ${
                // First card: vanish when activeIndex > 0
                index === 0 && activeIndex > 0 
                  ? 'opacity-0 -translate-y-20 pointer-events-none' 
                  : index <= activeIndex 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-50 translate-y-8'
              }`}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 bg-gradient-to-r from-pink-400/20 to-purple-400/20 border border-pink-400/30 rounded-full text-xs text-pink-400 font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-text-secondary font-medium">{exp.company}</p>
                  </div>
                  
                  <div className={`px-4 py-2 rounded-full text-xs font-semibold ${
                    exp.type === 'Full-Time' 
                      ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 border border-pink-400/30'
                      : 'bg-primary/20 text-primary border border-primary/30'
                  }`}>
                    {exp.type}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-text-tertiary">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Code size={16} className="text-pink-400" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 mt-1.5 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              {exp.achievements && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Award size={16} className="text-purple-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Sparkles size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 glass-light rounded-lg text-xs border border-text-tertiary/20 hover:border-pink-400/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decoration */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse"></div>
          <span className="text-xs text-text-secondary">Scroll to see the journey</span>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;