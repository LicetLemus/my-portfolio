import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Project from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
