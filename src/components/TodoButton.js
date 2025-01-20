import React from 'react';
import { TodoContext } from '../TodoContext';
import '../styles/TodoButton.css';

function TodoButton () {
    const {theme, todos, buttonClick} = React.useContext(TodoContext);
    const setTheme = theme === "lightTheme" ? "button--lightTheme" : "button--darkTheme";
    const setAnimation = todos.length <= 0 ? "animation" : "button";
    const setPlusAnimation = todos.length <= 0 ? "plusAnimation" : "buttonIcon";  
    const setArrowLight = todos.length <= 0 && theme === "lightTheme" ? "arrowLightAnimation" : "";
    const setArrowDark = todos.length <= 0 && theme === "darkTheme" ? "arrowDarkAnimation" : "";
    return (
            <div className='buttonContainer'>
                <span className={`${setArrowLight} ${setArrowDark}`}></span>
                <button className={`${setTheme} ${setAnimation}`} onClick={buttonClick} 
                aria-label="Agregar nueva tarea">
                    <span className={`${setPlusAnimation}`}></span>
                </button>
            </div>
    )
}

export {TodoButton};