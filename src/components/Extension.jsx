function Extension({ icon, title, description }) {
    return (
        <div className="extension">
            <div className="extension-info">
                <img src={icon} alt={`${title} icon`}/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}