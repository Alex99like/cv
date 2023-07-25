import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Education } from './components/Education/Education';
import { Home } from './components/Home/Home';
import { Message } from './components/Message/Message';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './style/global.scss'

function App() {
  const location = useLocation()

  return (
    <div className="wrapper">
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/message' element={<Message />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </AnimatePresence>
      
      <Navbar />
    </div>
  );
}

export default App;
