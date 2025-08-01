import './TestimonialCard.css';

const TestimonialCard = ({img, quote, names, title}) => {




    return (
        <div className="Testimonial-Card">
            <div className="img">
                { <img src={img} alt={`${names}'s Testimonial`}  />} 
                
            </div>
            <p>{quote}</p>
            <p className='Testimonial-writeup'>~{names}</p>
            <h5 className='Testimonial-writeup'>{title}</h5>
        </div>
      );
}
 

export default TestimonialCard;