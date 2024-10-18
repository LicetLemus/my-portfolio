// src/components/Header.js
import React from "react";
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import "./Header.scss"; // Asegúrate de que este archivo esté correctamente importado
import heroImage from "../assets/women.png"; // Asegúrate de que la ruta sea correcta
import logo from "../assets/logo.png"; // Asegúrate de que la ruta sea correcta


const Header = () => {
  return (
    <header tw="bg-white py-10 h-[100vh]">
      <div tw="container mx-auto text-center">
        <nav tw="flex justify-between items-center mb-8 mr-10">
          <div tw="ml-10">
            <img src={logo} alt="Logo de Licet Lemus" tw="w-56 h-auto object-contain"/>
          </div>
          <div tw="flex space-x-6 font-regular">
            <a href="#about" tw="text-white text-[20px] hover:text-violet transition-colors no-underline">
              Acerca de mí
            </a>
            <a href="#projects" tw="text-white text-[20px] hover:text-violet transition-colors no-underline">
              Mis Proyectos
            </a>
            <a href="#contact" tw="text-white text-[20px] hover:text-violet transition-colors no-underline">
              ¡Conectemos!
            </a>
          </div>
        </nav>
        <div tw="flex justify-center items-center mt-20">
          <div className="hero_image">
            <img src={heroImage} alt="Women working on a computer" tw="w-[587px] h-auto"/>
          </div>
          <div className="content" tw="flex flex-col justify-center items-center text-left w-[70%] h-auto p-8 ml-12">
            <h1 tw="text-white text-7xl font-bold">¡Bienvenido a mi <span tw="text-white hover:text-hover_text_white">mundo digital!</span></h1>
            <p tw="text-white text-[20px] mt-4 font-light">Estoy emocionada de compartir mis proyectos y mi viaje en el desarrollo web. ¡Explora y déjate inspirar!</p>
            <button tw="mt-8 bg-bg_button text-violet px-6 py-3 rounded-lg font-semibold hover:bg-hover_blue hover:text-white transition-colors">
              ¡Conóceme más!
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;

