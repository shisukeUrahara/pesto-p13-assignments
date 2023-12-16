// ThemeSwitcher.js
import React, { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import './ThemeSwitcher.css'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button className='themeButton' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
}

export default ThemeSwitcher;
