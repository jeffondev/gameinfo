import React from "react";
import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home'

function App() {
  return (
    // <Home />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
