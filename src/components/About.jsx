import React from "react";
import "./About.scss";
import profile from "../assets/profile.png";

const About = () => {
  const technologies = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "Python", icon: "fab fa-python" },
  ];

  return (
    <section
      id="about"
      className="bg-white w-full px-10 mt-20 flex justify-center flex-col items-center"
    >
      <h2 className="text-center text-vibrat my-10 text-5xl font-bold hover:text-hover_blue">
        ¿Quién soy?
      </h2>
      <img
        id="img_about"
        src={profile}
        alt="foto- perfil"
        className="mx-auto mb-6 mt-6 w-32 h-32 object-cover rounded-full shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
      ></img>
      <div className="container_parrafo text-justify justify-between flex-wrap w-[761px] font-light">
        <p className="me-3 text-base text-text_color_par mb-6 ">
          Soy Licet Lemus, una apasionada{" "}
          <span className="relative inline-block highlight-text">
            desarrolladora web
          </span>{" "}
          en constante evolución. Con una firme creencia en la innovación, me
          especializo en crear experiencias digitales únicas que impactan. Desde
          el diseño hasta la implementación, estoy dedicada a{" "}
          <span className="relative inline-block highlight-text">
            construir soluciones tecnológicas que realmente marcan la
            diferencia.
          </span>
        </p>

        <p className="text-base text-text_color_par mb-6">
          <span className="relative inline-block highlight-text">
            Mi misión es convertir ideas en soluciones tecnológicas tangibles,
          </span>
          aprovechando mi capacidad de adaptación a las últimas tendencias y
          herramientas del sector. Aquí hay algunas de las tecnologías que uso:{" "}
          {technologies.map((tech, index) => (
            <span key={index} className="relative inline-block highlight-text">
              {tech.name}
              {index < technologies.length - 1 ? <>&nbsp;,&nbsp;</> : "."}
            </span>
          ))}
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        {technologies.map((tech, index) => (
          <i
            key={index}
            className={`${tech.icon} text-[40px] w-[40px] h-[40px] hover:text-violet`}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
