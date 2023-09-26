import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NoMatch />} />
      </Routes> 
    </div>
  );
}

export default App;
