// import './App.css'

import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Work from "./Pages/Work/Work"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
    </Routes>
    
    </>
  )
}

export default App
