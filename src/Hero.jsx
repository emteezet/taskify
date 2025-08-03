import mobileapp from './assets/Phone Task.svg';
import './Hero.css';



const Hero = () => {
    return ( 
        <section className="hero-section" id='hero'>
            <div className="hero-details">
                
                <div className="hero-svg">

                    <img src={mobileapp} alt="mobileapp" />
                </div>
                
                 <div className="hero-header">
                    
                    <h1> Organize Your Life with <span>Taskify</span></h1>
                    <p>Get more Done. Live Stress-Free.</p>

                    <div className="hero-btns">
                        <button id='getStarted'>Get Started</button>
                        <button id='watchDemo'>Watch Demo</button>
                    </div>
                </div>
            </div>
            
            

        </section>
        
     );
}
 
export default Hero;