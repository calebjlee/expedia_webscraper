import '../styles/SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function DateBox({date}) {

    return (
        <div className="search-box">
            <div className="calendar-button">
                <FontAwesomeIcon icon={faCalendar}/>
            </div>
            <div className="input-container">
                <p className="box-text">Dates</p>
                <p className="info-text">{date}</p>
            </div>
        </div>
    );
}

export default DateBox;