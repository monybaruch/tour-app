import About from './components/About';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Tour from './components/Tour';
import Hero from './components/Hero';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tour />
      <Footer />
    </>
  );
};
export default App;
