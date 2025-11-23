import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from "./components/Hero/hero"
import About from "./components/About/about"
import Service from "./components/Service/service"
import Contact from "./components/Contact/contact"
import Policy from "./components/Policy/policy"
import Footer from "./components/Footer/footer"
function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/> 
     <Service/>
     <Contact/>
     <Policy/>
     <Footer/>
    </>
  )
}

export default App
