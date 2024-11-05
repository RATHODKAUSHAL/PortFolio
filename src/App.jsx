// import './App.css'

import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Work from "./Pages/Work/Work"
import Resume from "./Pages/Resume/Resume"
import Skill from "./Pages/Skill/Skill"
import Contact from "./Pages/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/skill" element={<Skill/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
    
    </>
  )
}

export default App
