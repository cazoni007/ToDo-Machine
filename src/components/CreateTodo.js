import React from 'react';
import '../styles/CreateTodo.css';

function CreateTodo (props) {
    const [todo, setTodo] = React.useState('');
    const saveTodo = (event) => setTodo(event.target.value);
    const addTodo = () => {
        if(todo !== ''){
            props.closeModal();
            props.addTodo(todo);
        }
    }
    const setContainerTheme = props.theme === "lightTheme" ? "createToDo--lightTheme" : "createToDo--DarkTheme";
    const setTitleTheme = props.theme === "lightTheme" ? "createToDo__title--lightTheme" : "createToDo__title--DarkTheme";
    const setCreateButtonTheme = props.theme === "lightTheme" ? "createButtonTodo__add--lightTheme" : "createButtonTodo__add--DarkTheme";
    const setCancelButtonTheme = props.theme === "lightTheme" ? "createButtonTodo__cancel--lightTheme" : "createButtonTodo__cancel--DarkTheme";
    return (
        <div className='modalOverlay'>
            <div className={`createToDo  ${setContainerTheme}`}>
                <h2 className={`createToDo__title ${setTitleTheme}`}>Escribe tu nuevo TODO</h2>
                <textarea type='text' placeholder='Podar el pasto' className='toDo__input' onChange={saveTodo}/>
                <div className='toDo__buttonContainer'>
                    <button className={`createButtonTodo ${setCancelButtonTheme}`} onClick={props.closeModal}>Cancelar</button>
                    <button className={`createButtonTodo ${setCreateButtonTheme}`} onClick={addTodo}>Añadir</button>
                </div>
            </div>
        </div>
    )
}  

export {CreateTodo};