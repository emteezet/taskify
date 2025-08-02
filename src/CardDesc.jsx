import Price from './Price';
const CardDesc = () => {

    const priceStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50,
        gap:20
    }


 const headerStyle={
        textAlign: 'center',
        color: 'var(--text-muted)',
    }

    // Data for plan pricing

    const PlanData = [
        {
            plan:'Free',
            planPrice: 0,
            feat: [
                    "1 User",
                    "Basic Features",
                    "Email Support",
                    "Access to mobile app",
                    ],
            buttonText: "Get Started",
        },

         {
            plan:'Pro',
            planPrice: 9,
            feat: [
                    "Up to 20 Users",
                    "All Pro Features",
                    "Team Collaboration Tools",
                    "Admin Controls",
                    "24/7 Support",
                    ],
             buttonText: "Upgrade to Pro Plan",
        },

         {
            plan:'Team',
            planPrice: 29,
            feat: [
                "Up to 100 Users",
                "All Team Features",
                "Advanced Collaboration Tools",
                "Custom Workflows",
                "Dedicated Account Manager",
                ],
            buttonText: "Start Team Plan",
        },
    ]



      
  const CardStyle = {
   borderBottom: '2px solid #E0E0E0',
   padding: '50px',
}




    return (
        <>     


        <section className="card-desc" style={CardStyle}>

        <div className="card-description">
        <h1 style={headerStyle}>Pricing</h1>
        <div className="Price" style={priceStyle}>
                {PlanData.map((plans, idx) => (

                    <Price 
                    key={idx}
                    plan={plans.plan}
                    planPrice={plans.planPrice}
                    feat={plans.feat}
                    buttonText={plans.buttonText}
                    />

                ))
                    
                    }
        </div>

        </div>

        </section>
           
        
        </>
     );
}
 
export default CardDesc;