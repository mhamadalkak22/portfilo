import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import About from './component/About/About'
import Project from './component/Project/Project'
import Contact from './component/Contact/Contact'
import FlyingStars from './component/FlyingStars/FlyingStars'
import Skills from './component/Skills/Skills'
import Footer from './component/Footer/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, [])
  return (
    <div  >
      <FlyingStars/>
  <Router 
        future={{
          v7_startTransition: true, 
          v7_relativeSplatPath: true 
        }}
      >
        <Navbar />

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
      </Router>
   
    
    </div>
  )
}
