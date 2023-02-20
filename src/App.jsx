import './App.css';
import { Parallax } from 'react-parallax';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright.jsx'
import Skills from './Components/Skills';
import Work from './Components/Work';
import Home from './Components/Home';
import AboutSection from './Components/AboutSection';

function App() {


  return (
    <>
    {/* <Parallax bgImage={Cover}  strength={600}>
        <Home/>
    </Parallax> */}
    <div className="parallax">
      <Home/>
    </div>
    <AboutSection/>

    <Skills />
    <Work />
    <Contact />

    <Copyright/>
    </>

  );
}

export default App;
