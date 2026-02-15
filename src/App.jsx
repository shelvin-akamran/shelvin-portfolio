import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import Hero from "./components/HeroSection.jsx"

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Hero/>
    </>
  )
}

export default MainLayout
