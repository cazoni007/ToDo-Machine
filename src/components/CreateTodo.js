import '../styles/CreateTodo.css';

function CreateTodo (props) {
    return (
        <div className='modalOverlay'>
            <div className='toDo'>
                <h2 className='toDo__title'>Escribe tu nuevo TODO</h2>
                <textarea type='text' placeholder='Podar el pasto' className='toDo__input'/>
                <div className='toDo__buttonContainer'>
                    <button className='buttonTodo buttonTodo--cancel' onClick={props.closeModal}>Cancelar</button>
                    <button className='buttonTodo buttonTodo--add'>Añadir</button>
                </div>
            </div>
        </div>
    )
}  

export {CreateTodo};