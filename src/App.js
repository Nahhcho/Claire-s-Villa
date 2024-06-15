import './App.css';
import About from './components/about/About';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import Haven from './components/haven/Haven';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import NewHero from './components/newHero/NewHero';
import Offers from './components/offers/Offers';
import SlideShow from './components/slideShow/SlideShow';
import Strip from './components/strip/Strip';
import TopAbout from './components/topAbout/TopAbout';

const images = [
  '/images/IMG_6632.jpg',
  '/images/IMG_6637.jpg',
  '/images/IMG_6645.jpg',
  '/images/IMG_6653.jpg',
  '/images/IMG_6654.jpg',
  '/images/IMG_6655.jpg',
  '/images/IMG_6658.jpg',
  '/images/IMG_8731.jpg',
  '/images/IMG_8734.jpg',
  '/images/IMG_8738.jpg',

]

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Strip />
      <About />
      <Offers />
      <SlideShow />
      <EmailSection />
      <Footer />
    </>
  );
}

export default App;
