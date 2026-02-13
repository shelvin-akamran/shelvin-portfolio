import { Outlet } from "react-router-dom"
import Navigation from "./components/navigation.jsx"

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default MainLayout
