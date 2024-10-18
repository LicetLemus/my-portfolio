import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "twin.macro";
import "./About.scss";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" tw="bg-white w-full h-[100vh] p-4 flex justify-center flex-col items-center">
      <h2 tw="text-center text-blue_vibrat text-5xl font-bold hover:text-hover_blue">¿Quién soy?</h2>
      <img className="img_about"
        src={profile}
        alt="avatar"
        tw="mx-auto mb-6 mt-6 w-32 h-32 object-cover rounded-full"
      ></img>
      <div tw="flex justify-between flex-wrap w-[761px] font-light">
        <p tw="me-3 text-lg text-text_color_par mb-6 ">
          Soy Licet Lemus, una apasionada desarrolladora web en constante
          evolución. Con una firme creencia en la innovación, me especializo en
          crear experiencias digitales únicas que impactan. Desde el diseño
          hasta la implementación, estoy dedicada a construir soluciones
          tecnológicas que realmente marcan la diferencia.
        </p>

        <p tw="text-lg text-text_color_par mb-6">
          Mi misión es convertir ideas en soluciones tecnológicas tangibles,
          aprovechando mi capacidad de adaptación a las últimas tendencias y
          herramientas del sector. Aquí hay algunas de las tecnologías que uso:
        </p>
      </div>
      <div tw="flex justify-center space-x-4 mt-6">
        <i className="fab fa-html5" tw="text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-css3-alt" tw="text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-js" tw="text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-react" tw="text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-node" tw="text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-mongodb" tw="text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
      </div>
    </section>
  );
};

export default About;
