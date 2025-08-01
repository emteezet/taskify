import './FeaturesCard.css'


const FeaturesCard = () => {
    return (
        <>
           <div className="features-container">
                <h1>Features</h1>
            <div className="feature-cards">
              <p className='features-card'>✅ Task Reminders </p>
              <p className='features-card' >📅 Calendar Sync</p>
              <p className='features-card' >🔔 Real-Time Notifications</p>
              <p className='features-card' >🌙 Dark Mode Ready</p>
            </div>
           </div>
        
        </>
      );
}
 
export default FeaturesCard;