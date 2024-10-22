import React from "react";
import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white w-full p-4 flex justify-center flex-col items-center"
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-10">
        <h2 className="text-center text-vibrat text-5xl font-bold hover:text-hover_blue">
          ¡Conectemos!
        </h2>
        <p className="text-center font-light text-[#333333] text-[20px]">
          Siempre estoy abierta a nuevas ideas y oportunidades de colaboración. <br/>
          ¿Tienes un proyecto en mente o simplemente deseas charlar? <br/>
          ¡Házmelo saber! Estoy aquí para escuchar y construir juntos.”
        </p>

        <div className="flex flex-col justify-center items-center">
          <p className="text-[20px] font-light text-[#333333]">
            Escríbeme a mi correo electrónico:{" "}
            <span className="font-semibold text-vibrat">
              licetlemusq@gmail.com
            </span>
          </p>
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaEnvelope className="m-2 text-4xl text-violet mx-auto" />
          </a>
          <p className="text-[20px] font-light text-[#333333]">O un mensaje directo a mis redes sociales:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-blue-400 hover:text-blue-600 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
