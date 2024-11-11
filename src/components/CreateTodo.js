import '../styles/CreateTodo.css';

function CreateTodo () {
    return (
        <div className='toDo'>
            <h2 className='toDo__title'>Escribe tu nuevo TODO</h2>
            <input type='text' placeholder='Podar el pasto' className='todo__input'/>
            <button className='toDo__buttonCancel'>Cancelar</button>
            <button className='todo__buttonAdd'>Añadir</button>
        </div>
    )
}  

export {CreateTodo};