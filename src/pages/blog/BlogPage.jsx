import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search, Rss } from 'lucide-react';
import Newsletter from '../../components/Newsletter';

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All Posts',
    'AI & ML',
    'Web Development',
    'Career',
    'Tech Trends',
    'Learning',
    'Tools',
    'React',
    'Next.js',
    'Web3',
    'Personal'
  ];

  const posts = [
    {
      id: 1,
      slug: 'ai-development-journey',
      title: 'My Journey into AI Development: From Skeptic to Believer',
      excerpt: 'How AI tools transformed my development workflow and made me 10x more productive. A year of learning, experimentation, and real results.',
      image: '/blog/ai-journey.jpg',
      date: 'January 15, 2026',
      readTime: '12 min read',
      category: 'AI & ML',
      tags: ['AI', 'Development', 'Productivity']
    },
    {
      id: 2,
      slug: 'web3-real-world',
      title: 'Building Real-World Web3 Apps: Lessons from the Trenches',
      excerpt: 'Blockchain isn\'t just hype. Here\'s what I learned building production Web3 applications with Solidity, ethers.js, and smart contracts.',
      image: '/blog/web3-apps.jpg',
      date: 'December 28, 2025',
      readTime: '15 min read',
      category: 'Web3',
      tags: ['Web3', 'Blockchain', 'Solidity']
    },
    {
      id: 3,
      slug: 'nextjs-performance',
      title: 'Next.js 15: The Performance Features That Actually Matter',
      excerpt: 'Server components, streaming, and partial pre-rendering. A deep dive into what makes Next.js 15 a game-changer for modern web apps.',
      image: '/blog/nextjs-15.jpg',
      date: 'December 10, 2025',
      readTime: '10 min read',
      category: 'Next.js',
      tags: ['Next.js', 'Performance', 'React']
    },
    {
      id: 4,
      slug: 'developer-burnout',
      title: 'I Almost Quit Coding: My Battle with Developer Burnout',
      excerpt: 'The honest story of hitting rock bottom, what caused it, and the practical steps I took to fall in love with coding again.',
      image: '/blog/burnout.jpg',
      date: 'November 22, 2025',
      readTime: '8 min read',
      category: 'Career',
      tags: ['Mental Health', 'Career', 'Personal']
    },
    {
      id: 5,
      slug: 'react-patterns-2026',
      title: 'React Patterns I Wish I Knew Earlier',
      excerpt: 'Custom hooks, compound components, and render props explained with real examples from production apps I\'ve built.',
      image: '/blog/react-patterns.jpg',
      date: 'November 5, 2025',
      readTime: '14 min read',
      category: 'React',
      tags: ['React', 'Patterns', 'Best Practices']
    },
    {
      id: 6,
      slug: 'terminal-workflow',
      title: 'My Terminal-First Development Setup in 2026',
      excerpt: 'Why I ditched VS Code for Neovim, tmux, and a terminal-first workflow. Two years later, I\'m never going back.',
      image: '/blog/terminal.jpg',
      date: 'October 18, 2025',
      readTime: '11 min read',
      category: 'Tools',
      tags: ['Terminal', 'Neovim', 'Productivity']
    },
    {
      id: 7,
      slug: 'typescript-mistakes',
      title: 'TypeScript Mistakes That Cost Me Hours',
      excerpt: 'The type errors I kept making, why they happened, and how I finally understood TypeScript\'s type system.',
      image: '/blog/typescript.jpg',
      date: 'October 3, 2025',
      readTime: '9 min read',
      category: 'Web Development',
      tags: ['TypeScript', 'JavaScript', 'Learning']
    },
    {
      id: 8,
      slug: 'first-year-developer',
      title: 'What I Wish I Knew Before My First Dev Job',
      excerpt: 'Imposter syndrome, code reviews, and learning in public. The truth about your first year as a professional developer.',
      image: '/blog/first-year.jpg',
      date: 'September 15, 2025',
      readTime: '10 min read',
      category: 'Career',
      tags: ['Career', 'Learning', 'Advice']
    },
    {
      id: 9,
      slug: 'state-management-2026',
      title: 'The State of State Management in 2026',
      excerpt: 'Redux vs Zustand vs Jotai vs React Context. I tested them all in production. Here\'s what actually works.',
      image: '/blog/state-management.jpg',
      date: 'August 28, 2025',
      readTime: '13 min read',
      category: 'React',
      tags: ['State Management', 'React', 'Architecture']
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeFilter === 'all' || 
                           post.category.toLowerCase() === activeFilter.toLowerCase() ||
                           post.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        {/* Header */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary mb-4">
              THE PENSIEVE
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              Handpicked <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-primary font-serif">Insights</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Real experiences, hard lessons, and honest takes on modern development
            </p>
          </div>
        </section>

        {/* Categories & Search */}
        <section className="py-8 px-6 border-y border-text-tertiary/10">
          <div className="max-w-6xl mx-auto">
            {/* Categories */}
            <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat === 'All Posts' ? 'all' : cat)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all flex-shrink-0 ${
                    (cat === 'All Posts' && activeFilter === 'all') ||
                    cat.toLowerCase() === activeFilter.toLowerCase()
                      ? 'bg-white text-background font-semibold'
                      : 'glass text-text-secondary hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
                <input
                  type="text"
                  placeholder="Search posts"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 glass rounded-full border border-text-tertiary/20 focus:border-primary/50 outline-none transition-colors text-white placeholder:text-text-tertiary"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-3 glass rounded-full hover:bg-surface-lighter transition-all">
                <span className="text-sm font-semibold">⌘</span>
                <span className="text-sm">K</span>
              </button>
              <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all">
                <Rss size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group block"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📝</div>
                        <p className="text-sm text-text-tertiary">Blog Post</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-text-tertiary">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-light serif-heading mb-2">No posts found</h3>
                <p className="text-text-secondary">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <Newsletter />
      </div>

    </>
  );
};

export default BlogPage;