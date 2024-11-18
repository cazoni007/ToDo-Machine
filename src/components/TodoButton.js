import React from 'react';

import '../styles/TodoButton.css';

function TodoButton (props) {
    const setTheme = props.theme === "lightTheme" ? "button--lightTheme" : "button--darkTheme"; 
    return (
            <div className='buttonContainer'>
                <button className={`button ${setTheme}`} onClick={props.buttonClick}>
                    <span className="buttonIcon"></span>
                </button>
            </div>
    )
}

export {TodoButton};