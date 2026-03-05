import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const TypeScriptMistakes = () => {
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
              <span className="text-white">TypeScript Mistakes</span>
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
              TypeScript Mistakes That Cost Me Hours
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
                <div className="flex items-center gap-2"><Calendar size={16} />October 3, 2025</div>
                <div className="flex items-center gap-2"><Clock size={16} />9 min read</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-12">
              <div className="w-full aspect-video bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔷</div>
                  <p className="text-text-tertiary">TypeScript Lessons</p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                TypeScript was supposed to make my code safer. Instead, I spent three months fighting the type system, debugging cryptic errors, and questioning my life choices. Here are the mistakes I made so you don't have to.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Mistake #1: Using 'any' Everywhere</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                When TypeScript errors got annoying, I slapped 'any' on everything. Problem solved! Except... now I had zero type safety. Defeats the entire purpose.
              </p>

              <div className="glass rounded-xl p-6 mb-6 border-l-4 border-red-400">
                <p className="text-sm text-red-400 mb-2">Bad:</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-red-400">{`function processData(data: any) {
  return data.map((item: any) => item.value);
}
// TypeScript can't help you here`}</code>
                </pre>

                <p className="text-sm text-green-400 mt-6 mb-2">Good:</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`interface DataItem {
  value: string;
  id: number;
}

function processData(data: DataItem[]) {
  return data.map(item => item.value);
}
// Now TypeScript can catch errors!`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Mistake #2: Type vs Interface Confusion</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I spent weeks randomly using 'type' and 'interface' without understanding the difference. Here's what I learned:
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Use Interface For:</h3>
                <ul className="space-y-2 text-text-secondary mb-6">
                  <li>• Object shapes</li>
                  <li>• When you need to extend/merge</li>
                  <li>• React component props</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Use Type For:</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Unions and intersections</li>
                  <li>• Primitives and tuples</li>
                  <li>• When you need advanced features</li>
                </ul>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Mistake #3: Not Using Utility Types</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I was manually creating types when TypeScript had them built-in:
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Instead of manually creating:
interface UserWithoutPassword {
  id: number;
  name: string;
  email: string;
}

// Use Omit:
type PublicUser = Omit<User, 'password'>;

// Or make everything optional with Partial:
type UserUpdate = Partial<User>;

// Or pick specific fields:
type UserPreview = Pick<User, 'id' | 'name'>;`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Mistake #4: Ignoring Strict Mode</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I turned off strict mode because it was "annoying." Bad idea. Strict mode catches real bugs. Enable it and deal with the errors—your future self will thank you.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Mistake #5: Over-Engineering Types</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                I created complex generic types that no one (including me) could understand:
              </p>

              <div className="glass rounded-xl p-6 mb-6 border-l-4 border-orange-400">
                <p className="text-sm text-orange-400 mb-2">Too Complex:</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-orange-400">{`type DeepPartial<T> = T extends object 
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;
// Unless you need this, don't write it`}</code>
                </pre>

                <p className="text-sm text-green-400 mt-6 mb-2">Simple is Better:</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">{`interface UpdateUserInput {
  name?: string;
  email?: string;
}
// Clear, readable, maintainable`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">What Actually Helps</h2>

              <ol className="list-decimal list-inside space-y-4 text-text-secondary mb-6">
                <li><strong className="text-white">Start with inference.</strong> Let TypeScript infer types when possible.</li>
                <li><strong className="text-white">Be explicit at boundaries.</strong> Type function parameters and return values.</li>
                <li><strong className="text-white">Use unknown over any.</strong> Forces you to check types before use.</li>
                <li><strong className="text-white">Learn utility types.</strong> They solve 90% of common cases.</li>
                <li><strong className="text-white">Read the errors.</strong> TypeScript errors are verbose but accurate.</li>
              </ol>

              <div className="glass rounded-xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg text-white italic">
                  "TypeScript isn't about writing perfect types—it's about catching bugs before they reach production."
                </p>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Bottom Line</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                TypeScript has a learning curve. You'll fight it at first. But once it clicks, you'll never want to go back to plain JavaScript. The safety and autocomplete alone are worth it.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                Start simple. Type your function signatures. Use interfaces for objects. Learn utility types. Gradually level up. Don't try to be a TypeScript wizard on day one.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-tertiary/10">
              {['TypeScript', 'JavaScript', 'Learning', 'Best Practices'].map(tag => (
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

export default TypeScriptMistakes;