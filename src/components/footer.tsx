import facebookIcon from "../assets/icons8-facebook-novo-50.png";
import instaIcon from "../assets/icons8-insta-50.png";
import linkedinIcon from "../assets/icons8-linkedin-50.png";

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#302c77] items-center justify-around p-10 h-1/2">
      <h1 className='text-white'>Farmácia Generation | Copyright: 2025</h1>
      <p className='text-white'>acesse nossas redes sociais</p>
      
      <div className='flex gap-4 text-white'> 
        <figure> 
          <img src={facebookIcon} alt="Facebook" />
        </figure>

        <figure> 
          <img src={instaIcon} alt="Instagram" />
        </figure>

        <figure> 
          <img src={linkedinIcon} alt="LinkedIn" />
        </figure>
      </div>
    </div>
  )
}