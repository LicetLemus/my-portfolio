import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub } from "react-icons/fa";
import projects from "../data";
import "./Projects.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Project = () => {
  return (
    <section
      id="projects"
      className="bg-bg_pages w-full px-10 my-20 flex justify-center flex-col items-center"
    >
      <h2 className="text-center text-vibrat my-10 text-5xl font-bold hover:text-hover_blue mb-10">
        ¡Descubre mis creaciones!
      </h2>
      <div className="container mx-auto my-5">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // cuando la pantalla sea >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // cuando la pantalla sea >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // cuando la pantalla sea >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-[500px]">
              <div
                className="content flex justify-center items-stretch"
              >
                <div className="bg-white shadow-md shadow-hover_blue rounded-lg overflow-hidden w-full max-w-[300px] transition-shadow duration-300 hover:shadow-xl">
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
                    <div className="mt-4 flex justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-black hover:text-violet transition-colors"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.link}
                        className="inline-block bg-bg_button text-violet font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-md no-underline transition-colors"
                      >
                        Ver el proyecto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
