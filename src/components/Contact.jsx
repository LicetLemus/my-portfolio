import React from 'react';
import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-white w-full h-[600px] p-4">
      <div className="container mx-auto flex-row justify-center items-center">
        <h2 className="text-center text-vibrat text-5xl font-bold hover:text-hover_blue">¡Conectemos!</h2>
        <p className="text-center text-[#333333] text-[20px] mb-10">Siempre estoy abierta a nuevas ideas y oportunidades de colaboración. ¿Tienes un proyecto en mente o simplemente deseas charlar? ¡Házmelo saber! Estoy aquí para escuchar y construir juntos.”</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="text-center">
            <p className="text-lg text-[#333333]">
              Escríbeme a mi correo electrónico:{" "}
              <span className="font-semibold text-vibrat">
                licetlemusq@gmail.com
              </span>
            </p>
            <FaEnvelope className="mt-4 text-4xl text-violet mx-auto" />
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <p className="text-lg">O un mensaje directo a mis redes sociales:</p>
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
      </div>
    </section>
  );
};

export default Contact;
