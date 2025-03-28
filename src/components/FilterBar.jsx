import { useState } from 'react'

function FilterBar({ allHandler, activeHandler, inActiveHandler }) {
    const [activeButton, setActiveButton] = useState('all');
    
    const handleAll = () => {
        setActiveButton('all');
        allHandler();
    }

    const handleActive = () => {
        setActiveButton('active');
        activeHandler();
    }
    
    const handleInActive = () => {
        setActiveButton('inactive');
        inActiveHandler();
    }

    return (
        <div className="filter-bar">
            <h2>Extensions List</h2>
            <div className="filter-buttons">
                <button
                    className={activeButton === 'all' ? 'active-button' : ''}
                    onClick={handleAll}
                    onMouseDown={(event) => event.preventDefault()}>
                        All
                </button>
                <button
                    className={activeButton === 'active' ? 'active-button' : ''}
                    onClick={handleActive}
                    onMouseDown={(event) => event.preventDefault()}>
                        Active</button>
                <button
                    className={activeButton === 'inactive' ? 'active-button' : ''}
                    onClick={handleInActive}
                    onMouseDown={(event) => event.preventDefault()}>
                        Inactive
                    </button>
            </div>
        </div>
    );
}

export default FilterBar;