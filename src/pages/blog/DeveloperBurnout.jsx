import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeveloperBurnout = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        <section className="py-6 px-6 border-b border-text-tertiary/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">Developer Burnout</span>
            </div>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              I Almost Quit Coding: My Battle with Developer Burnout
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-text-tertiary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center font-bold text-white">
                  SA
                </div>
                <div>
                  <div className="font-semibold">Shelvin Akamuran</div>
                  <div className="text-sm text-text-tertiary">Full-Stack Developer</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-tertiary">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  November 22, 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  8 min read
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <div className="w-full aspect-video bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔥</div>
                  <p className="text-text-tertiary">Developer Burnout</p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                The honest story of hitting rock bottom, what caused it, and the practical steps I took to fall in love with coding again.
              </p>

              <h2 className="text-3xl font-light mt-12 mb-6">The Breaking Point</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                I remember the moment I realized I hated coding. It was a Tuesday morning. I opened my laptop, saw the PR review queue, and felt pure dread. That's when I knew something had to change.
              </p>

              <h2 className="text-3xl font-light mt-12 mb-6">What Led to Burnout</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                It wasn't one thing. It was a combination: perfectionism, imposter syndrome, constantly chasing the latest tech, and not taking breaks. I was optimizing my career at the expense of my health.
              </p>

              <h2 className="text-3xl font-light mt-12 mb-6">The Recovery</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I took a month off. No coding. No tech content. I went hiking, read novels, and spent time with family. When I returned, something shifted. I had perspective.
              </p>

              <h2 className="text-3xl font-light mt-12 mb-6">What I Changed</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Five critical changes that saved my career:
              </p>

              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6">
                <li><strong>I stopped trying to know everything</strong> - Focus on depth, not breadth</li>
                <li><strong>I set boundaries on work hours</strong> - Work is work, life is life</li>
                <li><strong>I focused on depth over breadth</strong> - Master one thing instead of knowing everything</li>
                <li><strong>I took breaks seriously</strong> - Weekends are for disconnecting</li>
                <li><strong>I learned to say no</strong> - You can't do everything</li>
              </ul>

              <h2 className="text-3xl font-light mt-12 mb-6">The Result</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I love coding again. Not just as a job, but as a craft. And my productivity actually increased. When you're not burning out, you do better work.
              </p>

              <h2 className="text-3xl font-light mt-12 mb-6">To Others Struggling</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                If you're on the edge of burnout, hear this: it's okay to step back. Your health is more important than any project, deadline, or promotion. The tech will still be there when you get back, and you'll be better equipped to handle it.
              </p>

              <div className="glass rounded-xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg text-white italic">
                  "Burnout isn't a sign of weakness. It's a sign that something needs to change."
                </p>
                <p className="text-sm text-text-tertiary mt-2">- After reclaiming my joy for coding</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-tertiary/10">
              {['Mental Health', 'Career', 'Personal', 'Wellness'].map(tag => (
                <span key={tag} className="px-4 py-2 glass rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-text-tertiary/10">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Share this article:</span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=I Almost Quit Coding: Developer Burnout`)}
                    className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"
                  >
                    <Twitter size={18} />
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`)}
                    className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"
                  >
                    <Linkedin size={18} />
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)}
                    className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"
                  >
                    <Facebook size={18} />
                  </button>
                  <button 
                    onClick={() => {
                      navigator.share?.({
                        title: 'Developer Burnout',
                        url: window.location.href,
                      }) || navigator.clipboard.writeText(window.location.href);
                    }}
                    className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default DeveloperBurnout;
