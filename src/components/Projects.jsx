import Slider from "react-slick"; 
import projects from "../data"; 
import './Projects.scss';

const Project = () => {
  // Función para dividir los proyectos en grupos de tres
  const groupProjects = (projects) => {
    const groups = [];
    for (let i = 0; i < projects.length; i += 3) {
      groups.push(projects.slice(i, i + 3));
    }
    return groups;
  };

  const groupedProjects = groupProjects(projects); // Agrupa los proyectos

  // Configuración de Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section id="projects" className="bg-white w-full h-[100vh] p-4 flex justify-center flex-col items-center">
      <h2 className="text-center text-vibrat text-5xl font-bold hover:text-hover_blue mb-10">¡Descubre mis creaciones!</h2>
      <div className="container mx-auto my-5">
        <Slider {...settings}>
          {groupedProjects.map((group, index) => (
            <div key={index}>
              <div className="flex justify-center gap-10">
                {group.map((project, idx) => (
                  <div className="p-2" key={idx}>
                    <div className="bg-white shadow-md shadow-hover_blue rounded-lg overflow-hidden w-[300px] h-auto">
                      <img src={project.image} className="w-full h-48 object-cover" alt={project.title} />
                      <div className="p-8 flex-row">
                        <h3 className="text-xl font-semibold text-vibrat">{project.title}</h3>
                        <p className="text-text_color_par font-light text-justify">{project.description}</p>
                        <div className="mt-4 flex justify-center">
                          <a href={project.link} className="inline-block bg-bg_button text-violet font-semibold py-2 px-4 rounded-lg hover:bg-vibrat hover:text-white no-underline transition-colors">Ver el proyecto</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
