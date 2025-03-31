function Extension({ logo, name, description, active, activateHandler, removeHandler }) {
  const handleRemove = () => {
    removeHandler(name);
  }

  const handleActivate = () => {
    activateHandler(name)
  }

  return (
    <article className="extension">
      <div className="extension-info">
        <img src={logo} alt={`${name} logo`}/>
          <h2>{name}</h2>
                <p>{description}</p>
      </div>
      <div className="extension-buttons">
        <button className="remove-button" onClick={handleRemove}>Remove</button>
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleActivate}
            checked={active}
          />
          <span className="slider"></span>
        </label>
      </div>
    </article>
  );
}

export default Extension;