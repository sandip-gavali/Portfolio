import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ProjectDetail from './Components/ProjectDetail/ProjectDetail'
import Resume from './Components/Resume/Resume'
import './App.css'
import ServiceDetail from './Components/ServiceDetail/ServiceDetail'

// All portfolio sections
const Home = () => (
  <div className="app-drawer">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <MyWork />
    <Contact />
    <Footer />
  </div>
)

const App = () => {
  return (
    <Routes>
      <Route path="/"            element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/resume"      element={<Resume />} />
      <Route path="/serviceopen/:id" element={<ServiceDetail/>} />
    </Routes>
  )
}

export default App