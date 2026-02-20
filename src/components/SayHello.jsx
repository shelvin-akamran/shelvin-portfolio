import { useState } from 'react';
import { Music, BookOpen, Wrench, X, ExternalLink } from 'lucide-react';

const SayHello = () => {
  const [isGuestbookOpen, setIsGuestbookOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  // Your favorite tools
  const tools = [
    { 
      name: 'Git', 
      icon: '📦', 
      url: 'https://git-scm.com',
      color: 'from-orange-500 to-red-500' 
    },
    { 
      name: 'Figma', 
      icon: '🎨', 
      url: 'https://figma.com',
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      name: 'VS Code', 
      icon: '💻', 
      url: 'https://code.visualstudio.com',
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      name: 'Notion', 
      icon: '📝', 
      url: 'https://notion.so',
      color: 'from-gray-500 to-gray-700' 
    },
    { 
      name: 'Postman', 
      icon: '🚀', 
      url: 'https://postman.com',
      color: 'from-orange-400 to-orange-600' 
    },
  ];

  // Spotify Last Played (replace with real API data)
  const lastPlayed = {
    title: "Tell Him",
    artist: "Lauryn Hill",
    album: "The Miseducation of Lauryn Hill",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273c2a3b0a1c1c0d0e0f0f0f0f0", // Placeholder
    spotifyUrl: "https://open.spotify.com/track/..."
  };

  return (
    <section className="py-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-surface-dark/20 to-background">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-text-tertiary mb-4">MY SITE</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light serif-heading mb-4">
            Explore, experiment
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl serif-italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-primary">
            && say hello
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Uses (Tools) */}
          <div 
            onClick={() => setIsToolsOpen(true)}
            className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="relative z-10">
              {/* Tool Icons Preview */}
              <div className="flex gap-3 mb-6">
                {tools.slice(0, 5).map((tool, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {tool.icon}
                  </div>
                ))}
              </div>

              <p className="text-xs uppercase tracking-wider text-text-tertiary mb-2">USES</p>
              <h3 className="text-xl font-semibold text-white">Check out my favorite tools</h3>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Card 2 - Guestbook */}
          <div 
            onClick={() => setIsGuestbookOpen(true)}
            className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="relative z-10">
              {/* Guestbook Cards Preview */}
              <div className="mb-6 relative h-32">
                <div className="absolute top-0 left-4 w-32 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl transform rotate-12 group-hover:rotate-6 transition-transform shadow-lg"></div>
                <div className="absolute top-4 right-4 w-32 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl transform -rotate-6 group-hover:-rotate-3 transition-transform shadow-lg"></div>
              </div>

              <p className="text-xs uppercase tracking-wider text-text-tertiary mb-2">GUESTBOOK</p>
              <h3 className="text-xl font-semibold text-white">Let me know you were here</h3>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Card 3 - Spotify Last Played */}
          <a
            href={lastPlayed.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="relative z-10">
              {/* Spotify Icon */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <Music size={16} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-green-400">Last Played</span>
              </div>

              {/* Album Art & Info */}
              <div className="mb-4">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 mb-4 group-hover:scale-105 transition-transform overflow-hidden">
                  {/* Replace with actual Spotify album art */}
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    🎵
                  </div>
                </div>
                <p className="text-sm font-semibold text-white mb-1 line-clamp-1">
                  Last Played <span className="text-green-400">{lastPlayed.title}</span>
                </p>
                <p className="text-xs text-text-secondary line-clamp-1">
                  by {lastPlayed.artist}
                </p>
                <p className="text-xs text-text-tertiary line-clamp-1">
                  from {lastPlayed.album}
                </p>
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </div>

      {/* Tools Modal */}
      {isToolsOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsToolsOpen(false)}
        >
          <div 
            className="glass rounded-3xl p-8 max-w-2xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-light serif-heading text-white">My Favorite Tools</h2>
                <p className="text-sm text-text-secondary mt-1">The stack that powers my work</p>
              </div>
              <button
                onClick={() => setIsToolsOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-surface-lighter transition-all flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-light rounded-2xl p-6 hover:bg-surface transition-all group text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{tool.name}</p>
                  <ExternalLink size={12} className="mx-auto text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Guestbook Modal */}
      {isGuestbookOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsGuestbookOpen(false)}
        >
          <div 
            className="glass rounded-3xl p-8 max-w-2xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-light serif-heading text-white">Guestbook</h2>
                <p className="text-sm text-text-secondary mt-1">Leave your mark!</p>
              </div>
              <button
                onClick={() => setIsGuestbookOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-surface-lighter transition-all flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            {/* Guestbook Form */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-text-secondary mb-2 block">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 glass-light rounded-xl border border-text-tertiary/20 focus:border-primary/50 outline-none transition-colors text-white placeholder:text-text-tertiary"
                />
              </div>

              <div>
                <label className="text-sm text-text-secondary mb-2 block">Message</label>
                <textarea
                  placeholder="Leave a nice message..."
                  rows={4}
                  className="w-full px-4 py-3 glass-light rounded-xl border border-text-tertiary/20 focus:border-primary/50 outline-none transition-colors text-white placeholder:text-text-tertiary resize-none"
                />
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all">
                Sign Guestbook
              </button>
            </div>

            {/* Recent Messages */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-text-secondary mb-4">Recent Visitors</h3>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="glass-light rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">Anonymous Visitor</p>
                        <p className="text-xs text-text-tertiary">2 days ago</p>
                      </div>
                    </div>
                    <p className="text-xs text-text-secondary">Great portfolio! Love the design 💖</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SayHello;