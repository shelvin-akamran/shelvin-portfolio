import { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      // Using Formspree (free, no backend needed)
      const response = await fetch('https://formspree.io/f/maqpwprd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _subject: 'New Blog Newsletter Subscription',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('🎉 Successfully subscribed! Check your email for confirmation.');
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Oops! Something went wrong. Please try again.');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 px-6 bg-surface-dark/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-12">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
              <Mail size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-light serif-heading mb-4">
              Never miss an update
            </h2>
            <p className="text-text-secondary">
              Get my latest posts, insights, and tech discoveries delivered straight to your inbox. No spam, unsubscribe anytime.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 glass rounded-full border border-text-tertiary/20 focus:border-primary/50 outline-none transition-colors text-white placeholder:text-text-tertiary disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center justify-center gap-2 text-green-400 text-sm animate-scale-in">
                <Check size={16} />
                <span>{message}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 text-red-400 text-sm animate-scale-in">
                <AlertCircle size={16} />
                <span>{message}</span>
              </div>
            )}

            {status === 'idle' && (
              <p className="text-xs text-text-tertiary">
                Join 500+ developers getting weekly insights
              </p>
            )}
          </form>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-text-tertiary">
            <div className="flex items-center gap-2">
              <Check size={14} className="text-green-400" />
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-green-400" />
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="text-green-400" />
              <span>Weekly updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;