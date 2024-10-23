import React from 'react';
import "./About.scss";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="bg-white w-full px-10 mt-20 flex justify-center flex-col items-center">
      <h2 className="text-center text-vibrat my-10 text-5xl font-bold hover:text-hover_blue">¿Quién soy?</h2>
      <img id="img_about"
        src={profile}
        alt="avatar"
        className="mx-auto mb-6 mt-6 w-32 h-32 object-cover rounded-full"
      ></img>
      <div className="container_parrafo flex justify-between flex-wrap w-[761px] font-light">
        <p className="me-3 text-lg text-text_color_par mb-6 ">
          Soy Licet Lemus, una apasionada desarrolladora web en constante
          evolución. Con una firme creencia en la innovación, me especializo en
          crear experiencias digitales únicas que impactan. Desde el diseño
          hasta la implementación, estoy dedicada a construir soluciones
          tecnológicas que realmente marcan la diferencia.
        </p>

        <p className="text-lg text-text_color_par mb-6">
          Mi misión es convertir ideas en soluciones tecnológicas tangibles,
          aprovechando mi capacidad de adaptación a las últimas tendencias y
          herramientas del sector. Aquí hay algunas de las tecnologías que uso:
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <i className="fab fa-html5 text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-css3-alt text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-js text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-react text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-node text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
        <i className="fab fa-mongodb text-[40px] w-[40px] h-[40px] hover:text-hover_blue"></i>
      </div>
    </section>
  );
};

export default About;
