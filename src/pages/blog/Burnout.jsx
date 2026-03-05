import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import SayHello from '../../components/SayHello';
import CTASection from '../../components/CTASection';

const Burnout = () => {
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light serif-heading mb-6 leading-tight">
              I Almost Quit Coding: My Battle with Developer Burnout
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
                <div className="flex items-center gap-2"><Calendar size={16} />November 22, 2025</div>
                <div className="flex items-center gap-2"><Clock size={16} />8 min read</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src="https://i.pinimg.com/1200x/bb/a1/b9/bba1b9fe27c61db6d88940c09fa69571.jpg"
                alt="AI Development Journey"
                className="w-full aspect-video object-cover"
              />
            </div>


            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Six months ago, I sat in my apartment at 2 AM, staring at my laptop screen, and realized I couldn't remember the last time I enjoyed coding. I was working 80-hour weeks, skipping meals, and my hands shook when I opened VS Code. I was burned out, and I didn't even realize it until I hit rock bottom.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Warning Signs I Ignored</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                Looking back, the signs were obvious. But when you're in it, you rationalize everything.
              </p>

              <div className="glass rounded-xl p-6 mb-6 border-l-4 border-red-400">
                <h3 className="text-xl font-semibold mb-4">Physical Symptoms:</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Constant headaches (I blamed my monitor)</li>
                  <li>• Insomnia (I thought it was coffee)</li>
                  <li>• Heart palpitations (just stress, right?)</li>
                  <li>• Weight loss (too busy to eat properly)</li>
                  <li>• Shaking hands when coding</li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6 mb-6 border-l-4 border-orange-400">
                <h3 className="text-xl font-semibold mb-4">Mental/Emotional Signs:</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Dreading opening my laptop</li>
                  <li>• Crying in the shower (more than once)</li>
                  <li>• Snapping at friends and family</li>
                  <li>• Feeling like a fraud (imposter syndrome on steroids)</li>
                  <li>• Zero motivation for side projects</li>
                </ul>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">What Caused It</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">1. The "Always Be Grinding" Culture</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Tech Twitter glorifies the hustle. "While you're sleeping, someone else is coding." "Sleep when you're dead." "10x developers work 100 hours a week." I internalized all of it. I felt guilty taking weekends off. I felt lazy working only 40 hours.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. Perfectionism</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Every line of code had to be perfect. Every PR had to be flawless. I'd spend hours refactoring code that was already good enough. I couldn't ship anything unless it was "perfect"—which meant I shipped slowly and stressed constantly.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">3. Saying Yes to Everything</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Freelance project? Yes. Help a friend build their app? Yes. Weekend hackathon? Yes. Mentoring juniors? Yes. I couldn't say no. I thought saying no meant I wasn't good enough or didn't care enough.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">4. No Boundaries</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Work laptop on the kitchen table. Slack on my phone 24/7. "Quick fix" at 11 PM that turned into 3 hours. My bedroom was my office. I never "left" work.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Breaking Point</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                It happened during a code review. A senior developer left a comment: "This could be cleaner." That's it. Normal feedback. But I broke down. I closed my laptop, walked to my bedroom, and cried for an hour.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                That's when I knew something was seriously wrong.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Road to Recovery</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">1. I Took Time Off</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Two weeks. No laptop. No Slack. No email. I told my team I was dealing with a family emergency (which technically wasn't a lie—I was the family emergency). I went to the coast, read books that had nothing to do with tech, and slept. A lot.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. I Started Therapy</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Best decision I ever made. My therapist helped me see that my worth wasn't tied to my productivity. That rest isn't laziness. That boundaries aren't selfish. I learned to recognize when I was spiraling and how to stop it.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">3. I Set Actual Boundaries</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Work laptop stays in a dedicated room. After 6 PM, I'm done. Weekends are for life, not code. Slack notifications off after hours. I had to practice saying "I can't take that on right now" until it felt natural.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">4. I Rediscovered Hobbies</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                I used to love photography. I forgot that. I started taking my camera out on weekends. I joined a hiking group. I cooked elaborate meals. Activities that had NOTHING to do with tech.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">5. I Learned to Be "Good Enough"</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Perfect is the enemy of done. This was the hardest lesson. My code doesn't have to be perfect. It has to work, be maintainable, and solve the problem. That's enough. Ship it and move on.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">What I Know Now</h2>

              <div className="glass rounded-xl p-6 mb-6">
                <ul className="space-y-4 text-text-secondary">
                  <li><strong className="text-white">Burnout isn't about working hard—it's about working without recovery.</strong> You can sprint, but you need to rest between sprints.</li>
                  <li><strong className="text-white">Your worth isn't your output.</strong> You're valuable as a person, not just as a developer.</li>
                  <li><strong className="text-white">Rest is productive.</strong> A well-rested brain solves problems faster than a fried one.</li>
                  <li><strong className="text-white">Saying no is a skill.</strong> Protect your time and energy.</li>
                  <li><strong className="text-white">Therapy isn't weakness.</strong> It's maintenance for your brain.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">If You're Burning Out Right Now</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Please, take this seriously. I ignored the signs for months. Don't do that.
              </p>

              <div className="glass rounded-xl p-6 mb-6 border-l-4 border-green-400">
                <h4 className="font-semibold mb-4">Immediate Steps:</h4>
                <ol className="list-decimal list-inside space-y-2 text-text-secondary">
                  <li>Tell someone you trust what you're going through</li>
                  <li>Take at least one full day off (ideally a week)</li>
                  <li>Turn off work notifications</li>
                  <li>Do something that brings you joy</li>
                  <li>Consider talking to a therapist</li>
                </ol>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Resources That Helped Me</h2>

              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
                <li><strong>BetterHelp:</strong> Online therapy (what I used)</li>
                <li><strong>Headspace:</strong> Meditation app</li>
                <li><strong>/r/cscareerquestions:</strong> Community support</li>
                <li><strong>OSMI:</strong> Open Sourcing Mental Illness</li>
                <li><strong>Local support groups:</strong> Google "tech burnout support"</li>
              </ul>

              <div className="glass rounded-xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg text-white italic">
                  "You can't pour from an empty cup. Take care of yourself first."
                </p>
                <p className="text-sm text-text-tertiary mt-2">- What my therapist told me (and she was right)</p>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">One Year Later</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I still love coding. I work on cool projects. I'm productive. But now I also hike on weekends, cook dinner with friends, and sleep 8 hours a night. I'm a better developer because I'm a healthier person.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                If you're struggling, know that it gets better. You're not weak. You're not a failure. You're human. And humans need rest.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Take care of yourself. Your code will still be there tomorrow.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-tertiary/10">
              {['Mental Health', 'Career', 'Burnout', 'Self-Care', 'Personal'].map(tag => (
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

      <SayHello />
      <CTASection />
    </>
  );
};

export default Burnout;