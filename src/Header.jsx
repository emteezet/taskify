import {Link} from 'react-scroll'
import './Header.css'
import taskifyLogo from './assets/TASKIFY LOGO.svg';
import {FaBars, FaCalendar, FaCross, FaTimes,} from 'react-icons/fa';
import { TbFlagCancel } from 'react-icons/tb';
import { useState } from 'react';




const Header = () => {

    const [menuBar, setMenuBar] = useState(false);

    const toggle = ()=>{
        setMenuBar(!menuBar);

      

    }






    return ( 
        <>
            <section className="header-section">
                
                    <nav className='header-nav-details'>
                            <div className="logo">                    
                                <Link to = 'hero'  smooth={true} duration={200}   offset={-70}> <img src= {taskifyLogo} alt="Taskify Logo" width={100}  /></Link>
                            </div>
                            
                            
                       <ul className={ menuBar? 'Nav-List' : ''}>
                            <li>
                                <Link to='hero' activeClass='active' smooth={true} duration={200}  spy={true} offset={-100} >Home</Link>
                            </li>
                             <li>
                                <Link to='feat' activeClass='active' smooth={true} duration={200}  spy={true} offset={-70} >Features</Link>
                            </li>
                             <li>
                                <Link to='price' activeClass='active' smooth={true} duration={200}  spy={true} offset={-150} >Pricing </Link>
                            </li>
                             <li>
                                <a>Download</a>
                            </li>
                            
                       </ul>
                       <div className="menu-btn" onClick={toggle}>
                        {menuBar? <FaTimes />  : <FaBars /> }

                       </div>
                       
                        

                    </nav>
            </section>
        </>
     );
}
 
export default Header;