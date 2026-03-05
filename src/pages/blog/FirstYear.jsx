import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const FirstYear = () => {
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
              <span className="text-white">First Year as Developer</span>
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
              What I Wish I Knew Before My First Dev Job
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
                <div className="flex items-center gap-2"><Calendar size={16} />September 15, 2025</div>
                <div className="flex items-center gap-2"><Clock size={16} />10 min read</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <div className="w-full aspect-video bg-gradient-to-br from-yellow-400/20 via-orange-400/20 to-red-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <p className="text-text-tertiary">First Year Lessons</p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                A year ago, I walked into my first dev job terrified. I had done bootcamp projects and tutorials, but real production code? I felt like a fraud. Here's everything I wish someone had told me on day one.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Week One: Pure Terror</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                My first task: "Add a filter to the user dashboard." Simple, right? Wrong. The codebase was 50,000 lines. I didn't know where to start. I spent two hours just finding the right file.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                I was convinced they'd realize their mistake and fire me. Spoiler: They didn't. Everyone struggles at first.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Imposter Syndrome is Universal</h2>

              <div className="glass rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">What I Thought:</h3>
                <ul className="space-y-2 text-text-secondary mb-6">
                  <li>• "Everyone here is smarter than me"</li>
                  <li>• "I'm the only one who doesn't get it"</li>
                  <li>• "They'll realize I'm not good enough"</li>
                  <li>• "I should know this already"</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">The Reality:</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Senior devs Google basic stuff constantly</li>
                  <li>• Everyone feels lost in a new codebase</li>
                  <li>• No one expects juniors to know everything</li>
                  <li>• Asking questions makes you look engaged, not dumb</li>
                </ul>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Code Reviews Aren't Personal Attacks</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                My first PR got 23 comments. I almost cried. But then I realized: comments aren't criticism, they're collaboration. Senior devs are teaching, not judging.
              </p>

              <div className="glass rounded-xl p-6 mb-6 border-l-4 border-green-400">
                <p className="text-sm text-green-400 mb-2">Mindset Shift:</p>
                <ul className="space-y-2 text-text-secondary">
                  <li><strong className="text-white">Old:</strong> "They think my code sucks"</li>
                  <li><strong className="text-white">New:</strong> "They're helping me improve"</li>
                  <li className="mt-4"><strong className="text-white">Old:</strong> "I should've known this"</li>
                  <li><strong className="text-white">New:</strong> "Now I know this for next time"</li>
                </ul>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Ask Questions ASAP</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I wasted three days stuck on a problem because I was too scared to ask. Finally, I asked a senior dev. He solved it in 10 minutes and said "Good question! I should've explained that."
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">How to Ask Good Questions:</h3>
                <ol className="list-decimal list-inside space-y-2 text-text-secondary">
                  <li>Show what you've tried</li>
                  <li>Be specific about the problem</li>
                  <li>Include error messages</li>
                  <li>Ask "Can you point me in the right direction?" not "Can you do this for me?"</li>
                </ol>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Git Will Scare You (It's Normal)</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I broke the main branch. Twice. First time, I panicked. Second time, I knew how to fix it. Git mistakes aren't disasters—they're learning opportunities.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <p className="text-sm text-text-tertiary mb-2">Commands I Use Daily:</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`git status  # Where am I?
git add .  # Stage changes
git commit -m "message"  # Save changes
git pull  # Get latest
git push  # Send my changes

# Oh no, I messed up:
git reset --soft HEAD~1  # Undo last commit
git reflog  # Find lost commits
git stash  # Save work for later`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">You Won't Know Everything (No One Does)</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                The codebase uses Redux, GraphQL, Docker, Kubernetes, and three different testing frameworks. I don't know all of them. Neither do the seniors. We all Google things constantly.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Month One vs Month Twelve</h2>

              <div className="glass rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Month 1:</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Took 3 days for simple features</li>
                      <li>• Got lost in codebase daily</li>
                      <li>• Asked questions nervously</li>
                      <li>• Scared of breaking things</li>
                      <li>• Felt like an imposter</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-400">Month 12:</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Ship features in hours</li>
                      <li>• Navigate codebase confidently</li>
                      <li>• Ask questions freely</li>
                      <li>• Break things (in dev) fearlessly</li>
                      <li>• Help onboard new juniors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Lessons That Stuck</h2>

              <ol className="list-decimal list-inside space-y-4 text-text-secondary mb-6">
                <li><strong className="text-white">Everyone Googles</strong> - Even 10-year veterans look up syntax</li>
                <li><strong className="text-white">Questions Are Good</strong> - They show you're engaged and learning</li>
                <li><strong className="text-white">Mistakes Happen</strong> - We have version control and backups for a reason</li>
                <li><strong className="text-white">Reading Code,Writing Code</strong> - You'll spend more time reading than writing</li>
                <li><strong className="text-white">Take Notes</strong> - Your memory isn't as good as you think</li>
              </ol>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Advice for Your First Job</h2>

              <div className="glass rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-text-secondary">
                  <li><strong className="text-white">Week 1:</strong> Don't panic. Everyone's confused at first.</li>
                  <li><strong className="text-white">Month 1:</strong> Ask all the questions. Take all the notes.</li>
                  <li><strong className="text-white">Month 3:</strong> Start contributing meaningfully. Volunteer for tasks.</li>
                  <li><strong className="text-white">Month 6:</strong> You'll finally feel competent. Celebrate this.</li>
                  <li><strong className="text-white">Month 12:</strong> Look back and be amazed at how far you've come.</li>
                </ul>
              </div>

              <div className="glass rounded-xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg text-white italic">
                  "Your first dev job isn't about being the best coder—it's about being the best learner."
                </p>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">You'll Be Fine</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                A year ago, I was terrified. Now I'm shipping features, reviewing code, and mentoring interns. If I can do it, you absolutely can too.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Be patient with yourself. Ask questions. Make mistakes. Learn from them. That's literally the job.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-tertiary/10">
              {['Career', 'First Job', 'Learning', 'Advice', 'Junior Developer'].map(tag => (
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

export default FirstYear;