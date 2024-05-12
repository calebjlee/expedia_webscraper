import React, {useState} from 'react';
import "../styles/SearchBar.css";
import { useNavigate } from 'react-router-dom';
import LocationBox from './LocationBox.js'
import DateBox from './DateBox.js'
import TravelersBox from './TravelersBox.js';
import DatePopup from './DatePopup.js';
import TravelersPopup from './TravelersPopup.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({datePopup, setDatePopup, travelersPopup, setTravelersPopup}) {
    const [location, setLocation] = useState('');

    const [calendar, setCalendar] = useState({
        curMonth1: "May",
        curMonth2: "June",
        month1: "May",
        month2: "May",
        year1: new Date().getFullYear(),
        year2: new Date().getFullYear(),
        day1: 12,
        day2: 14,
        isDay1: true,
    });

    const [calendarActive, setCalendarActive] = useState(true);
    const [nights, setNights] = useState(0);
    const [monthsStayed, setMonthsStayed] = useState([1, 0, 0, 0, 0, 0]);

    const curMonth = new Date().getMonth();
    const months = ["Placeholder", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const calcNights = () => {
        if (nights === 0) {
            return "1 night in ";
        }
        else if (nights === 1) {
            return "2-3 nights in ";
        }
        else if (nights === 2) {
            return "4-5 nights in ";
        }
        else if (nights === 3) {
            return "6-7 nights in ";
        }
    }

    const calcMonth = (month_string) => {
        if (monthsStayed[0] === 1) {
            month_string += months[curMonth + 1];
        }
        if (monthsStayed[1] === 1) {
            if (month_string !== "") {
                month_string += ", ";
            }
            month_string += months[curMonth + 2];
        }
        if (monthsStayed[2] === 1) {
            if (month_string !== "") {
                month_string += ", ";
            }
            month_string += months[curMonth + 3];
        }
        if (monthsStayed[3] === 1) {
            if (month_string !== "") {
                month_string += ", ";
            }
            month_string += months[curMonth + 4];
        }
        if (monthsStayed[4] === 1) {
            if (month_string !== "") {
                month_string += ", ";
            }
            month_string += months[curMonth + 5];
        }
        if (monthsStayed[5] === 1) {
            if (month_string !== "") {
                month_string += ", ";
            }
            month_string += months[curMonth + 6];
        }
        return month_string;
    }

    const [rooms, setRooms] = useState([
        {
        id: 1,
        adults: 2,
        children: 0,
        }
    ]);

    const addRoom = () => {
        const newRoomId = rooms.length > 0 ? rooms[rooms.length - 1].id + 1 : 1;
        const newRoom = {
            id: newRoomId,
            adults: 1,
            children: 0
        };
        setRooms([...rooms, newRoom]);
    };

    const updateRoom = (id, adults, children) => {
        const updatedRooms = rooms.map(room =>
            room.id === id ? { ...room, adults, children } : room
        );
        setRooms(updatedRooms);
    };

    const removeRoom = (id) => {
        const filteredRooms = rooms.filter(room => room.id !== id);
        for (let i = 0; i < filteredRooms.length; i++) {
            filteredRooms[i].id = i + 1;
        }
        setRooms(filteredRooms);
    };

    const totalAdults = rooms.reduce((acc, room) => acc + room.adults, 0);

    const totalChildren = rooms.reduce((acc, room) => acc + room.children, 0);
    

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (location === '') {
            return;
        }
        if (calendarActive) {
            navigate(`/result/${location}/${calendar.year1 + "-" + months.indexOf(calendar.month1) + "-" + calendar.day1}/${calendar.year2 + "-" + months.indexOf(calendar.month2) + "-" + calendar.day2}/${totalAdults}/${1}`);
        }
        // would change the search with flexible dates
        else {
            navigate(`/result/${location}/${calendar.year1 + "-" + months.indexOf(calendar.month1) + "-" + calendar.day1}/${calendar.year2 + "-" + months.indexOf(calendar.month2) + "-" + calendar.day2}/${totalAdults}/${1}`)
        }
    }

    const handleDateClick = () => {
        setDatePopup(true);
    }

    const handleTravelerClick = () => {
        setTravelersPopup(true);
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <div className="box-container">
                <LocationBox location={location} setLocation={setLocation}/>
            </div>
            {(datePopup) && (<DatePopup calendar={calendar} setCalendar={setCalendar} setDatePopup={setDatePopup} calendarActive={calendarActive} setCalendarActive={setCalendarActive} nights={nights} setNights={setNights} monthsStayed={monthsStayed} setMonthsStayed={setMonthsStayed}/>)}
            {(!datePopup) &&
            <div className="box-container" onClick={handleDateClick}>
                {calendarActive && <DateBox date={calendar.month1 + " " + calendar.day1 + " - " + calendar.month2 + " " + calendar.day2}/>}
                {!calendarActive && <DateBox date={calcNights() + calcMonth("")} />}
            </div>
            }
            <div>
            {(!datePopup) &&
            <div>
            <div className="box-container" onClick={handleTravelerClick} >
                <TravelersBox people={totalAdults + totalChildren} rooms={rooms.length}/>
            </div>
            {(travelersPopup) && <TravelersPopup rooms={rooms} addRoom={addRoom} removeRoom={removeRoom} updateRoom={updateRoom} setTravelersPopup={setTravelersPopup}/>}
            </div>
            }
            </div>
            {(!datePopup) &&
            <FontAwesomeIcon className="search-button" icon={faSearch} onClick={handleSubmit}/> }
        </form>
        
    )
}

export default SearchBar;