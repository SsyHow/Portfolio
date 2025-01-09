import React from 'react'
import './App.css'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Project from './routes/Projects'
import Resume from './routes/Resume'

function App() {
  

  return (
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
