import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import Hero from "./components/HeroSection.jsx"
import WorkExperience from "./components/WorkExperience"
import TechStack from "./components/TechStack"
import Testimonials from "./components/Testimonials.jsx"

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Hero/>
      <WorkExperience/>
      <TechStack/>
      <Testimonials/>

    </>
  )
}

export default MainLayout
