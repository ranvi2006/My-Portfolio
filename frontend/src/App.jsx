import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skill from './pages/Skill'
import Certificate from './pages/Certificate'
import Navbar from './component/Navbar/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/eduction' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
