import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const NextJSPerf = () => {
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
              <span className="text-white">Next.js 15 Performance</span>
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
              Next.js 15: The Performance Features That Actually Matter
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-t border-text-tertiary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center font-bold text-white">SA</div>
                <div>
                  <div className="font-semibold">Shelvin Akamuran</div>
                  <div className="text-sm text-text-tertiary">Full-Stack Developer</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-tertiary">
                <div className="flex items-center gap-2"><Calendar size={16} />December 10, 2025</div>
                <div className="flex items-center gap-2"><Clock size={16} />10 min read</div>
              </div>
            </div>

           <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src="https://i.pinimg.com/1200x/82/9c/97/829c97264446ed3fd4e5147fc3d2656a.jpg"
                alt="AI Development Journey"
                className="w-full aspect-video object-cover"
              />
            </div>


            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                I just migrated three production apps to Next.js 15, and the performance improvements are real. Not "5% faster" real—more like "users actually notice" real. Here's what actually matters in Next.js 15, stripped of the marketing fluff.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Server Components Changed Everything</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                Server Components aren't new to Next.js 15, but they're finally stable enough to use in production. The performance win? My JavaScript bundle size dropped by 40%. Forty percent. Components that don't need interactivity stay on the server, ship zero JavaScript to the client.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <p className="text-sm text-text-tertiary mb-2">Before (Client Component):</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-green-400">{`// 45KB JavaScript bundle
'use client'
import { format } from 'date-fns'

export default function BlogPost({ post }) {
  return <div>{format(post.date, 'MMM dd')}</div>
}`}</code>
                </pre>
                <p className="text-sm text-text-tertiary mt-4 mb-2">After (Server Component):</p>
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-green-400">{`// 0KB JavaScript to client
import { format } from 'date-fns'

export default function BlogPost({ post }) {
  return <div>{format(post.date, 'MMM dd')}</div>
}`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Partial Pre-Rendering is a Game-Changer</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                This feature alone is worth the upgrade. Your static content loads instantly while dynamic parts stream in. Users see something immediately instead of staring at spinners.
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                My e-commerce product pages load the layout and static product info in 100ms, then stream in reviews and inventory status. Perceived performance went through the roof.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Turbopack Reality Check</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Everyone's hyping Turbopack. Is it faster? Yes. Does it matter for small projects? Not really. For our 50+ page app with thousands of components? Development builds went from 8 seconds to 1.2 seconds. That adds up over a day of development.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Streaming and Suspense</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Streaming lets you show content as it's ready instead of waiting for everything. Wrap slow components in Suspense, show a loading state, stream the real content when ready.
              </p>

              <div className="glass rounded-xl p-6 mb-6">
                <pre className="bg-surface-dark/50 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-green-400">{`import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Header /> {/* Loads instantly */}
      <Suspense fallback={<Skeleton />}>
        <SlowComponent /> {/* Streams when ready */}
      </Suspense>
    </>
  )
}`}</code>
                </pre>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Image Optimization Gets Better</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Next/Image was already good. Now it's great. Automatic format detection (WebP, AVIF), better placeholder blur, faster loading. Our Largest Contentful Paint dropped from 2.1s to 0.9s.
              </p>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">What Didn't Matter (For Us)</h2>

              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
                <li><strong>Metadata API:</strong> Nice, but the old way worked fine</li>
                <li><strong>Parallel Routes:</strong> Cool concept, limited real-world use cases</li>
                <li><strong>Intercepting Routes:</strong> Niche feature, rarely needed</li>
              </ul>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">Migration Tips</h2>

              <ol className="list-decimal list-inside space-y-3 text-text-secondary mb-6">
                <li>Start with Server Components by default, add 'use client' only when needed</li>
                <li>Don't rush to rewrite everything—migrate page by page</li>
                <li>Test in production-like conditions—dev mode doesn't show real performance</li>
                <li>Use React DevTools Profiler to find actual bottlenecks</li>
              </ol>

              <div className="glass rounded-xl p-8 mt-12 border-l-4 border-primary">
                <p className="text-lg text-white italic">
                  "Next.js 15 isn't about flashy new features—it's about making your apps legitimately faster without extra work."
                </p>
              </div>

              <h2 className="text-3xl font-light serif-heading mt-12 mb-6">The Bottom Line</h2>

              <p className="text-text-secondary leading-relaxed mb-6">
                Upgrade to Next.js 15 if you care about performance. The improvements are real, measurable, and user-noticeable. Server Components alone justify the migration effort. Just don't expect miracles—bad code is still bad code, even with a faster framework.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-tertiary/10">
              {['Next.js', 'Performance', 'React', 'Web Development'].map(tag => (
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

export default NextJSPerf;