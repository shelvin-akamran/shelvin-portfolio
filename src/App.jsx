import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SayHello from './components/SayHello';
import CTASection from './components/CTASection';

// Blog Posts
import AIJourney from './pages/blog/AIJourney';
import Web3Apps from './pages/blog/Web3Apps';
import NextJSPerf from './pages/blog/NextJSPerf';
// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/blog/BlogPage';

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/ai-development-journey" element={<AIJourney />} />
        <Route path="/blog/web3-real-world" element={<Web3Apps />} />
        <Route path="/blog/nextjs-performance" element={<NextJSPerf />} />
      </Routes>
  
      <SayHello/>
      <CTASection/>
      <Footer />
    </div>
  );
}

export default App;
