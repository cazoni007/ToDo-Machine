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
    return (
        <div className='modalOverlay'>
            <div className='toDo'>
                <h2 className='toDo__title'>Escribe tu nuevo TODO</h2>
                <textarea type='text' placeholder='Podar el pasto' className='toDo__input' onChange={saveTodo}/>
                <div className='toDo__buttonContainer'>
                    <button className='buttonTodo buttonTodo--cancel' onClick={props.closeModal}>Cancelar</button>
                    <button className='buttonTodo buttonTodo--add' onClick={addTodo}>Añadir</button>
                </div>
            </div>
        </div>
    )
}  

export {CreateTodo};