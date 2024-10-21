import './Footer.scss'
import goodbay from '../assets/adios.png';

const Footer = () => {
  return (
    <section id="footer" className="bg-black w-full h-[550px] pl-20 flex justify-center flex-row items-center">
      <div className="container mx-auto text-[#333333] text-[20px] text-left">
        <div className='flex flex-row items-center'>
          <img src={goodbay} alt='despedida' className='w-[80px] h-[80px] items-start'></img>
          <p>
            Gracias por visitar mi portafolio.<br />
            ¡Estoy lista para colaborar contigo!
          </p>
        </div>
        <p className="mt-10">
          “La creatividad es la inteligencia divirtiéndose.” – Albert Einstein
        </p>
        <p className="mt-20 text-violet">
          &copy; 2024 Licet Lemus. Todos los derechos reservados.
        </p>

      </div>
    </section>
  )
}

export default Footer
