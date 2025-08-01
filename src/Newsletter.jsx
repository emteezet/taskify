import './Newsletter.css'


const Newsletter = () => {

    // const newsletterStyle = {
    //     backgroundColor:'#6C63FF',
    //     padding:10,
    //     width:800,
    //     height:200,
    //     borderRadius:20,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems:'center',
    //     flexDirection: 'column',
        


    // }


    return (
        <>      
              
            <section className="Newsletter">
                <div className="Newsletter-details" >

                    <div className="News-header">
                        <h1>Newsletter Signup</h1>
                        <p> Stay updated! Get our latest updates.</p>

                    </div>
                    
                    <div className="news-search-btn">
                        <input type="search"  placeholder='subscribe here'/>
                        <button>Subscribe</button>
                    </div>
                </div>

            </section>


        
        </>
        
     );
}
 
export default Newsletter;