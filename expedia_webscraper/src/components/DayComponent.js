import "../styles/DatePopup.css"

function DayComponent({day, limit, month, calendar, changeDay}) {

    const currentDate = new Date();
    const curDay = currentDate.getDate();
    const curMonth = currentDate.toLocaleString('default', {month: 'long'});
    const curYear = currentDate.getFullYear();

    const handlePress = () => {
        changeDay(day, month, calendar.year1);
    }

    if ((day === calendar.day1 && month === calendar.month1) || (day === calendar.day2 && month === calendar.month2)) {
        return (
            <div className="day-circle" onClick={handlePress} style={{backgroundColor: '#3D55B8'}}>{day}</div>
        );
    }

    else if ((((calendar.month1 === calendar.month2) && (day >= calendar.day1) && (day <= calendar.day2) && (month === calendar.month1)) || 
            (((calendar.month1 !== calendar.month2) && ((month === calendar.month1 && day >= calendar.day1) || (month === calendar.month2 && day <= calendar.day2))) && (day >= 1 && day <= limit)))) {
        return (
            <div className="day-highlight" onClick={handlePress}>{day}</div>
        );
    }

    else if (day === curDay && month === curMonth && calendar.year1 === curYear) {
        return (
            <div className="day-circle" onClick={handlePress} style={{backgroundColor: '#FF5A5F'}}>{day}</div>
        );
    }

    else if (day >= 1 && day <= limit) {
        return (
            <div className="day-circle" onClick={handlePress}>{day}</div>
        );
    }
    else {
        return (
            <div className="day-placeholder"/>
        );
    }
}

export default DayComponent;