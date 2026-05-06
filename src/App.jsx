import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Step1 from "./components/story/Step1";
import Step2 from "./components/story/Step2";
import Step3 from "./components/story/Step3";
// import Step4 from "./components/story/Step4";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Step1 />
      <Step2 />
      <Step3 />
      {/* <Step4 /> */}
      <ProjectsSection />
      <Step3 />
    </div>
  );
}

export default App;
