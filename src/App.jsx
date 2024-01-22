
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Material from './Components/Material';
import Footer from './Components/Footer';
import Collections from './Components/Collections';
import LeftComponent from './Components/LeftComponent';
import CardCarousel from './Components/CardCarousel';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import './Components/fontawesome';

function App() {
  return (
   <>
     <Header/>   
     <Hero/>
     <Collections/>
     <div className=" flex justify-center items-center h-screen  ml-0 sm:ml-24 ">
      <LeftComponent />
      <CardCarousel />
    </div>
     <About/>
     <Material/>
     <Testimonials/>
     <Contact/>
     <Footer/>
   </>
    
  );
}

export default App;
