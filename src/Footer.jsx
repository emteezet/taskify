import {FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return ( 
        <> 
            <div className="foot-sec">
                <p>© 2025 Taskify | Privacy | Terms | Contact Us</p>
                <div className="icons">
                 <FaTwitter size={20} /> <FaInstagram size={20} /> <FaLinkedin size={20} />

                 </div>
            </div>
           
          
        </>
     );
}
 
export default Footer;