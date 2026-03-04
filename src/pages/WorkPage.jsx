import { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import SayHello from '../components/SayHello';
import CTASection from '../components/CTASection';

const WorkPage = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Nextdemy',
      subtitle: 'A monorepo-powered learning platform with real payments, real auth, and real content delivery',
      year: '2024',
      category: 'web-app',
      tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'SHADCN UI', 'STRIPE'],
      additionalTags: ['NEXTAUTH', 'MOTION.DEV', 'NODE.JS', 'SQL', 'SANITY', 'RAZORPAY', 'TURBOREPO', 'DOCKER'],
      image: '/projects/nextdemy.jpg',
      link: 'https://nextdemy.com',
      github: 'https://github.com/shelvinakamuran/nextdemy',
      featured: true,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'Finote - Master Your Finances',
      subtitle: 'An intuitive mobile companion for organizing your digital wallets and analyzing your financial health',
      year: '2024',
      category: 'mobile-app',
      tags: ['REACT NATIVE', 'EXPO', 'TYPESCRIPT', 'FIREBASE'],
      additionalTags: ['ZUSTAND', 'REACT HOOK FORM', 'ZOD', 'RECHARTS', 'ELEMENTARY'],
      image: '/projects/finote.jpg',
      link: 'https://finote.app',
      featured: true,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Next Venture',
      subtitle: 'A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design',
      year: '2024',
      category: 'web-app',
      tags: ['NEXT.JS', 'REACT', 'SANITY.IO', 'TYPESCRIPT', 'BUTTER AUTH', 'DRIZZLE'],
      additionalTags: ['SENTRY', 'TAILWIND CSS', 'MOTION.DEV', 'BUNDLEPHOBIA', 'POSTGRESQL'],
      image: '/projects/next-venture.jpg',
      link: 'https://nextventure.io',
      github: 'https://github.com/shelvinakamuran/next-venture',
      featured: true,
      color: 'from-gray-500 to-gray-700'
    },
    {
      id: 4,
      title: 'StarForge - AI SaaS Template',
      subtitle: 'A sleek AI SaaS landing page with a user-friendly design that enhances engagement',
      year: '2024',
      category: 'template',
      tags: ['REACT NATIVE', 'EXPO', 'TYPESCRIPT', 'FIREBASE', 'GIFTEDCHAT'],
      additionalTags: ['CLERK', 'STRIPE', 'POSTGRESQL'],
      image: '/projects/starforge.jpg',
      link: 'https://starforge.dev',
      featured: true,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Apps' },
    { id: 'mobile-app', label: 'Mobile Apps' },
    { id: 'template', label: 'Templates' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        {/* Header */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4">
              Curated. <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-primary font-serif">Work</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A collection of projects I've built with passion, creativity, and clean code.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm transition-all ${
                    filter === cat.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30'
                      : 'glass text-text-secondary hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 ${
                    index % 2 === 0 ? 'md:grid md:grid-cols-2' : 'md:grid md:grid-cols-2'
                  }`}
                >
                  {/* Image Side */}
                  <div className={`relative aspect-video md:aspect-auto overflow-hidden ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div className={`hidden w-full h-full items-center justify-center bg-gradient-to-br ${project.color} p-8`}>
                      <div className="text-center">
                        <div className="text-6xl mb-4">💼</div>
                        <p className="text-sm text-white/80">Project Preview</p>
                      </div>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-xs font-semibold">
                      Q4 {project.year}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-light serif-heading mb-3">
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {project.subtitle}
                      </p>

                      {/* Main Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 glass-light rounded-full text-xs font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Additional Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.additionalTags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-surface-dark/50 rounded text-xs text-text-tertiary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                        >
                          View Live
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 glass text-white rounded-full text-sm font-semibold hover:bg-surface-lighter transition-all"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA for More Projects */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-light serif-heading mb-4">
                Want to see more?
              </h2>
              <p className="text-text-secondary mb-6">
                Check out my GitHub for more projects and open-source contributions.
              </p>
              <a
                href="https://github.com/shelvinakamuran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all"
              >
                <Github size={18} />
                View GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Say Hello Section */}
      <SayHello />

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default WorkPage;