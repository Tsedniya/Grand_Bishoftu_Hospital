import { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './components/TitleAbout'


const App=() =>{
 
  return (
    < >
      <Navbar />
   

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
    </>
  )
}

export default App
