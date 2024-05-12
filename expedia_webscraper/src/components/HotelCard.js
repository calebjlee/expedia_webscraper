import '../styles/SearchResult.css';

function HotelCard({title, location, image, rating, verbal_rating, num_reviews, price}) {
    return (
        <div className="hotel-card">
            <img src={image} alt="Hotel" className="image-card"/>
            <div className="content">
                <div className="upper-card">
                    <div className="title">{title}</div>
                    <div className="location">{location}</div>
                </div>
                
                <div className="lower-card">
                    <div className="rating-container">
                        <div className="rating" style={{backgroundColor: (parseFloat(rating) > 8) ? 'green' : 'grey'}}>{rating}</div>
                        <div style={{marginLeft: '0.5vw'}}>
                            <div style={{fontWeight: 'bold'}}>{verbal_rating}</div>
                            <div className="num-reviews">{num_reviews}</div>
                        </div>       
                    </div>
                    
                    <div className="price">{price}</div>
                </div>
            </div>
            
        </div>
    );
}

export default HotelCard