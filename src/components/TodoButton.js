import React from 'react';
import { TodoContext } from '../TodoContext';
import '../styles/TodoButton.css';

function TodoButton () {
    const {theme, todoList, buttonClick} = React.useContext(TodoContext);
    const setTheme = theme === "lightTheme" ? "button--lightTheme" : "button--darkTheme";
    const setAnimation = todoList <= 0 ? "animation" : "button";
    const setPlusAnimation = todoList <= 0 ? "plusAnimation" : "buttonIcon";  
    const setArrowLight = todoList <= 0 && theme === "lightTheme" ? "arrowLightAnimation" : "";
    const setArrowDark = todoList <= 0 && theme === "darkTheme" ? "arrowDarkAnimation" : "";
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