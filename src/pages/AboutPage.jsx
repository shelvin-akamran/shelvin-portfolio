import { useState } from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
import SayHello from '../components/SayHello';
import CTASection from '../components/CTASection';

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-white pt-24">
        {/* Main About Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left - Content */}
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary mb-8">
                    MORE ABOUT ME
                  </p>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 leading-tight">
                    I'm Shelvin, a<br />
                    creative <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-primary font-serif">engineer</span>
                  </h1>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-6 text-text-secondary leading-relaxed">
                  <p className="text-lg">
                    I'm Shelvin Akamuran, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
                  </p>

                  <p className="text-lg">
                    When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
                  </p>

                  <p className="text-lg font-medium">
                    I believe in waking up each day eager to make a difference!
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6 pt-4">
                  <a 
                    href="https://linkedin.com/in/shelvinakamuran" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/shelvinakamuran" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://twitter.com/shelvinakamuran" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:text-white transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>

              {/* Right - Photo Gallery */}
              <div className="relative">
                {/* Main Photo */}
                <div className="relative z-10">
                  <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/about-photo-main.jpg" 
                      alt="Shelvin Akamuran"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div className="hidden w-full aspect-[4/5] bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20 items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">👩‍💻</div>
                        <p className="text-sm text-text-tertiary">Add your photo here</p>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="text-right mt-6">
                    <p className="text-sm text-text-secondary italic">I Travel</p>
                  </div>
                </div>

                {/* Background Decorative Photos */}
                <div className="absolute top-0 right-0 -z-10">
                  <div className="w-64 h-80 rounded-3xl bg-cyan-500/20 transform translate-x-12 -translate-y-12"></div>
                </div>
                <div className="absolute bottom-0 left-0 -z-10">
                  <div className="w-48 h-64 rounded-3xl bg-surface-dark transform -translate-x-8 translate-y-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-20 px-6 bg-surface-dark/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Full-Stack Development</h3>
                <p className="text-text-secondary leading-relaxed">
                  Building end-to-end web applications with React, Next.js, Node.js, and modern technologies.
                </p>
              </div>

              {/* Card 2 */}
              <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3 text-white">UI/UX Design</h3>
                <p className="text-text-secondary leading-relaxed">
                  Crafting beautiful, intuitive interfaces that users love to interact with.
                </p>
              </div>

              {/* Card 3 */}
              <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Performance Optimization</h3>
                <p className="text-text-secondary leading-relaxed">
                  Ensuring lightning-fast load times and smooth user experiences across all devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light serif-heading mb-12 text-center">
              What Drives Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-light rounded-xl p-6 border-l-4 border-pink-400">
                <h3 className="text-lg font-semibold text-white mb-2">🚀 Innovation First</h3>
                <p className="text-sm text-text-secondary">
                  Always pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
                </p>
              </div>

              <div className="glass-light rounded-xl p-6 border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-white mb-2">💖 User-Centric</h3>
                <p className="text-sm text-text-secondary">
                  Every line of code I write is focused on creating seamless, delightful user experiences.
                </p>
              </div>

              <div className="glass-light rounded-xl p-6 border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-white mb-2">📚 Continuous Learning</h3>
                <p className="text-sm text-text-secondary">
                  The tech world evolves fast, and so do I. Forever learning, forever growing.
                </p>
              </div>

              <div className="glass-light rounded-xl p-6 border-l-4 border-cyan-400">
                <h3 className="text-lg font-semibold text-white mb-2">🤝 Collaboration</h3>
                <p className="text-sm text-text-secondary">
                  Great products are built by great teams. I thrive in collaborative environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-20 px-6 bg-surface-dark/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light serif-heading mb-12 text-center">
              Beyond the Code
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-3">☕</div>
                <p className="text-sm text-text-secondary">Coffee Enthusiast</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🌍</div>
                <p className="text-sm text-text-secondary">Love to Travel</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🎵</div>
                <p className="text-sm text-text-secondary">Music Lover</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">📚</div>
                <p className="text-sm text-text-secondary">Avid Reader</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default AboutPage;