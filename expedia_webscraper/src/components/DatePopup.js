import '../styles/DatePopup.css';
import '../styles/Styles.css';
import '../styles/FlexibleDates.css';
import CalendarComponent from './CalendarComponent';
import NightComponent from './NightComponent';
import MonthComponent from './MonthComponent';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function DatePopup({calendar, setCalendar, setDatePopup, calendarActive, setCalendarActive, nights, setNights, monthsStayed, setMonthsStayed}) {

    

    const curMonth = new Date().getMonth();
    const curYear = new Date().getFullYear();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    
    const [checked, setChecked] = useState(false)

    const isDayGreater = (day1, month1, day2, month2, year) => {
        if (month1 === month2) {
            return day1 > day2;
        }
        else {
            if (year === calendar.year1) {
                return months.indexOf(month1) > months.indexOf(month2);
            }
            else {
                return months.indexOf(month1) < months.indexOf(month2);
            }
        }
    }

    const changeDay = (day, month, year) => {
        if (calendar.isDay1) {
            if (!isDayGreater(day, month, calendar.day2, calendar.month2, year)) {
                setCalendar({...calendar, day1: day, month1: month, isDay1: !calendar.isDay1});
            }
            else {
                setCalendar({...calendar, day1: calendar.day2, day2: day, month1: calendar.month2, month2: month, isDay1: !calendar.isDay1});
            }
        }
        else {
            if (isDayGreater(day, month, calendar.day1, calendar.month1, year)) {
                setCalendar({...calendar, day2: day, month2: month, isDay1: !calendar.isDay1});
            }
            else {
                setCalendar({...calendar, day2: calendar.day1, day1: day, month2: calendar.month1, month1: month, isDay1: !calendar.isDay1});
            }
        }
    }
    
    const changeMonthRight = () => {
        if (calendar.curMonth2 === "December") {
            setCalendar({...calendar, day1: 1, month1: "January", day2: 1, month2: "January", curMonth1: "December", curMonth2: "January", year2: calendar.year2 + 1, isDay1: false});
        }
        else if (calendar.curMonth1 === "December") {
            setCalendar({...calendar, day1: 1, month1: "January", day2: 1, month2: "January", curMonth1: "January", curMonth2: months[months.indexOf(calendar.curMonth2) + 1], year1: calendar.year1 + 1, isDay1: false});
        }
        else {
            setCalendar({...calendar, day1: 1, month1: calendar.curMonth2, day2: 1, month2: calendar.curMonth2, curMonth1: calendar.curMonth2, curMonth2: months[months.indexOf(calendar.curMonth2) + 1], isDay1: false});
        }
    }

    const changeMonthLeft = () => {
        if (calendar.curMonth1 === "January") {
            setCalendar({...calendar, day1: 1, month1: "December", day2: 1, month2: "December", curMonth1: "December", curMonth2: "January", year1: calendar.year1 - 1});
        }
        else if (calendar.curMonth2 === "January") {
            setCalendar({...calendar, day1: 1, month1: "December", day2: 1, month2: "December", curMonth1: months[months.indexOf(calendar.curMonth1) - 1], curMonth2: "January", year2: calendar.year2 - 1});
        }
        else {
            setCalendar({...calendar, day1: 1, month1: months[months.indexOf(calendar.curMonth1) - 1], day2: 1, month2: months[months.indexOf(calendar.curMonth1) - 1], curMonth1: months[months.indexOf(calendar.curMonth1) - 1], curMonth2: calendar.curMonth1});
        }
    }
        

    const calcDate = (month, day, year) => {
        const curDate = new Date(year, month, day);
        return days[curDate.getDay()].slice(0, 3);
    }

    const handleClick = () => {
        setDatePopup(false);
    }

    const handleCheckbox = (event) => {
        if (nights === 3) {setChecked(true); return;}
        setChecked(event.target.checked);
    }

    return (
        <div className="date-popup-container" onClick={e => e.stopPropagation()}>
            <div className="date-popup-header">
                <div className="date-popup-column" onClick={() => setCalendarActive(true)}>
                    <p className="date-popup-text" style={{color: calendarActive ? '#3D55B8' : 'white'}}>Calendar</p>
                    <div className="date-popup-divider" style={{backgroundColor: calendarActive ? '#3D55B8' : 'white'}}/>
                </div>
                <div className="date-popup-column" onClick={() => setCalendarActive(false)}>
                    <p className="date-popup-text" style={{color: calendarActive ? 'white' : '#3D55B8'}}>Flexible Dates</p>
                    <div className="date-popup-divider" style={{backgroundColor: calendarActive ? 'white' : '#3D55B8'}}/>
                </div>
            </div>
            {calendarActive && 
            (<div className="popup-calendar-container">
                <div className="travel-date-container">
                    <p className="travel-date-text">{calcDate(months.indexOf(calendar.month1), calendar.day1, calendar.year1)}, {calendar.month1} {calendar.day1}</p>
                    <FontAwesomeIcon icon={faArrowCircleRight}/>
                    <p className="travel-date-text">{calcDate(months.indexOf(calendar.month2), calendar.day2, calendar.year2)}, {calendar.month2} {calendar.day2}</p>
                </div>
                <div className="months-container">
                    <div className="month-button-container" style={{marginLeft: "1vw"}}>
                        <FontAwesomeIcon icon={faLessThan} className="month-left-button" onClick={changeMonthLeft}/>
                        <p style={{marginLeft: "6.5vw"}}>{calendar.curMonth1} {calendar.year1}</p>
                    </div>
                    <div className="month-button-container" style={{justifyContent: "flex-end", marginRight: "1vw"}}>
                        <p style={{marginRight: "6.5vw"}}>{calendar.curMonth2} {calendar.year2}</p>
                        <FontAwesomeIcon icon={faGreaterThan} className="month-right-button" onClick={changeMonthRight}/>
                    </div> 
                </div>
                <div className="calendar-container">
                    <CalendarComponent month={calendar.curMonth1} calendar={calendar} changeDay={changeDay}/>
                    <CalendarComponent month={calendar.curMonth2} calendar={calendar} changeDay={changeDay}/>
                </div>
            </div>
            )}
            {!calendarActive && 
                <div className="flexible-dates-container">
                    <p className="header">How long do you want to stay?</p>
                    <div className="nights-container">
                        <NightComponent nightText={"1 night"} nights={nights} setNights={setNights} id={0}/>
                        <NightComponent nightText={"2-3 nights"} nights={nights} setNights={setNights} id={1}/>
                        <NightComponent nightText={"4-5 nights"} nights={nights} setNights={setNights} id={2}/>
                        <NightComponent nightText={"6-7 nights"} nights={nights} setNights={setNights} id={3} setChecked={setChecked}/>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" className="checkbox" checked={checked} onChange={handleCheckbox}/>
                        <p className="description">Must include weekends</p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p className="header">When do you want to travel?</p>
                        <p className="description">You can select more than one month.</p>
                    </div>
                    <div className="months-container">
                        <MonthComponent monthsStayed={monthsStayed} setMonthsStayed={setMonthsStayed} id={0} month={months[curMonth]} year={curYear}/>
                        <MonthComponent monthsStayed={monthsStayed} setMonthsStayed={setMonthsStayed} id={1} month={months[curMonth === 11 ? 0 : curMonth + 1]} year={curMonth === 11 ? curYear + 1 : curYear}/>
                        <MonthComponent monthsStayed={monthsStayed} setMonthsStayed={setMonthsStayed} id={2} month={months[curMonth === 10 ? 0 : curMonth + 2]} year={curMonth === 10 ? curYear + 1 : curYear}/>
                        <MonthComponent monthsStayed={monthsStayed} setMonthsStayed={setMonthsStayed} id={3} month={months[curMonth === 9 ? 0 : curMonth + 3]} year={curMonth === 9 ? curYear + 1 : curYear}/>
                        <MonthComponent monthsStayed={monthsStayed} setMonthsStayed={setMonthsStayed} id={4} month={months[curMonth === 8 ? 0 : curMonth + 4]} year={curMonth === 8 ? curYear + 1 : curYear}/>
                        <MonthComponent monthsStayed={monthsStayed} setMonthsStayed={setMonthsStayed} id={5} month={months[curMonth === 7 ? 0 : curMonth + 5]} year={curMonth === 7 ? curYear + 1 : curYear}/>
                    </div>
                    <div style={{marginRight: "3vw", marginTop: "1vw", width: "100%"}}>
                        <div className="done-button" onClick={handleClick}>Done</div>
                    </div>
                    
                </div>}
        </div>
    );
}

export default DatePopup;