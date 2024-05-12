import '../styles/SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function LocationBox({location, setLocation}) {
    return (
        <div className="search-box">
            <FontAwesomeIcon icon={faLocationDot} />
            <div className="input-container">
                <input 
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Where to?"
                />
            </div>
            
        </div>
    );
}

export default LocationBox;