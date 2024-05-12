import '../styles/FlexibleDates.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function MonthComponent({monthsStayed, setMonthsStayed, id, month, year}) {

    const handleMonthsStayed = () => {
        let newMonthsStayed = [...monthsStayed];
        newMonthsStayed[id] = newMonthsStayed[id] === 1 ? 0 : 1;
        setMonthsStayed(newMonthsStayed);
    }

    return (
        <div className="month" onClick={handleMonthsStayed} style={{backgroundColor: monthsStayed[id] === 1 ? 'grey' : 'transparent'}}>
            <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon"/>
            <p className="month-text" style={{fontWeight: 'bold'}}>{month}</p>
            <p className="month-text">{year}</p>
        </div>
    );
}

export default MonthComponent;