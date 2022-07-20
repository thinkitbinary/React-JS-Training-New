import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => { // functional component
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
