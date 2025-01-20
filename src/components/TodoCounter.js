import '../styles/TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter () {
    const {completedTodos, todos, theme} = React.useContext(TodoContext);
    const setTheme = theme === "lightTheme" ? "counter--lightTheme" : "counter--darkTheme";
    return (
        <h1 className={`counter ${setTheme}`}>Has completado <b>{completedTodos}</b> de <b>{todos.length}</b> TODOs</h1>
    )
}

export {TodoCounter};