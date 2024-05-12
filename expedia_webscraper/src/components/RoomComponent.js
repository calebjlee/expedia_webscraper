import "../styles/TravelersPopup.css";

function RoomComponent({room, updateRoom, removeRoom, totalRooms}) { 

    const addAdult = () => {
        if (room.adults === 14) return;
        updateRoom(room.id, room.adults + 1, room.children);
    }

    const removeAdult = () => {
        if (room.adults === 1) return;
        updateRoom(room.id, room.adults - 1, room.children);
    }

    const addChildren = () => {
        if (room.children === 6) return;
        updateRoom(room.id, room.adults, room.children + 1);
    }

    const removeChildren = () => {
        if (room.children === 0) return;
        updateRoom(room.id, room.adults, room.children - 1);
    }

    const remove = () => {
        removeRoom(room.id);
    }

    return (
    <div style={{width: "100%", flex: 1}}>
        <p className="traveler-text" style={{fontWeight: "bold"}}>Room {room.id}</p>
        <div className="room-row">
            <p className="traveler-text">Adults</p>
            <div className="buttons-container">
                <div className="change-room-button" onClick={removeAdult} style={{backgroundColor: room.adults === 1 ? 'grey' : 'transparent'}}>–</div>
                <div className="room-amount">{room.adults}</div>
                <div className="change-room-button" onClick={addAdult} style={{backgroundColor: room.adults === 14 ? 'grey' : 'transparent'}}>+</div>
            </div>
        </div>
        <div className="room-row">
            <div className="children-container">
                <p className="traveler-text">Children</p>
                <p className="age-text">Ages 0 to 17</p>
            </div>
            <div className="buttons-container">
                <div className="change-room-button" onClick={removeChildren} style={{backgroundColor: room.children === 0 ? 'grey' : 'transparent'}}>–</div>
                <div className="room-amount">{room.children}</div>
                <div className="change-room-button" onClick={addChildren} style={{backgroundColor: room.children === 6 ? 'grey' : 'transparent'}}>+</div>
            </div>
        </div>
        {totalRooms !== 1 &&  
        <div className="room-row" onClick={remove}>
            <div className="remove-button">Remove Room</div>
        </div>}
        
    </div>
    );
}

export default RoomComponent;