import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import About from './About';
import Products from './Products';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
        <Navbar />
    </div>
  );
}

export default App;
