import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactME from "./components/ContactME/ContactME";
import Footer from "./components/Footer/Footer";
import CTF from "./components/CTF/CTF";
import About from "./components/About/About";

const App = () => {
    return (
        <>
        <section id="home"></section>
            <Navbar />
            <div className="container" >
                <Hero />
                <section id="about"></section>
                <About /> 
                <section id="skills"></section>
                <Skills />
                <section id="CTF"></section>
                <CTF />
                <section id="projects"> </section>
                <Projects />
                <section id="contact"></section>
                <ContactME />
            </div>
            <Footer />
        </>
    );
}

export default App;