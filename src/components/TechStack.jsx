import { useEffect, useRef, useState } from 'react';

const TechStack = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  // ALL your tech stack with emojis (replace with real icon components later)
  const technologies = [
    // Frontend Row
    { name: 'React', icon: '⚛️', row: 0 },
    { name: 'Next.js', icon: '▲', row: 0 },
    { name: 'TypeScript', icon: 'TS', row: 0 },
    { name: 'JavaScript', icon: 'JS', row: 0 },
    { name: 'HTML5', icon: '🌐', row: 0 },
    { name: 'CSS3', icon: '🎨', row: 0 },
    { name: 'TailwindCSS', icon: '💨', row: 0 },
    { name: 'Bootstrap', icon: '🅱️', row: 0 },
    { name: 'Figma', icon: '📐', row: 0 },
    { name: 'Sanity CMS', icon: '📝', row: 0 },
    
    // Backend & Database Row
    { name: 'Node.js', icon: '🟢', row: 1 },
    { name: 'Express.js', icon: '🚂', row: 1 },
    { name: 'Python', icon: '🐍', row: 1 },
    { name: 'Django', icon: '🎸', row: 1 },
    { name: 'Flask', icon: '🧪', row: 1 },
    { name: 'FastAPI', icon: '⚡', row: 1 },
    { name: 'PostgreSQL', icon: '🐘', row: 1 },
    { name: 'MongoDB', icon: '🍃', row: 1 },
    { name: 'SQLite', icon: '💾', row: 1 },
    { name: 'Prisma', icon: '🔷', row: 1 },
    { name: 'Drizzle', icon: '💧', row: 1 },
    
    // Web3, Cloud & DevOps Row
    { name: 'Solidity', icon: '◆', row: 2 },
    { name: 'Web3.js', icon: '🔗', row: 2 },
    { name: 'Ethers.js', icon: '💎', row: 2 },
    { name: 'AWS', icon: '☁️', row: 2 },
    { name: 'Docker', icon: '🐳', row: 2 },
    { name: 'Git', icon: '📦', row: 2 },
    { name: 'GitHub', icon: '🐙', row: 2 },
    { name: 'Vercel', icon: '▲', row: 2 },
    { name: 'Linux', icon: '🐧', row: 2 },
    { name: 'Bash', icon: '💻', row: 2 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how centered the section is in viewport
      const sectionCenter = rect.top + (rect.height / 2);
      const viewportCenter = windowHeight / 2;
      
      // Distance from center (0 = perfectly centered)
      const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
      const maxDistance = windowHeight; // Maximum distance to consider
      
      // Progress: 0 (far) to 1 (centered)
      const progress = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance)));
      
      // Apply easing for smoother animation
      const easedProgress = progress * progress * (3 - 2 * progress); // Smoothstep
      
      setScrollProgress(easedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get position for each icon
  const getIconPosition = (index, row, totalInRow) => {
    // Final position (3 rows, centered)
    const rowY = (row - 1) * 120; // Vertical spacing between rows
    const rowWidth = totalInRow * 90; // Horizontal spacing
    const startX = -rowWidth / 2 + (index * 90);
    
    // Scattered initial position (random-ish but consistent)
    const scatteredX = (Math.sin(index * 2.5) * 400) + (Math.cos(index * 1.5) * 200);
    const scatteredY = (Math.cos(index * 3) * 300) + (Math.sin(index * 2) * 150);
    
    // Interpolate between scattered and organized
    const x = scatteredX * (1 - scrollProgress) + startX * scrollProgress;
    const y = scatteredY * (1 - scrollProgress) + rowY * scrollProgress;
    
    return { x, y };
  };

  // Group technologies by row
  const row0 = technologies.filter(t => t.row === 0);
  const row1 = technologies.filter(t => t.row === 1);
  const row2 = technologies.filter(t => t.row === 2);

  return (
    <section 
      ref={sectionRef}
      className="py-12 px-6 min-h-[70vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-dark/20 to-background"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
            <span className="text-xs uppercase tracking-wider text-text-tertiary">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light serif-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-primary">MY SECRET SAUCE</span>
          </h2>
        </div>

        {/* Icons Container */}
        <div className="relative w-full h-[450px] flex items-center justify-center">
          {/* Row 0 - Frontend */}
          {row0.map((tech, idx) => {
            const { x, y } = getIconPosition(idx, tech.row, row0.length);
            
            return (
              <div
                key={`${tech.name}-${idx}`}
                className="absolute glass rounded-2xl p-4 transition-all duration-1000 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-pink-400/30 cursor-pointer group"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${0.7 + scrollProgress * 0.3})`,
                  opacity: 0.3 + scrollProgress * 0.7,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                
                {/* Label */}
                <div 
                  className="text-xs text-center font-semibold whitespace-nowrap transition-opacity"
                  style={{
                    opacity: scrollProgress
                  }}
                >
                  <div className="text-white">{tech.name}</div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400/0 to-pink-400/0 group-hover:from-pink-400/20 group-hover:to-purple-400/20 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}

          {/* Row 1 - Backend & Database */}
          {row1.map((tech, idx) => {
            const { x, y } = getIconPosition(idx, tech.row, row1.length);
            
            return (
              <div
                key={`${tech.name}-${idx}`}
                className="absolute glass rounded-2xl p-4 transition-all duration-1000 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-purple-400/30 cursor-pointer group"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${0.7 + scrollProgress * 0.3})`,
                  opacity: 0.3 + scrollProgress * 0.7,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                
                {/* Label */}
                <div 
                  className="text-xs text-center font-semibold whitespace-nowrap transition-opacity"
                  style={{
                    opacity: scrollProgress
                  }}
                >
                  <div className="text-white">{tech.name}</div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/0 to-purple-400/0 group-hover:from-purple-400/20 group-hover:to-blue-400/20 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}

          {/* Row 2 - Web3, Cloud & DevOps */}
          {row2.map((tech, idx) => {
            const { x, y } = getIconPosition(idx, tech.row, row2.length);
            
            return (
              <div
                key={`${tech.name}-${idx}`}
                className="absolute glass rounded-2xl p-4 transition-all duration-1000 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-400/30 cursor-pointer group"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${0.7 + scrollProgress * 0.3})`,
                  opacity: 0.3 + scrollProgress * 0.7,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                
                {/* Label */}
                <div 
                  className="text-xs text-center font-semibold whitespace-nowrap transition-opacity"
                  style={{
                    opacity: scrollProgress
                  }}
                >
                  <div className="text-white">{tech.name}</div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-blue-400/0 group-hover:from-blue-400/20 group-hover:to-primary/20 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;