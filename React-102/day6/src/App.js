import './App.css';
import About from './components/About';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Lifecycle from './components/Lifecycle';
import ListRendering from './components/ListRendering';
import Navbar from './components/Navbar';
import Todo from './components/Todo';

const App = () => { // functional component

  return (
    <div>
      <Navbar />
      <Lifecycle />
      {/* <Todo /> */}
      {/* <ListRendering /> */}
      {/* <Counter /> */}
      {/* <Hero name="Hero"/>
      <About name="About Me"/>
      <Footer /> */}
    </div>
  );
}

export default App;
