import { useState } from 'react';
import { Calendar, Clock, Search, Rss } from 'lucide-react';
import SayHello from '../components/SayHello';
import CTASection from '../components/CTASection';

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All Posts',
    'Developer-Tools',
    'Terminal',
    'Neovim',
    'Workflow',
    'Nextjs',
    'Mdx',
    'React',
    'Tutorial',
    'Career',
    'Learning',
    'Developer-Mindset'
  ];

  const posts = [
    {
      id: 1,
      title: 'Every Tool in My Terminal-First Dev Setup',
      excerpt: 'Neovim, Wezterm, Tmux, and the rest — what survived two years of daily use and why I picked each one over the obvious alternatives.',
      image: '/blog/terminal-setup.jpg',
      date: 'Oct 19, 2025',
      readTime: '11 min read',
      category: 'Developer-Tools',
      tags: ['Terminal', 'Neovim', 'Workflow']
    },
    {
      id: 2,
      title: 'Build a Markdown Blog with Next.js and MDX from Scratch',
      excerpt: 'File-based content, zero database, full control. A complete walkthrough of building a statically-generated blog with Next.js, MDX, and gray-matter.',
      image: '/blog/nextjs-mdx.jpg',
      date: 'Mar 12, 2025',
      readTime: '11 min read',
      category: 'Tutorial',
      tags: ['Nextjs', 'Mdx', 'React']
    },
    {
      id: 3,
      title: "What I'd Tell Myself Before Learning to Code",
      excerpt: 'The myths, mistakes, and mindset shifts that separate people who learn to code from people who quit. Hard-won lessons from my first two years.',
      image: '/blog/learning-code.jpg',
      date: 'Dec 5, 2024',
      readTime: '11 min read',
      category: 'Career',
      tags: ['Learning', 'Developer-Mindset']
    },
    {
      id: 4,
      title: 'Mastering React Hooks: A Complete Guide',
      excerpt: 'Deep dive into React Hooks - from useState to custom hooks. Learn the patterns that make your components cleaner and more reusable.',
      image: '/blog/react-hooks.jpg',
      date: 'Nov 8, 2024',
      readTime: '15 min read',
      category: 'Tutorial',
      tags: ['React', 'Tutorial']
    },
    {
      id: 5,
      title: 'My Neovim Config Explained',
      excerpt: 'Breaking down my Neovim configuration - plugins, keymaps, and LSP setup. Everything you need to get started with modern Neovim.',
      image: '/blog/neovim-config.jpg',
      date: 'Oct 3, 2024',
      readTime: '12 min read',
      category: 'Developer-Tools',
      tags: ['Neovim', 'Terminal', 'Workflow']
    },
    {
      id: 6,
      title: 'Building Scalable Next.js Applications',
      excerpt: 'Best practices for structuring large Next.js projects. Learn about folder organization, data fetching strategies, and performance optimization.',
      image: '/blog/nextjs-scalable.jpg',
      date: 'Sep 15, 2024',
      readTime: '13 min read',
      category: 'Tutorial',
      tags: ['Nextjs', 'React']
    }
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
                <article
                  key={post.id}
                  className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
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
                </article>
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
        <section className="py-16 px-6 bg-surface-dark/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-3xl font-light serif-heading mb-4">
                Never miss an update
              </h2>
              <p className="text-text-secondary mb-6">
                Subscribe to get my latest posts delivered straight to your inbox.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 glass rounded-full border border-text-tertiary/20 focus:border-primary/50 outline-none transition-colors text-white placeholder:text-text-tertiary"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default BlogPage;