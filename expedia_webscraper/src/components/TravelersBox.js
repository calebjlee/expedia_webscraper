import '../styles/SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function TravelersBox({people, rooms}) {
    return (
        <div className="search-box">
            <FontAwesomeIcon icon={faUser} />
            <div className="input-container">
                <p className="box-text">Travelers</p>
                <p className="info-text">{people} travelers, {rooms} room</p>
            </div>
            
        </div>
    );
}

export default TravelersBox;