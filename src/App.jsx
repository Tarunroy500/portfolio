import React from 'react'
import Home from './components/home/Home'
import './App.css'
import Timeline from './components/Timeline/Timeline'
import Skills from './components/skills/Skills'
import  Portfolio  from './components/portfolio/Portfolio'
import CodingProfile from './components/CodingProfile/coding'
import Services from './components/services/Services'
function App() {

  return (
    <>
      <Home/>
      <Timeline/>
      <Skills/>
      <Portfolio/>
      <CodingProfile />
      {/* <Services/> */}

    </>
  )
}

export default App
