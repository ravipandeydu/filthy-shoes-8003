import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Social from './Components/Social';
import RmCarousel from './Components/Carousel';
import Message from './Components/Message';
import Category from './Components/Category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RmCarousel />
      <Category />
      <Message />
      <Footer />
      <Social />
    </div>
  );
}

export default App;