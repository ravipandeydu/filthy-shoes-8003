import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Social from './Components/Social';
import RmCarousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RmCarousel />
      <Footer />
      <Social />
    </div>
  );
}

export default App;