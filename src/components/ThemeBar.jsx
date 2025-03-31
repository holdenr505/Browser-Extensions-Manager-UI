import Logo from "./Logo";

function ThemeBar({ logoColor, themeIcon, themeHandler }) {
  return (
    <header className="theme-bar">
      <Logo color={logoColor} />
      <button
        onClick={themeHandler}
        onMouseDown={event => event.preventDefault()}>
        <img src={themeIcon} alt='theme icon'></img>
      </button>
    </header>
  );
}

export default ThemeBar;