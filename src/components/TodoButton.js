import React from 'react';
import { CreateTodo } from './CreateTodo.js';
import '../styles/TodoButton.css';

function TodoButton () {
    const [isOpen, setIsOpen] = React.useState(false);
    const buttonClick = () => {setIsOpen(true);};
    const closeModal = () => {setIsOpen(false);};
    return (
        <>
            <div className='buttonContainer'>
                <button className="button" onClick={buttonClick}>
                    <span className="buttonIcon"></span>
                </button>
            </div>
            {isOpen && <CreateTodo closeModal = {closeModal}/>} 
        </>
    )
}

export {TodoButton};