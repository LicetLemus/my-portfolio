// src/components/Header.js
import React from 'react';
import "./Header.scss"; // Asegúrate de que este archivo esté correctamente importado
import heroImage from "../assets/women.png"; // Asegúrate de que la ruta sea correcta
import logo from "../assets/logo.png"; // Asegúrate de que la ruta sea correcta


const Header = () => {
  return (
    <header className="bg-red py-10 h-[100vh] w-[100vw]">
      <div className="container mx-auto text-center">
        <nav className="flex justify-between items-center mb-8 mr-10">
          <div className="ml-10">
            <img src={logo} alt="Logo de Licet Lemus" className="w-56 h-auto object-contain"/>
          </div>
          <div className="flex space-x-6 font-regular">
            <a href="#about" className="text-white text-[20px] hover:text-violet transition-colors no-underline">
              Acerca de mí
            </a>
            <a href="#projects" className="text-white text-[20px] hover:text-violet transition-colors no-underline">
              Mis Proyectos
            </a>
            <a href="#contact" className="text-white text-[20px] hover:text-violet transition-colors no-underline">
              ¡Conectemos!
            </a>
          </div>
        </nav>
        <div className="flex justify-center items-center mt-20 h-full">
          <div className="hero_image">
            <img src={heroImage} alt="Women working on a computer" className="w-[587px] h-auto"/>
          </div>
          <div className="content flex flex-col justify-center items-left text-left w-[70%] h-auto p-8 ml-12">
            <h1 className="text-white text-7xl font-bold">¡Bienvenido a mi <br /><span className="hover:text-hover_text_white">mundo digital!</span></h1>
            <p className="text-white  text-[20px] mt-4 font-light">Estoy emocionada de compartir mis proyectos y mi <br /> viaje en el desarrollo web. ¡Explora y déjate inspirar!</p>
            <button className="mt-8 bg-bg_button text-violet px-6 py-3 rounded-lg w-[250px] font-semibold hover:bg-hover_blue hover:text-white transition-colors">
              ¡Conóceme más!
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;

