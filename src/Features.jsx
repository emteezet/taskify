import FeaturesCard from './FeaturesCard'





const Features = () => {
  
  const featureStyle = {
   borderBottom: '2px solid #E0E0E0',
   padding: '50px',
}




    return ( 
        <>
          <section className="features" id='feat' style={featureStyle}>
            <FeaturesCard />
          </section>
        
        
        
        
        </>

     );
}
 
export default Features;