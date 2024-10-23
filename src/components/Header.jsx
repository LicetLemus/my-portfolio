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
        <div className="flex  justify-evenly items-center py-10 h-full">
          <div className="hero_image text-violet flex justify-center mb-8 md:mb-0">
            <img
              src={heroImage}
              alt="Women working on a computer"
              className="w-full md:w-[30rem] h-auto center"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="content text-left w-full h-auto">
              <h1 className="text-white text-4xl md:text-7xl font-bold textShadow">
                ¡Bienvenido a mi <br />
                <span className="hover:text-hover_text_white">
                  mundo digital!
                </span>
              </h1>
              <p className="text-white text-base mt-4 font-light">
                Estoy emocionada de compartir mis proyectos y mi <br />
                viaje en el desarrollo web. ¡Explora y déjate inspirar!
              </p>
            </div>
            <div className="btn_primary mt-8 bg-bg_button shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-md text-violet p-3 rounded-lg w-full md:w-[12rem] font-semibold">
              <a href="#about">
                ¡Conóceme más!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
