import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";



function Home() {

  return (

    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>

  );

}




function App() {


  return (

    <>


      <Navbar />


      <ScrollToTop />



      <main>

        <Routes>


          <Route
            path="/"
            element={<Home />}
          />


          <Route
            path="/privacy"
            element={<Privacy />}
          />


          <Route
            path="/terms"
            element={<Terms />}
          />


        </Routes>


      </main>



      <Footer />



    </>

  );

}



export default App;