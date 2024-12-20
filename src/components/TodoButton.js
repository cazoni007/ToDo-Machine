import React from 'react';

import '../styles/TodoButton.css';

function TodoButton (props) {
    const setTheme = props.theme === "lightTheme" ? "button--lightTheme" : "button--darkTheme";
    const setAnimation = props.todoLength <= 0 ? "animation" : "button";
    const setPlusAnimation = props.todoLength <= 0 ? "plusAnimation" : "buttonIcon";  
    const setArrowLight = props.todoLength <= 0 && props.theme === "lightTheme" ? "arrowLightAnimation" : "";
    const setArrowDark = props.todoLength <= 0 && props.theme === "darkTheme" ? "arrowDarkAnimation" : "";
    return (
            <div className='buttonContainer'>
                <span className={`${setArrowLight} ${setArrowDark}`}></span>
                <button className={`${setTheme} ${setAnimation}`} onClick={props.buttonClick} 
                aria-label="Agregar nueva tarea">
                    <span className={`${setPlusAnimation}`}></span>
                </button>
            </div>
    )
}

export {TodoButton};