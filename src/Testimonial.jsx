import TestimonialCard from "./TestimonialCard";
import './Testimonial.css';
import AminaImg from './assets/Amina.jpg'
import KateImg from './assets/Kate.jpg'
import DavidImg from './assets/David.jpg'



const Testimonial = () => {
    const headerStyle={
        textAlign: 'center',
        // fontSize:'44px',
    }

   const TestimonialData = [
        {
           img: AminaImg,
           quote: '“This app changed my productivity!”',
           names:'Amina Yusuf',
           title:'Product Manager',

        },

        {
           img: DavidImg,
           quote: '“I never forget a task again.”',
           names:'David Kim',
           title:'Freelance Developer',

        },

        {
           img: KateImg,
           quote: '"This product has changed my life!"',
           names:'Kate Henshaw',
           title:'Ui/Ux Designer',

        },
          
   ]



    return (
        <>

            <section className="Testimonial-section">
               <h1 style={headerStyle}>Testimonials</h1>
               <div className="Testimonial-Container">

               {TestimonialData.map((Testimonial, index) =>(
               <TestimonialCard 
                  key={index}
                  img={Testimonial.img}
                  quote={Testimonial.quote}
                  names={Testimonial.names}
                  title={Testimonial.title}  />
               ))}
            
               {/* <TestimonialCard />
               <TestimonialCard />
               <TestimonialCard /> */}
            
            </div>

           </section>
           
        </>
      );
}
 
export default Testimonial;