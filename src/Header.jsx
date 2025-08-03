import {Link as ScrollLink} from 'react-scroll'
import { NavLink } from 'react-router-dom';
import './Header.css'
import taskifyLogo from './assets/TASKIFY LOGO.svg';
import {FaBars, FaCalendar, FaCross, FaTimes,} from 'react-icons/fa';
import { TbFlagCancel } from 'react-icons/tb';
import { useState } from 'react';
// import { Download } from 'lucide-react';
// import Download from './Download';




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
                              <img src= {taskifyLogo} alt="Taskify Logo" width={100}  /> 
                            </div>
                            
                            
                       <ul className={ menuBar? 'Nav-List' : ''}>
                            <li>
                                <NavLink to='/' >Home</NavLink>
                            </li>
                             <li>
                                <ScrollLink to='feat' activeClass='active' smooth={true} duration={200}  spy={true} offset={-70} >Features</ScrollLink>
                            </li>
                             <li>
                                <ScrollLink to='price' activeClass='active' smooth={true} duration={200}  spy={true} offset={-150} >Pricing </ScrollLink>
                            </li>
                             <li>
                               <NavLink to='/download' > Download </NavLink>
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