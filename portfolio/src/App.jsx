import { useEffect } from 'react';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Achievement from './components/achievement';
import Contact from './components/contact';

function App() {
  // Scroll reveal — triggers .sr elements to fade in
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.sr').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Achievement />
      <Contact />
    </>
  );
}

export default App;
