import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import Hero from "./components/HeroSection.jsx"
import WorkExperience from "./components/WorkExperience"
import TechStack from "./components/TechStack"
import Testimonials from "./components/Testimonials.jsx"
import SayHello from "./components/SayHello.jsx"
import Footer from "./components/Footer.jsx"

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Hero/>
      <WorkExperience/>
      <TechStack/>
      <Testimonials/>
      <SayHello/>
      <Footer/>

    </>
  )
}

export default MainLayout
