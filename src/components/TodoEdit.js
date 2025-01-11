import React from 'react';
import Swal from "sweetalert2";
import { TodoContext } from '../TodoContext';
import '../styles/TodoEdit.css';

function TodoEdit (props) {
    const {closeEdit, editedTodo, confirmEdit, theme} = React.useContext(TodoContext);
    const [todo, setTodo] = React.useState(editedTodo());
    const saveTodo = (event) => setTodo(event.target.value);
    const confirmEditPro = () => {
        if(todo.trim() !== ''){
            confirmEdit(todo);
            closeEdit();
            Swal.fire("¡Editado!", `La tarea ha sido modificada.`, "success");
        }
    }
    const setToDoTheme = theme === "lightTheme" ? "toDo--lightTheme" : "toDo--darkTheme";
    const setTitleTheme = theme === "lightTheme" ? "toDo__title--lightTheme" : "toDo__title--darkTheme";
    const setEditButtonTheme = theme === "lightTheme" ? "buttonTodo--edit-lightTheme" : "buttonTodo--edit-darkTheme";
    const setCancelButtonTheme = theme === "lightTheme" ? "buttonTodo--cancel-lightTheme" : "buttonTodo--cancel-darkTheme";
    return (
        <div className='modalOverlay'>
            <div className={`toDo ${setToDoTheme}`}>
                <h2 className={`toDo__title ${setTitleTheme}`}>Modifica tu TODO</h2>
                <textarea type='text' value={todo} className='toDo__input' onChange={saveTodo}/>
                <div className='toDo__buttonContainer'>
                    <button className={`buttonTodo ${setCancelButtonTheme}`} onClick={closeEdit}>Cancelar</button>
                    <button className={`buttonTodo ${setEditButtonTheme}`} onClick={confirmEditPro}>Editar</button>
                </div>
            </div>
        </div>
    )
}  

export {TodoEdit};