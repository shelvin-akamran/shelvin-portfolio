import { useState } from 'react';
import { MessageSquare, Github, Mail, Calendar, Heart } from 'lucide-react';


const GuestbookPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: 'ML Adilp',
      message: 'can you add some funny games here it will be cool',
      date: 'Feb 15',
      avatar: 'ML'
    },
    {
      id: 2,
      author: 'Gauri Katti',
      message: 'Awesome!!',
      date: 'Jan 31',
      avatar: 'GK'
    },
    {
      id: 3,
      author: 'ffswarm',
      message: 'cool',
      date: 'Jan 21',
      avatar: 'FS'
    },
    {
      id: 4,
      author: 'John Kimeu',
      message: 'This is great man! I swear I need this source code bro 🔥',
      date: 'Jan 29',
      avatar: 'JK'
    },
    {
      id: 5,
      author: 'Maverick Lally',
      message: 'Super cool portfolio!',
      date: 'Jan 28',
      avatar: 'ML'
    },
    {
      id: 6,
      author: 'Shaishabh Chandra Shil',
      message: 'awesome',
      date: 'Jan 17',
      avatar: 'SC'
    },
    {
      id: 7,
      author: 'Vinay Patil',
      message: 'very detailed and professional portfolio',
      date: 'Jan 13',
      avatar: 'VP'
    },
    {
      id: 8,
      author: 'SAHIL SHARMA',
      message: 'Cool Portfolio Man!',
      date: 'Jan 13',
      avatar: 'SS'
    },
    {
      id: 9,
      author: 'Abdullah Abdul Samad',
      message: 'This portfolio is amazing',
      date: 'Jan 13',
      avatar: 'AA'
    },
    {
      id: 10,
      author: 'Merrick Hayes',
      message: 'Everything about you is amazing! This portfolio website is so goooood!',
      date: 'Jan 8',
      avatar: 'MH'
    },
    {
      id: 11,
      author: 'Md. Nahid Hossain',
      message: 'Cool Portfolio dear. Well done',
      date: 'Dec 24',
      avatar: 'MN'
    }
  ]);

  const handleGitHubSignIn = () => {
    // In production, this would trigger OAuth flow
    // For now, simulate sign in
    setUser({
      name: 'Demo User',
      avatar: 'DU',
      provider: 'github'
    });
    setIsSignedIn(true);
    setShowSignIn(false);
  };

  const handleGoogleSignIn = () => {
    // In production, this would trigger OAuth flow
    setUser({
      name: 'Demo User',
      avatar: 'DU',
      provider: 'google'
    });
    setIsSignedIn(true);
    setShowSignIn(false);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      author: user.name,
      message: message,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      avatar: user.avatar
    };

    setMessages([newMessage, ...messages]);
    setMessage('');
  };

  const getGradientClass = (index) => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-pink-500 to-rose-500',
      'from-cyan-500 to-blue-500',
      'from-indigo-500 to-purple-500',
      'from-green-500 to-emerald-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        {/* Header */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary mb-4">
              THE WALL REMEMBERS
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              Words That Echo <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-primary font-serif">Always</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Sign in and leave your mark. Let me know you were here.
            </p>
          </div>
        </section>

        {/* Guestbook Content */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Write Message */}
              <div className="lg:col-span-1">
                <div className="glass rounded-3xl p-8 sticky top-24">
                  <h2 className="text-2xl font-light serif-heading mb-6">
                    "Join the wall..."
                  </h2>
                  
                  {!isSignedIn ? (
                    <div>
                      <p className="text-sm text-text-secondary mb-6">
                        Sign in to join this board forever.
                      </p>
                      <button
                        onClick={() => setShowSignIn(true)}
                        className="w-full flex items-center gap-3 px-6 py-4 glass-light rounded-2xl hover:bg-surface transition-all group"
                      >
                        <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                          <MessageSquare size={20} className="text-primary" />
                        </div>
                        <span className="font-semibold">Write a message...</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitMessage} className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center font-bold text-white text-sm">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{user.name}</div>
                          <div className="text-xs text-text-tertiary">Signed in</div>
                        </div>
                      </div>
                      
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Leave your message here..."
                        rows={4}
                        className="w-full px-4 py-3 glass rounded-xl border border-text-tertiary/20 focus:border-primary/50 outline-none transition-colors text-white placeholder:text-text-tertiary resize-none"
                      />
                      
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                      >
                        Post Message
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column - Messages Grid */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-4">
                  {messages.map((msg, index) => (
                    <div
                      key={msg.id}
                      className={`glass rounded-2xl p-6 relative overflow-hidden group hover:scale-105 transition-transform`}
                    >
                      {/* Background Decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        {index % 3 === 0 && (
                          <div className="text-6xl">✨</div>
                        )}
                        {index % 3 === 1 && (
                          <div className="text-6xl">⚡</div>
                        )}
                        {index % 3 === 2 && (
                          <div className="text-6xl">💫</div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <p className="text-white mb-4 leading-relaxed">
                          {msg.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getGradientClass(index)} flex items-center justify-center font-bold text-white text-xs`}>
                              {msg.avatar}
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{msg.author}</div>
                              <div className="text-xs text-text-tertiary flex items-center gap-1">
                                <Calendar size={12} />
                                {msg.date}
                              </div>
                            </div>
                          </div>
                          
                          <button className="p-2 glass rounded-full hover:bg-surface-lighter transition-all">
                            <Heart size={16} className="text-text-tertiary hover:text-pink-400" />
                          </button>
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

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay" onClick={() => setShowSignIn(false)}>
          <div className="glass rounded-3xl p-8 max-w-md w-full menu-enter" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light serif-heading mb-2">Sign in</h2>
              <p className="text-sm text-text-secondary">to continue to guestbook</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleGitHubSignIn}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-all"
              >
                <Github size={20} />
                Continue with GitHub
              </button>

              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 glass-light border border-text-tertiary/20 rounded-2xl font-semibold hover:bg-surface transition-all"
              >
                <Mail size={20} />
                Continue with Google
              </button>
            </div>

            <p className="text-xs text-text-tertiary text-center mt-6">
              Your info will only be used to display your name and message
            </p>
          </div>
        </div>
      )}

    </>
  );
};

export default GuestbookPage;