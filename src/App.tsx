import Home from './sections/home/Home';
import Story from './sections/story/Story';
import Work from './sections/work/Work';
import Education from './sections/education/Education';
import Skill from './sections/skills/Skill';
import Projects from './sections/projects/Projects';
import Footer from './sections/footer/Footer';
import Nav from './components/nav/Nav';

function App() {
    return (
        <>
            <Nav />
            <Home />
            <Story />
            <Work />
            <Education />
            <Skill />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
