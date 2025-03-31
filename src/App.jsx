import { useState } from 'react'
import data from './data.json';
import ThemeBar from './components/ThemeBar';
import FilterBar from './components/FilterBar';
import Extension from './components/Extension';
import sunIcon from './assets/images/icon-sun.svg';
import moonIcon from './assets/images/icon-moon.svg'

function App() {
  // centralize state in App.jsx to re-render 
  // extensions based on filtering / extension removal
  const [theme, setTheme] = useState('dark');
  const [extensions, setExtensions] = useState(data); 
  const [filterState, setFilterState] = useState('all');

  document.body.className = theme;

  // FilterBar handlers
  const handleAll = () => {
    setFilterState('all');
  }

  const handleActive = () => {
    setFilterState('active');
  }

  const handleInActive = () => {
    setFilterState('inactive');
  }

  // Extension handlers
  const handleRemove = (name) => {
    setExtensions(extensions.filter(extension => extension.name !== name));
  }

  const handleActivate = (name) => {
    const nextExtensions = extensions.map(extension => 
      extension.name === name ? {...extension, isActive: !extension.isActive} : extension
    )

    setExtensions(nextExtensions);
  }

  const handleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <ThemeBar
        logoColor={theme === 'dark' ? '#FFFFFF' : '#091540'}
        themeIcon={theme === 'dark' ? sunIcon : moonIcon}
        themeHandler={handleTheme}
      />
      <FilterBar
        allHandler={handleAll}
        activeHandler={handleActive}
        inActiveHandler={handleInActive}
        activeButton={filterState}
      />
      <div className="extension-grid">
        {extensions.filter(extension => {
          if (filterState === 'active') return extension.isActive;
          if (filterState === 'inactive') return !extension.isActive;
          return true;
        }
        ).map(extension => (
          <Extension
            logo={extension.logo}
            name={extension.name}
            key={extension.name}
            description={extension.description}
            active={extension.isActive}
            activateHandler={handleActivate}
            removeHandler={handleRemove}
          />
        ))
        }
      </div>
    </>
  )
}

export default App
