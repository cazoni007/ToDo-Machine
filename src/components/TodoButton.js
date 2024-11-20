import React from 'react';

import '../styles/TodoButton.css';

function TodoButton (props) {
    const setTheme = props.theme === "lightTheme" ? "button--lightTheme" : "button--darkTheme";
    const setAnimation = props.todoLength <= 0 ? "animation" : "button";
    const setPlusAnimation = props.todoLength <= 0 ? "plusAnimation" : "buttonIcon";  
    return (
            <div className='buttonContainer'>
                <button className={`${setTheme} ${setAnimation}`} onClick={props.buttonClick}>
                    <span className={`${setPlusAnimation}`}></span>
                </button>
            </div>
    )
}

export {TodoButton};