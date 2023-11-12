import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {

  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />

    <SocialLinks />
    </>
  )
}

export default App;
