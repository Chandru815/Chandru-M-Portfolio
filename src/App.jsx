import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
function App() {
    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Projects />
                <Experience/>
                <Certifications/>
                <Contact />
                <Footer/>
            </main>
        </>
    );
}

export default App;
