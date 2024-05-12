import "../styles/TravelersPopup.css";
import '../styles/Styles.css';
import RoomComponent from './RoomComponent.js';

function TravelersPopup({rooms, addRoom, removeRoom, updateRoom, setTravelersPopup}) {

    const handleDone = () => {
        setTravelersPopup(false);
    }

    return (
        <div className="traveler-container" onClick={(e) => e.stopPropagation()}>
            {rooms.map((room, index) => (
                <RoomComponent key={index} room={room} updateRoom={updateRoom} removeRoom={removeRoom} totalRooms={rooms.length}/>
            ))}
            <div className="room-row" onClick={addRoom}>
                <div className="remove-button">Add Another Room</div>
            </div>
            <div className="room-row" onClick={handleDone}>
                <div className="done-button">Done</div>
            </div>
        </div>
    );
}

export default TravelersPopup;