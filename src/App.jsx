import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ProcessSection from "./components/ProcessSection";
// import Step1 from "./components/story/Step1";
// import Step2 from "./components/story/Step2";
// import Step3 from "./components/story/Step3";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import Step4 from "./components/story/Step4";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ProcessSection />
      {/* <Step2 />
      <Step3 /> */}
      {/* <Step4 /> */}
      <ProjectsSection />
      <SkillsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
