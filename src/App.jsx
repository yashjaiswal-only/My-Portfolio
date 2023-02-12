import './App.css';
import { Parallax } from 'react-parallax';
import About from './Components/About';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright.jsx'
import Skills from './Components/Skills';
import Work from './Components/Work';
import Home from './Components/Home';
import Cover from './Image/cover.jpg'


function App() {


  return (
    <>
    {/* <Parallax bgImage={<CoverImg src={Cover}/>}  strength={600}> */}
    <Parallax bgImage={Cover}  strength={600}>
        <Home/>
    </Parallax>

    <About  />

    <Skills />
    <Work />
    <Contact />

    <Copyright/>
    </>

  );
}

export default App;
