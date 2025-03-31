function ThemeBar({ logo, themeIcon, themeHandler }) {
  return (
    <header className="theme-bar">
      <div>
        <img src={logo} alt="Extensions" />
      </div>
      <button
        onClick={themeHandler}
        onMouseDown={event => event.preventDefault()}>
        <img src={themeIcon} alt='theme icon'></img>
      </button>
    </header>
  );
}

export default ThemeBar;