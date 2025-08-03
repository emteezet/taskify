import './Variables.css';
import Hero from './Hero';
import CardDesc from './CardDesc';
import Newsletter from './Newsletter';
import Features from './Features';
import Testimonial from './Testimonial';
// import Header from './Header';
// import Footer from './Footer';


const Home = () => {
    return ( 
        <>
            {/* <Header /> */}
            <Hero />
            <Features />
            <Testimonial />
            <CardDesc />
            <Newsletter />
            {/* <Footer /> */}
            
        </>
     );
}
 
export default Home;