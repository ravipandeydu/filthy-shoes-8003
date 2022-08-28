import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Social from "./Components/Social";
import RmCarousel from "./Components/Carousel";
import Message from "./Components/Message";
import Category from "./Components/Category";
import Listicle from "./Components/Listicle";
import Subscriber from "./Components/Subscribers";
import Benefit from "./Components/Benefit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RmCarousel />
      <Category />
      <Listicle />
      <Benefit />
      <Subscriber />
      <Message />
      <Footer />
      <Social />
    </div>
  );
}

export default App;