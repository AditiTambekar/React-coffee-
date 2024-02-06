import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js'
import Menu from './Component/Menu';

import Nav from './Component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Component/Hero';
import Blog from './Component/Blog';
import Store from './Component/Store';
import Fluid1 from './Component/Fluid1';
import Fluid2 from './Component/Fluid2';
import Contact from './Component/Contact';
import Cart from './Component/Cart';
import Static1 from './Component/Static1.js';
import Static2 from './Component/Static2.js';







function App() {
  return (
    <>

<BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Fluid1" element={<Fluid1 />} />
        <Route path="/Fluid2" element={<Fluid2 />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Static1" element={<Static1 />} />
        <Route path="/Static2" element={<Static2 />} />        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
