import Slider from "react-slick";
import projects from "../data";
import "./Projects.scss";

const Project = () => {
  // Configuración de Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="bg-white w-full h-[100vh] p-4 flex justify-center flex-col items-center"
    >
      <h2 className="text-center text-vibrat text-5xl font-bold hover:text-hover_blue mb-10">
        ¡Descubre mis creaciones!
      </h2>
      <div className="container mx-auto my-5">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="content flex justify-center items-stretch">
              <div className="bg-white shadow-md shadow-hover_blue rounded-lg overflow-hidden w-full max-w-[300px]">
                <img
                  src={project.image}
                  className="w-full h-48 object-cover"
                  alt={project.title}
                />
                <div className="p-8 flex-row">
                  <h3 className="text-xl font-semibold text-vibrat">
                    {project.title}
                  </h3>
                  <p className="text-text_color_par font-light text-justify">
                    {project.description}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <a
                      href={project.link}
                      className="inline-block bg-bg_button text-violet font-semibold py-2 px-4 rounded-lg hover:bg-vibrat hover:text-white no-underline transition-colors"
                    >
                      Ver el proyecto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
