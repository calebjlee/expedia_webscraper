import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/SearchResult.css';
import '../styles/Styles.css';
import HeaderBar from '../components/HeaderBar.js';
import HotelCard from '../components/HotelCard.js';

function SearchResult() {

    const { location, date1, date2, adults, rooms } = useParams();
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('fetching');
        fetch(`http://localhost:8000/getdata?location=${location}&d1=${date1}&d2=${date2}&adults=${adults}&rooms=${rooms}`).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(data => {
            if (data && Array.isArray(data)) {
                console.log('Received data')
                setHotels(data);
                setIsLoading(false);
                console.log(data.length);
            } else {
                console.log('Received data is not in expected format:', data);
                setHotels([]);
            }
        }).catch(error => console.log(error));
    }, [location, date1, date2, adults, rooms]);

    return(
        <div className="container">
            <HeaderBar />
            {isLoading && <div className="loading">Loading...</div>}
            <div className="hotel-container">
                {hotels.map(hotel => 
                    <HotelCard key={hotel.title} title={hotel.title} location={hotel.location} image={hotel.image_src} rating={hotel.rating} verbal_rating={hotel.verbal_rating} num_reviews={hotel.num_reviews} price={hotel.price} />)}
            </div>
        </div>
        
    );
}

export default SearchResult;