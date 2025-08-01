
import './Price.css'


const Price = ({plan, planPrice, feat, buttonText}) => {
    const btnStyle = {
        backgroundColor: '#FF6584',
        color: 'white',
        padding: 10,
        border: 'none',
        borderRadius:20,
        width: '100%',
        cursor:'pointer',
    }
    



    return ( 
        <>
        <section className="Price-Desc" id='price' >
                <h3>{plan}</h3>
                <h1>${planPrice}/m</h1>
                <p>
                    {feat.map((newfeat, id) =>(
                        <ul key={id}><li> ✔ {newfeat}</li></ul>
                    ))}
                </p>
                <button style={btnStyle}> {buttonText} </button>
        </section>
            
        </>
        
     );
}
 
export default Price;