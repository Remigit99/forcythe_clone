// import Home from './pages/Home'
import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"

import './App.css'

const App = () => {


  return (
    <>
      {/* <Home/> */}
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
