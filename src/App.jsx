
import BlurBg from "./components/BlurBg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
    <BlurBg />
    <Navbar />

    <main className="antialiased max-w-7xl mx-auto relative z-10">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </main>
    </>
  );
};

export default App;