import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotGroup from './features/DotGroup';
import Intro from './scenes/Intro';
import About from './scenes/About';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';

function App() {
  const [selectedPage, setSelectedPage] = useState('intro');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  /* WHEN SCROLLING DOWN, BACKGROUND COLOR OF NAVBAR CHANGES */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Intro />
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <About />
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <Skills />
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <Projects />
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
