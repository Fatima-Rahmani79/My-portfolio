import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ProcessSection from "./components/ProcessSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ProcessSection />
      <ProjectsSection />
      <SkillsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
