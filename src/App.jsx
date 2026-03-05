import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SayHello from './components/SayHello';
import CTASection from './components/CTASection';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <SayHello/>
      <CTASection/>
      <Footer />
    </div>
  );
}

export default App;