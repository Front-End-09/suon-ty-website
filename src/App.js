import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Service from "./components/Services"
import Skill from "./components/Skills"
// import Project from "./components/Projects"
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App(){
    return (
       <>
         <Navbar/>
         <Header/>
         <About/>
         <Service/>
         <Skill/>
         {/* <Project/> */}
         <Testimonial/>
         <Contact/>
         <Footer/>
       </>
    );
}
export default App;