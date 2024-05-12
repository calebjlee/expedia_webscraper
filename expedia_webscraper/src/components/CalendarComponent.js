import '../styles/DatePopup.css';
import DayComponent from './DayComponent';

function CalendarComponent({month, calendar, changeDay}) {

    const currentDate = new Date();

    const current_day = currentDate.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month_limits = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    const calcDate = (month, day, year) => {
        const curDate = new Date(year, month, day);
        return curDate.getDay();
    }

    const monthIndex = months.indexOf(month);

    const day = -calcDate(monthIndex, 1, calendar.year1) + 1;

    return (
        <div className="day-container">
            <div className="day-column">
                <p className="day-text">S</p>
                <DayComponent day={day} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 7} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 14} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 21} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 28} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 35} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
            </div>
            <div className="day-column">
                <div className="day-text">M</div>
                <DayComponent day={day + 1} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 8} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 15} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 22} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 29} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 36} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
            </div>
            <div className="day-column">
                <div className="day-text">T</div>
                <DayComponent day={day + 2} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 9} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 16} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 23} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 30} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 37} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
            </div>
            <div className="day-column">
                <div className="day-text">W</div>
                <DayComponent day={day + 3} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 10} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 17} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 24} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 31} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 38} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
            </div>
            <div className="day-column">
                <div className="day-text">T</div>
                <DayComponent day={day + 4} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 11} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 18} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 25} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 32} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
            </div>
            <div className="day-column">
                <div className="day-text">F</div>
                <DayComponent day={day + 5} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 12} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 19} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 26} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 33} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
            </div>
            <div className="day-column">
                <div className="day-text">S</div>
                <DayComponent day={day + 6} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 13} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 20} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 27} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
                <DayComponent day={day + 34} limit={month_limits[monthIndex]} curDay={current_day} month={month} calendar={calendar} changeDay={changeDay} />
            </div>
        </div>
    );
}

export default CalendarComponent;