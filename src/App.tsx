import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Title from './components/Title';
import NavBar from './components/NavBar';
import MyProjects from './components/MyProjects';

const App = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.getElementById('asalas-title');
      if(titleElement){
        const titleBottom = titleElement.getBoundingClientRect().bottom;
        setShowNavBar(titleBottom < 60);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showNavBar]);
    
  return (    
    <div>
      {showNavBar && <NavBar />}
      <Title />
      <AboutMe />
      <MyProjects />     
    </div>
      
  )
}

export default App
