import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terminal = () => {
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
              <span className="text-white">Terminal Workflow</span>
            </div>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light serif-heading mb-6 leading-tight">
              My Terminal-First Development Setup in 2026
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-text-tertiary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center font-bold text-white">SA</div>
                <div>
                  <div className="font-semibold">Shelvin Akamuran</div>
                  <div className="text-sm text-text-tertiary">Full-Stack Developer</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-tertiary">
                <div className="flex items-center gap-2"><Calendar size={16} />October 18, 2025</div>
                <div className="flex items-center gap-2"><Clock size={16} />11 min read</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src="https://i.pinimg.com/736x/64/12/ad/6412ad38c1ad685c753f948f5b57317f.jpg"
                alt="AI Development Journey"
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Two years ago I ditched VS Code for Neovim and a terminal-first workflow. People thought I was crazy. "Why make things harder?" But now? I'm faster, more focused, and I'll never go back. Here's my complete setup and why it works.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Why I Made the Switch</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                VS Code kept crashing when I opened large projects. 2GB of RAM for a text editor felt insane. Extensions broke every update. I spent more time configuring VS Code than actually coding.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Then I watched a senior dev navigate an entire codebase without touching his mouse. That's when I knew.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Stack</h2>

              <div className="glass rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">My Daily Tools:</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li><strong>Neovim</strong> - The editor (Lua config)</li>
                  <li><strong>Tmux</strong> - Session management</li>
                  <li><strong>Wezterm</strong> - Terminal emulator (GPU-accelerated)</li>
                  <li><strong>Zsh + Oh-My-Zsh</strong> - Shell</li>
                  <li><strong>fzf</strong> - Fuzzy finder</li>
                  <li><strong>ripgrep</strong> - Fast grep</li>
                  <li><strong>lazygit</strong> - Git TUI</li>
                  <li><strong>nvm</strong> - Node version management</li>
                </ul>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Learning Curve (It's Real)</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Week 1: I wanted to quit. Basic file navigation took forever. I couldn't even save and quit properly (:wq, btw).
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Week 2: Muscle memory started forming. hjkl became natural. I stopped reaching for my mouse.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Month 1: I was as fast as I was in VS Code. Confidence growing.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Month 3: Faster than I ever was. No going back.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">My Neovim Config</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I use LazyVim as my base. Here are my essential plugins:
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-text-secondary">
                  <li><strong>Telescope</strong> - Fuzzy finding everything</li>
                  <li><strong>LSP (native)</strong> - Code intelligence</li>
                  <li><strong>Treesitter</strong> - Better syntax highlighting</li>
                  <li><strong>nvim-cmp</strong> - Autocompletion</li>
                  <li><strong>nvim-tree</strong> - File explorer</li>
                  <li><strong>gitsigns</strong> - Git integration</li>
                  <li><strong>which-key</strong> - Keybinding helper</li>
                </ul>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Tmux: The Game Changer</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Tmux lets me split terminals, create sessions, and never lose my work. My typical setup:
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <p className="text-sm text-text-tertiary mb-2">Session Layout:</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 text-sm">
                  <code className="text-green-400">{`Window 1: Editor (Neovim)
Window 2: Dev server (npm run dev)
Window 3: Git (lazygit)
Window 4: Testing

All in one tmux session.
Detach/reattach anytime.`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Productivity Wins</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">1. Never Touch the Mouse</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Everything is keyboard-driven. Navigation, file operations, git commands. Hands stay on home row. Speed increases 30%.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. Instant Startup</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Neovim opens in milliseconds. VS Code took 5-10 seconds. Over a day, that's minutes saved.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">3. Session Persistence</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Computer crashes? tmux saves my sessions. Reboot and everything's back exactly as I left it.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">4. Less Distraction</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                No sidebar clutter. No extension popups. Just code and terminal. Focus increased dramatically.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Is It Worth It?</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Depends on your use case:
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">YES if you:</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
                <li>Code 8+ hours a day</li>
                <li>Work with large projects</li>
                <li>Value keyboard efficiency</li>
                <li>Want to learn vim motions</li>
                <li>Work on remote servers</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">NO if you:</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
                <li>Code occasionally</li>
                <li>Need GUI debugging</li>
                <li>Don't want the learning curve</li>
                <li>Happy with current setup</li>
              </ul>

              <div className="glass rounded-xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg text-white italic">
                  "The terminal isn't faster because it's harder—it's faster because it removes everything that slows you down."
                </p>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Getting Started</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Don't go all-in immediately. Here's how I'd do it again:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-6">
                <li>Learn vim motions in VS Code (vim extension)</li>
                <li>Get comfortable with hjkl, w, b, gg, G</li>
                <li>Install Neovim, use a preconfigured distro (LazyVim, NvChad)</li>
                <li>Use it for small projects first</li>
                <li>Add tmux when ready</li>
                <li>Customize gradually</li>
              </ol>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Two Years Later</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I'm faster, more focused, and I genuinely enjoy my dev environment. The learning curve was steep, but worth every frustrating moment.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Would I recommend it to everyone? No. Would I recommend it to developers who want to level up their workflow? Absolutely.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-tertiary/10">
              {['Terminal', 'Neovim', 'Tmux', 'Productivity', 'Workflow'].map(tag => (
                <span key={tag} className="px-4 py-2 glass-light rounded-full text-sm">{tag}</span>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-text-tertiary/10">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Share this article:</span>
                <div className="flex gap-3">
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Twitter size={18} /></button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Linkedin size={18} /></button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Facebook size={18} /></button>
                  <button className="p-3 glass rounded-full hover:bg-surface-lighter transition-all"><Share2 size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Terminal;