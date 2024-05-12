import { useNavigate } from 'react-router-dom';
import '../styles/SearchResult.css';
import '../styles/Styles.css';

function HeaderBar() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className="header-container">
            <div className="back-button" onClick={handleClick}>
                <h1 className="header-text">Expedia</h1>
            </div>
            <div className="divider"/>
        </div>
    );
}

export default HeaderBar;