import './Variables.css';
import Hero from './Hero';
import CardDesc from './CardDesc';
import Newsletter from './Newsletter';
import Features from './Features';
import Testimonial from './Testimonial';


const Home = () => {
    return ( 
        <>
            
            <Hero />
            <Features />
            <Testimonial />
            <CardDesc />
            <Newsletter />
            
        </>
     );
}
 
export default Home;