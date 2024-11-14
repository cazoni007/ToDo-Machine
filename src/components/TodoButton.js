import React from 'react';

import '../styles/TodoButton.css';

function TodoButton (props) {
    return (
            <div className='buttonContainer'>
                <button className="button" onClick={props.buttonClick}>
                    <span className="buttonIcon"></span>
                </button>
            </div>
    )
}

export {TodoButton};