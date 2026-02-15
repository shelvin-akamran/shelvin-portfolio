import { Outlet } from "react-router-dom"
import Navigation from "./components/navigation.jsx"
import Hero from "./components/hero-section.jsx"

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
