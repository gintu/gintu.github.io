import Home from "./sections/home/Home";
import Work from "./sections/work/Work";
import Education from "./sections/education/Education";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";
import Nav from "./components/nav/Nav";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skill";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Work />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
