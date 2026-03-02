import Navigation from './components/Navigation';
import Hero from './components/HeroSection';
import WorkExperience from './components/WorkExperience';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import SayHello from './components/SayHello';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation />
      <Hero />
      <WorkExperience />
      <TechStack />
      <Testimonials />
      <SayHello />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;