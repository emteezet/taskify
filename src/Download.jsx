import apple from './assets/appstore.png';
import playstore from './assets/playstore.png';
import './Download.css'


const Download = () => {
    return ( 
        <section className="Download" id='download'>
        
            <div className="download-header">
                <h1>Download This App</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                     voluptatibus sequi, porro rem omnis asperiores fugit laboriosam neque 
                     
                </p>
                <div className="download-btns">
                    <img src={apple} alt="apple store " width={195} />
                    <img src={playstore} alt="play store" width={200} />

                </div>
            </div>

            <div className="header-image">
                2
                
            </div>
        </section>


     );
}
 
export default Download;