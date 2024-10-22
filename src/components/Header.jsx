import React from "react";
import "./Header.scss";
import heroImage from "../assets/women.png";
import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
    <header className="bg-red w-full">
      <div className="container mx-auto text-center">
        {/* Componente Navbar */}
        <Navbar />
        <div className="flex flex-col md:flex-row justify-center items-center mt-20 h-full">
          <div className="hero_image text-violet flex justify-center mb-8 md:mb-0">
            <img
              src={heroImage}
              alt="Women working on a computer"
              className="w-full md:w-[33rem] h-auto text-violet"
            />
          </div>
          <div className="content flex flex-col justify-center items-start text-left w-full md:w-[70%] h-auto p-4 md:p-8">
            <h1 className="text-white text-4xl md:text-7xl font-bold">
              ¡Bienvenido a mi <br />
              <span className="hover:text-hover_text_white">mundo digital!</span>
            </h1>
            <p className="text-white text-base md:text-[1.25rem] mt-4 font-light">
              Estoy emocionada de compartir mis proyectos y mi <br />
              viaje en el desarrollo web. ¡Explora y déjate inspirar!
            </p>
            <button className="mt-8 bg-bg_button text-violet px-6 py-3 rounded-lg w-full md:w-[16rem] font-semibold hover:bg-hover_blue hover:text-white transition-colors">
              ¡Conóceme más!
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
