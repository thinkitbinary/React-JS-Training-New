import './App.css';
import About from './components/About';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => { // functional component

  return (
    <div>
      <Navbar />
      <Counter />
      <Hero name="Hero"/>
      <About name="About Me"/>
      <Footer />
    </div>
  );
}

export default App;
