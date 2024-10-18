import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Project from './components/Projects.jsx';
import Contact from './components/Contact.jsx';


const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;