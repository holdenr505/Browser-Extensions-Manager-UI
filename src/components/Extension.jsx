function Extension({ logo, name, description, active, activateHandler, removeHandler }) {
    const onRemove = () => {
        removeHandler(name);
    }

    const handleActivate = () => {
        activateHandler(name)
    }

    return (
        <div className="extension">
            <div className="extension-info">
                <img src={logo} alt={`${name} logo`}/>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="extension-buttons">
                <button className="remove-button" onClick={onRemove}>Remove</button>
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={handleActivate}
                        checked={active}
                    />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}

export default Extension;