import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';


const BlogPost1 = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        {/* Breadcrumb */}
        <section className="py-6 px-6 border-b border-text-tertiary/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">AI in Modern Development</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light serif-heading mb-6 leading-tight">
              My Journey into AI Development: From Skeptic to Believer
            </h1>

            {/* Meta */}
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
                  January 15, 2026
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  12 min read
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-12">
              <div className="w-full aspect-video bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <p className="text-text-tertiary">AI Development Journey</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                A year ago, I was skeptical about AI in development. "It's just hype," I thought. "Nothing can replace a good developer." 
                Fast forward to today, and AI tools are an integral part of my daily workflow. Here's how my perspective changed and 
                what I've learned along the way.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Wake-Up Call</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                It started with a simple frustration. I was building a complex authentication flow for a legal tech platform, and I 
                found myself spending hours debugging JWT token expiration issues. On a whim, I asked ChatGPT for help. Within minutes, 
                it identified the problem: I was storing tokens in localStorage without proper expiration handling.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                But it wasn't just about fixing bugs. The AI explained <em>why</em> my approach was flawed, suggested security best 
                practices, and even provided a complete implementation using httpOnly cookies. That moment changed everything.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">How AI Changed My Workflow</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">1. Code Reviews on Steroids</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                I now use AI to review my code before pushing. It catches things I miss: potential memory leaks, security vulnerabilities, 
                and even suggests performance optimizations. GitHub Copilot has become my pair programming partner, suggesting entire 
                functions based on my comments.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <p className="text-sm text-text-tertiary mb-2">Example:</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-green-400">{`// Me: Create a debounced search function
// Copilot: 
const debouncedSearch = useCallback(
  debounce((query) => {
    fetchResults(query);
  }, 300),
  []
);`}</code>
                </pre>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. Learning at Lightning Speed</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                When I started learning Web3 development, AI tools became my teacher. Instead of spending hours on Stack Overflow, 
                I could ask specific questions about Solidity smart contracts and get tailored explanations with code examples.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">3. Documentation That Doesn't Suck</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Let's be honest—writing documentation is boring. Now, I write the code, add basic comments, and let AI generate 
                comprehensive docs. It creates README files, API documentation, and even usage examples. My projects are better 
                documented than ever.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Reality Check: What AI Can't Do</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                But here's the thing: AI isn't magic. It's a tool, and like any tool, it has limitations.
              </p>

              <ul className="list-disc list-inside space-y-3 text-text-secondary mb-6">
                <li><strong>It can't understand your business logic</strong> - AI doesn't know your product requirements or user needs</li>
                <li><strong>It makes mistakes</strong> - Always review AI-generated code. I've caught numerous bugs and security issues</li>
                <li><strong>It lacks context</strong> - AI doesn't understand your entire codebase or architecture decisions</li>
                <li><strong>It can't make product decisions</strong> - Should you use Redux or Context API? AI can explain both, but the decision is yours</li>
              </ul>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">My AI Development Stack</h2>

              <div className="glass rounded-xl p-6 mb-6">
                <h4 className="font-semibold mb-4">Tools I Use Daily:</h4>
                <ul className="space-y-3 text-text-secondary">
                  <li><strong>GitHub Copilot</strong> - For code completion and suggestions</li>
                  <li><strong>ChatGPT-4</strong> - For complex problem-solving and architecture discussions</li>
                  <li><strong>Claude</strong> - For long-form code analysis and refactoring</li>
                  <li><strong>Cursor AI</strong> - For AI-powered code editing</li>
                  <li><strong>v0.dev</strong> - For rapid UI prototyping</li>
                </ul>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Lessons Learned</h2>

              <p className="text-text-secondary leading-relaxed mb-4"><strong>1. AI amplifies good developers</strong></p>
              <p className="text-text-secondary leading-relaxed mb-6">
                If you understand fundamentals, AI makes you 10x faster. If you don't, it's just a fancy autocomplete that leads you astray.
              </p>

              <p className="text-text-secondary leading-relaxed mb-4"><strong>2. Always verify</strong></p>
              <p className="text-text-secondary leading-relaxed mb-6">
                AI-generated code is a starting point, not the finish line. Read it, understand it, test it.
              </p>

              <p className="text-text-secondary leading-relaxed mb-4"><strong>3. Use AI to learn, not to avoid learning</strong></p>
              <p className="text-text-secondary leading-relaxed mb-6">
                Don't just copy-paste AI code. Ask it to explain. Understand the patterns. Build your knowledge.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Future Is Already Here</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                We're at an inflection point in software development. AI isn't replacing developers—it's changing what it means to be one. 
                The developers who thrive will be those who learn to work <em>with</em> AI, not against it.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                My advice? Start small. Pick one AI tool. Use it for a week. See what works. Then expand. The learning curve is steep, 
                but the productivity gains are real.
              </p>

              <div className="glass rounded-xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg text-white italic">
                  "AI won't replace developers. But developers who use AI will replace developers who don't."
                </p>
                <p className="text-sm text-text-tertiary mt-2">- Me, after 6 months of AI-assisted development</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-tertiary/10">
              {['AI', 'Development', 'Productivity', 'Tools', 'Learning'].map(tag => (
                <span key={tag} className="px-4 py-2 glass-light rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-text-tertiary/10">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Share this article:</span>
                <div className="flex gap-3">
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all">
                    <Twitter size={18} />
                  </button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all">
                    <Facebook size={18} />
                  </button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all">
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

export default BlogPost1;