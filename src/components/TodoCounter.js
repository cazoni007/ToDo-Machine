import '../styles/TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter () {
    const {cantidad, total, theme} = React.useContext(TodoContext);
    const setTheme = theme === "lightTheme" ? "counter--lightTheme" : "counter--darkTheme";
    return (
        <h1 className={`counter ${setTheme}`}>Has completado <b>{cantidad}</b> de <b>{total}</b> TODOs</h1>
    )
}

export {TodoCounter};