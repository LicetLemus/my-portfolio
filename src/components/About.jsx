import React from "react";
import "./About.scss";
import profile from "../assets/profile.png";

const About = () => {
  const technologies = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "Python", icon: "fab fa-python" },
  ];

  return (
    <section
      id="about"
      className="bg-bg_pages w-full px-10 mt-20 flex flex-col items-center"
    >
      <h2 className="text-center text-vibrat my-10 text-5xl font-bold hover:text-hover_blue">
        ¿Quién soy?
      </h2>
      <img
        id="img_about"
        src={profile}
        alt="Foto de perfil"
        className="w-32 h-32 object-cover rounded-full shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 mb-6"
      />
      <div className="max-w-2xl text-justify w-full font-light mb-6">
        <p className="text-base text-text_color_par mb-4">
          Soy <span className="font-semibold highlight-text">Licet Lemus</span>, 
          una <span className="font-semibold highlight-text">desarrolladora web</span> {" "} 
          con un sólido trasfondo en <span className="font-semibold highlight-text">ingeniería civil</span>. 
          Esta experiencia me ha dotado de habilidades analíticas que aplico a cada proyecto, 
          permitiéndome abordar desafíos complejos con efectividad.
        </p>
        <p className="text-base text-text_color_par mb-4">
          Creo firmemente en el poder de la <span className="font-semibold highlight-text">innovación 
          y en el trabajo en equipo.</span> Mi experiencia con la metodología 
          <span className="highlight-text"> Scrum</span> me ha enseñado a colaborar de manera eficiente, 
          fomentando un ambiente donde las ideas fluyen y se convierten en <span className="font-semibold highlight-text">soluciones tecnológicas impactantes</span>.
        </p>
        <p className="text-base text-text_color_par mb-4">
          Mi misión es <span className="font-semibold highlight-text">convertir ideas en soluciones tecnológicas tangibles</span>, 
          aprovechando mi capacidad de adaptación a las últimas tendencias y herramientas del sector.
        </p>
      </div>
      
      <h3 className="text-xl text-vibrat font-semibold mb-4">Tecnologías que Uso:</h3>
      <div className="flex justify-center flex-wrap mt-6">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center m-2 p-2 rounded-md hover:shadow-lg transition-shadow duration-200 bg-white">
            <i className={`${tech.icon} text-[40px]`} />
            <span className="ml-2 text-text_color_par">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
  
  
  
  
};

export default About;
