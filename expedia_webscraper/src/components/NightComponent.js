import '../styles/FlexibleDates.css';

function NightComponent({nightText, nights, setNights, id, setChecked}) {
    const handleNights = () => {
        setNights(id)
        if (id === 3) setChecked(true);
    }
    return (
        <div className="night-component" onClick={handleNights} style={{backgroundColor: nights === id ? 'grey' : 'transparent'}}>
            <p>{nightText}</p>
        </div>
    )
}

export default NightComponent;