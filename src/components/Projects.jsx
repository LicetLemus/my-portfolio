import React from "react";
import { Carousel } from "react-bootstrap"; // Importa Carousel de React-Bootstrap
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import projects from "../data"; // Asegúrate de que la ruta sea correcta
import './Projects.scss'; // Importa el archivo SCSS para el estilo

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

  return (
    <section id="projects" tw="bg-white w-full h-[100vh] p-4 flex justify-center flex-col items-center">
      <h2 tw="text-center text-blue_vibrat text-5xl font-bold hover:text-hover_blue mb-10">¡Descubre mis creaciones!</h2>
      <div tw="container mx-auto my-5">
        <Carousel controls indicators>
          {groupedProjects.map((group, index) => (
            <Carousel.Item key={index}>
              <div tw="flex justify-center gap-10">
                {group.map((project, idx) => (
                  <div tw="p-2" key={idx}>
                    <div tw="bg-white shadow-md shadow-hover_blue rounded-lg overflow-hidden w-[300px] h-auto">
                      <img src={project.image} tw="w-full h-48 object-cover" alt={project.title} />
                      <div tw="p-8 flex-row">
                        <h3 tw="text-xl font-semibold text-blue_vibrat">{project.title}</h3>
                        <p tw="text-[#333333] font-light text-justify">{project.description}</p>
                        <div tw="mt-4 flex justify-center">
                          <a href={project.link} tw="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 no-underline">Ver el proyecto</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Project;
