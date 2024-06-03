/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import Projects from './Pages/Projects/Projects'
import Team from './Pages/Team/Team'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Error from './Pages/Error/Error'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='about' element={<About />} />
          <Route path='services' element={<ServicesPage />} /> 
          <Route path='project' element={<Projects />} />
          <Route path='team' element={<Team />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />  
        </Routes>
      </BrowserRouter>
  )
}

export default App