import React, {useState} from 'react';
import '../styles/Home.css';
import '../styles/Styles.css';
import SearchBar from '../components/SearchBar.js';
import HeaderBar from '../components/HeaderBar.js';

function Home() {

    const [datePopup, setDatePopup] = useState(false);
    const [travelersPopup, setTravelersPopup] = useState(false);

    const exitPopup = () => {
        if (datePopup || travelersPopup) {
            setDatePopup(false);
            setTravelersPopup(false);
        }
    }

    return(
        <div className="container" onClick={exitPopup}>
            <HeaderBar />
            <div className="search-container">
                <header className="Header">
                <h1 className="header-text">Expedia Webscraper</h1>
                <SearchBar datePopup={datePopup} setDatePopup={setDatePopup} travelersPopup={travelersPopup} setTravelersPopup={setTravelersPopup}/>
                </header>
            </div>
        </div>
        
    );
}
export default Home;
