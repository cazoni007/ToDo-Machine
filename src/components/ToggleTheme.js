import '../styles/ToggleTheme.css';
import React from 'react';
import { TodoContext } from '../TodoContext';
function ToggleTheme() {
    const {theme, toggleTheme} = React.useContext(TodoContext)
    return (
        <div className={theme} onClick={toggleTheme}></div>
    )
}

export { ToggleTheme };