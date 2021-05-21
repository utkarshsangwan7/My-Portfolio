import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
