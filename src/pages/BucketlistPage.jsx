import { Check } from 'lucide-react';

const BucketListPage = () => {
  const milestones = [
    {
      title: 'Remote working with client from abroad',
      description: 'Secured my first international contract via cold outreach on LinkedIn. Delivered a full-stack SaaS MVP.',
      date: 'Sep 2024',
      completed: true
    },
    {
      title: 'Get a Remote Job',
      description: 'Transitioned to a full-time remote role at a forward-thinking tech company, enabling a location-independent lifestyle.',
      date: 'Jan 2025',
      completed: true
    },
    {
      title: 'Get 250+ followers on Github',
      description: 'Reached this milestone by consistently contributing to open source and sharing useful repositories.',
      date: 'Dec 2025',
      completed: true
    },
    {
      title: 'Get 5,000+ organic LinkedIn followers',
      description: 'Built a community around React, Next.js, and system design by sharing daily technical insights.',
      date: 'Apr 2025',
      completed: true
    },
    {
      title: 'First OpenSource contribution',
      description: 'Merged a PR into a popular UI library, fixing a critical accessibility bug.',
      date: 'Dec 2024',
      completed: true
    },
    {
      title: 'Create portfolio website ↗',
      description: 'Launched v2.0 of this digital garden. Focused on performance, micro-interactions, and a clean bento-grid aesthetic.',
      date: 'Aug 2024',
      completed: true
    },
    {
      title: 'Simple offline notes app',
      description: 'My "Hello World" to React. Built a local-first notes app to understand state management and hooks.',
      date: 'Nov 2023',
      completed: true
    }
  ];

  const bucketList = [
    {
      title: 'Skydiving',
      description: 'To experience freefall and conquer the fear of heights from 13,000 feet.',
      completed: false
    },
    {
      title: 'Do 10K marathon',
      description: 'Training to build endurance and mental toughness. Target time: Sub 60 mins.',
      completed: false
    },
    {
      title: 'Solo travel to another country',
      description: 'To immerse myself in a completely different culture without a safety net.',
      completed: false
    },
    {
      title: 'Write a book about programming',
      description: 'Compile my learnings into a practical handbook for junior developers entering the industry.',
      completed: false
    },
    {
      title: 'Write 10 technical articles',
      description: 'Publish deep-dives on advanced frontend patterns on a personal blog or Medium.',
      completed: false
    },
    {
      title: 'Get a muscular body',
      description: 'Commit to a consistent strength training routine. Health is wealth.',
      completed: false
    },
    {
      title: 'Featured once in media',
      description: 'Share my journey or a project on a recognized tech podcast or publication.',
      completed: false
    },
    {
      title: '3 months Eurotrip!',
      description: 'Backpack across Europe for a summer, working from cafes in Prague, Berlin, and Lisbon.',
      completed: false
    },
    {
      title: 'Speak at an international conference',
      description: 'Give a technical talk on stage at a React or Next.js conference.',
      completed: false
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        {/* Header */}
        <section className="py-16 px-6 border-b border-text-tertiary/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary mb-4">
              LIFETIME
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              The Bucket <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-primary font-serif">Roadmap</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left Sidebar */}
              <div className="lg:col-span-3">
                {/* Milestones */}
                <div className="mb-12">
                  <div className="text-xs text-text-tertiary mb-2">01</div>
                  <h2 className="text-3xl font-light serif-heading mb-4">Milestones</h2>
                </div>

                {/* The List */}
                <div className="lg:mt-32">
                  <div className="text-xs text-text-tertiary mb-2">02</div>
                  <h2 className="text-3xl font-light serif-heading mb-4">The List</h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Goals, dreams, and technical ambitions I'm actively working towards.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-9">
                {/* Milestones List */}
                <div className="space-y-0 mb-16">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index}
                      className="border-b border-text-tertiary/10 py-8 group hover:bg-surface/20 transition-colors px-6 -mx-6"
                    >
                      <div className="flex items-start gap-6">
                        {/* Checkmark */}
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-md border-2 border-green-400 bg-green-400/10 flex items-center justify-center">
                            <Check size={16} className="text-green-400" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                              {milestone.title}
                            </h3>
                            <span className="text-xs px-3 py-1 glass-light rounded-full text-text-tertiary ml-4 flex-shrink-0">
                              {milestone.date}
                            </span>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bucket List */}
                <div className="space-y-0">
                  {bucketList.map((item, index) => (
                    <div 
                      key={index}
                      className="border-b border-text-tertiary/10 py-8 group hover:bg-surface/20 transition-colors px-6 -mx-6"
                    >
                      <div className="flex items-start gap-6">
                        {/* Empty Checkbox */}
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-md border-2 border-text-tertiary/30 group-hover:border-text-tertiary/50 transition-colors"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default BucketListPage;