import Home from './sections/home/Home';
import Story from './sections/story/Story';
import Work from './sections/work/Work';
import Education from './sections/education/Education';
import Skill from './sections/skills/Skill';
import Projects from './sections/projects/Projects';
import Footer from './sections/footer/Footer';

function App() {
    return (
        <div className="fade-cascade">
            <Home />
            <Story />
            <Work />
            <Education />
            <Skill />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
