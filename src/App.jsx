import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SayHello from './components/SayHello';
import CTASection from './components/CTASection';

// Blog Posts
import AIJourney from './pages/blog/AIJourney';
import Web3Apps from './pages/blog/Web3Apps';
import NextJSPerf from './pages/blog/NextJSPerf';
import Burnout from './pages/blog/Burnout';
import ReactPatterns from './pages/blog/ReactPatterns';
import TypeScriptMistakes from './pages/blog/TypescriptMistakes';
import FirstYear from './pages/blog/FirstYear';
import StateManagement from './pages/blog/StateManagement';
import Terminal from './pages/blog/Terminal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/blog/BlogPage';
import GuestbookPage from './pages/GuestbookPage';
import BucketListPage from './pages/BucketlistPage';
import AttributionPage from './pages/AttributionPage';

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/guestbook" element={<GuestbookPage />} />
        <Route path="/bucketlist" element={<BucketListPage />} />
        <Route path="/attribution" element={<AttributionPage/>} />
        <Route path="/blog/ai-development-journey" element={<AIJourney />} />
        <Route path="/blog/web3-real-world" element={<Web3Apps />} />
        <Route path="/blog/nextjs-performance" element={<NextJSPerf />} />
        <Route path="/blog/developer-burnout" element={<Burnout />} />
        <Route path="/blog/react-patterns-2026" element={<ReactPatterns />} />
        <Route path="/blog/terminal-workflow" element={<Terminal />} />
        <Route path="/blog/typescript-mistakes" element={<TypeScriptMistakes />} />
        <Route path="/blog/first-year-developer" element={<FirstYear />} />
        <Route path="/blog/state-management-2026" element={<StateManagement />} />
      </Routes>
  
      <SayHello/>
      <CTASection/>
      <Footer />
    </div>
  );
}

export default App;
