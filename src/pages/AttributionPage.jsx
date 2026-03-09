import { ExternalLink } from 'lucide-react';

const AttributionPage = () => {
  const inspirations = [
    {
      name: 'Lee Rob',
      role: 'Architecture & DX',
      number: '01'
    },
    {
      name: 'Rauno Freiberg',
      role: 'Interaction & Motion',
      number: '02'
    },
    {
      name: 'Paco Coursey',
      role: 'Interface Craft',
      number: '03'
    },
    {
      name: 'Shu Ding',
      role: 'Visual Engineering',
      number: '04'
    },
    {
      name: 'Brian Lovin',
      role: 'Product Details',
      number: '05'
    },
    {
      name: 'Pedro Duarte',
      role: 'Motion Primitives',
      number: '06'
    }
  ];

  const techStack = {
    frontend: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['PostgreSQL', 'Prisma ORM', 'BetterAuth'],
    infrastructure: ['Vercel', 'Cloudflare']
  };

  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        {/* Header */}
        <section className="py-16 px-6 border-b border-text-tertiary/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary mb-4">
              ATTRIBUTION
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              Journey to create this <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-primary font-serif">website</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left Sidebar */}
              <div className="lg:col-span-3 space-y-12">
                {/* The Journey */}
                <div>
                  <div className="text-xs text-text-tertiary mb-2">01</div>
                  <h2 className="text-3xl font-light serif-heading">The Journey</h2>
                </div>

                {/* Inspirations */}
                <div className="lg:mt-32">
                  <div className="text-xs text-text-tertiary mb-2">02</div>
                  <h2 className="text-3xl font-light serif-heading">Inspirations</h2>
                </div>

                {/* Colophon */}
                <div className="lg:mt-32">
                  <div className="text-xs text-text-tertiary mb-2">03</div>
                  <h2 className="text-3xl font-light serif-heading">Colophon</h2>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-9 space-y-16">
                {/* The Journey Section */}
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-text-secondary">
                    It started in 2023 as a <strong className="text-white">simple Next.js experiment</strong>. The code was messy, the design was derivative, but it was mine.
                  </p>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    Fast forward to 2024. The web had evolved, and so had I. I wanted a digital home that felt 'alive'. I tore it down to the studs and rebuilt it with a <strong className="text-white">focus on craftsmanship</strong>.
                  </p>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    This new iteration is a statement on how I believe the web should be: <strong className="text-white">performant, accessible, and aesthetically refined</strong>.
                  </p>
                </div>

                {/* Inspirations Grid */}
                <div className="grid md:grid-cols-2 gap-4 pt-8">
                  {inspirations.map((person) => (
                    <button
                      key={person.number}
                      className="glass rounded-2xl p-6 text-left hover:bg-surface transition-all group relative overflow-hidden"
                    >
                      {/* Number */}
                      <div className="absolute top-4 right-4 text-xs text-text-tertiary group-hover:text-primary transition-colors">
                        {person.number}
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={16} className="text-text-tertiary" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                          {person.name}
                        </h3>
                        <p className="text-sm text-text-secondary">{person.role}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Colophon Section */}
                <div className="glass rounded-3xl p-8 space-y-8 mt-16">
                  {/* Frontend */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-text-tertiary mb-4">
                      FRONTEND
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.frontend.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 glass-light rounded-full text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-text-tertiary mb-4">
                      BACKEND
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.backend.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 glass-light rounded-full text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Infrastructure */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-text-tertiary mb-4">
                      INFRASTRUCTURE
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.infrastructure.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 glass-light rounded-full text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-text-tertiary/10 pt-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-text-tertiary mb-2">
                          CRAFTED BY
                        </h3>
                        <p className="text-2xl font-light serif-heading">Shelvin Akamuran</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-text-tertiary mb-1">Available for freelance</p>
                        <a
                          href="mailto:akamranshelvin@gmail.com"
                          className="text-sm text-primary hover:underline inline-flex items-center gap-2"
                        >
                          akamranshelvin@gmail.com
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="pt-8 border-t border-text-tertiary/10">
                  <p className="text-sm text-text-tertiary leading-relaxed">
                    This portfolio is built with React, Vite, and Tailwind CSS. Designed with attention to detail, accessibility, and performance. 
                    Inspired by the best, built with care. Version 2.0 — March 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default AttributionPage;