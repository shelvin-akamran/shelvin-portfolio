import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import Hero from "./components/HeroSection.jsx"
import WorkExperience from "./components/WorkExperience"

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Hero/>
      <WorkExperience/>

    </>
  )
}

export default MainLayout
