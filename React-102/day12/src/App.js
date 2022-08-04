import { useState } from 'react';
import './App.css';
import About from './components/About';
import Counter from './components/Counter';
import CounterRedux from './components/CounterRedux';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Lifecycle from './components/Lifecycle';
import ListRendering from './components/ListRendering';
import Navbar from './components/Navbar';
import ProductNextApi from './components/ProductNextApi';
import ProductsApi from './components/ProductsApi';
import Todos from './components/Todos';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import TodosApi from './components/TodosApi';

const App = () => { // functional component
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/counter' element={<CounterRedux />}/>
          <Route path='/products-api' element={<ProductsApi />}/>
          <Route path='/products-next-api' element={<ProductNextApi />}/>
          <Route path='/todos' element={<Todos />} />
          <Route path='/todosapi' element={<TodosApi />} />
        </Routes>
       
        {/* <ProductNextApi /> */}
        {/* <ProductsApi /> */}
        {/* <Lifecycle /> */}
        {/* <Todo /> */}
        {/* <ListRendering /> */}
        {/* <Counter /> */}
        {/* <Hero name="Hero"/>
      <About name="About Me"/> */}
        <Footer />
    </div>
  );
}

export default App;
