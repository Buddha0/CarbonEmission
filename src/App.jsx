
import './App.css'
import { useState } from 'react'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
import Tracker from './Pages/Tracker'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  
const[toggleContact,setToggleContact] = useState(false)
  return (
    <>
      <Router>
        <Routes>
         <Route path = "/" element = {<Home toggleContact = {toggleContact} setToggleContact = {setToggleContact}/>}/>
         <Route path = "/about" element = {<About/>}/>
         <Route path = "/tracker" element = {<Tracker/>}/>
        </Routes>
          <Contact toggleContact = {toggleContact}/>
        <Footer />
      </Router>

    </>
  )


}

export default App
