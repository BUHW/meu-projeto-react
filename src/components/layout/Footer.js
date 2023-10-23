import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa6'
import style from './Footer.module.css'

function Footer(){
    return(
        <footer>
           <ul className={style.socialList}>
            <li>
                <FaFacebook/>                
            </li>
            
            <li>
                <FaWhatsapp/>                
            </li>

            <li>
                <FaInstagram />                
            </li>

           </ul>

           <p>nosso rodapé</p>
        </footer>
    )
}

export default Footer