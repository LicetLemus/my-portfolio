import './Footer.scss'
import goodbay from '../assets/adios.png';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black w-full h-[550px] p-5 md:pl-20 flex justify-center flex-row items-center">
      <div className="container mx-auto text-[#333333] font-light text-base text-left">
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
        <p className="mt-20 text-[#333333]">
          &copy; 2024 Licet Lemus. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  )
}

export default Footer
