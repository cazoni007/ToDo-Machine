import React from 'react';
import { TodoContext } from '../TodoContext';
import '../styles/CreateTodo.css';

function CreateTodo () {
    const {closeModal, addTodo, theme} = React.useContext(TodoContext)
    const [todo, setTodo] = React.useState('');
    const saveTodo = (event) => setTodo(event.target.value);
    const addTodoPro = () => {
        if(todo !== ''){
            closeModal();
            addTodo(todo);
        }
    }
    const setContainerTheme = theme === "lightTheme" ? "createToDo--lightTheme" : "createToDo--DarkTheme";
    const setTitleTheme = theme === "lightTheme" ? "createToDo__title--lightTheme" : "createToDo__title--DarkTheme";
    const setCreateButtonTheme = theme === "lightTheme" ? "createButtonTodo__add--lightTheme" : "createButtonTodo__add--DarkTheme";
    const setCancelButtonTheme = theme === "lightTheme" ? "createButtonTodo__cancel--lightTheme" : "createButtonTodo__cancel--DarkTheme";
    return (
        <div className='modalOverlay'>
            <div className={`createToDo  ${setContainerTheme}`}>
                <h2 className={`createToDo__title ${setTitleTheme}`}>Escribe tu nuevo TODO</h2>
                <textarea type='text' placeholder='Podar el pasto' className='toDo__input' onChange={saveTodo}/>
                <div className='toDo__buttonContainer'>
                    <button className={`createButtonTodo ${setCancelButtonTheme}`} onClick={closeModal}>Cancelar</button>
                    <button className={`createButtonTodo ${setCreateButtonTheme}`} onClick={addTodoPro}>Añadir</button>
                </div>
            </div>
        </div>
    )
}  

export {CreateTodo};