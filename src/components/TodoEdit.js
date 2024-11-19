import React from 'react';
import Swal from "sweetalert2";
import '../styles/TodoEdit.css';

function TodoEdit (props) {
    const [todo, setTodo] = React.useState(props.editedTodo());
    const saveTodo = (event) => setTodo(event.target.value);
    const confirmEdit = () => {
        if(todo.trim() !== ''){
            props.confirmEdit(todo);
            props.closeEdit();
            Swal.fire("¡Editado!", `La tarea ha sido modificada.`, "success");
        }
    }
    const setToDoTheme = props.theme === "lightTheme" ? "toDo--lightTheme" : "toDo--darkTheme";
    const setTitleTheme = props.theme === "lightTheme" ? "toDo__title--lightTheme" : "toDo__title--darkTheme";
    const setEditButtonTheme = props.theme === "lightTheme" ? "buttonTodo--edit-lightTheme" : "buttonTodo--edit-darkTheme";
    const setCancelButtonTheme = props.theme === "lightTheme" ? "buttonTodo--cancel-lightTheme" : "buttonTodo--cancel-darkTheme";
    return (
        <div className='modalOverlay'>
            <div className={`toDo ${setToDoTheme}`}>
                <h2 className={`toDo__title ${setTitleTheme}`}>Modifica tu TODO</h2>
                <textarea type='text' value={todo} className='toDo__input' onChange={saveTodo}/>
                <div className='toDo__buttonContainer'>
                    <button className={`buttonTodo ${setCancelButtonTheme}`} onClick={props.closeEdit}>Cancelar</button>
                    <button className={`buttonTodo ${setEditButtonTheme}`} onClick={confirmEdit}>Editar</button>
                </div>
            </div>
        </div>
    )
}  

export {TodoEdit};