import '../styles/TodoItem.css';
function TodoItem ({contenido}) {
    return (
        <li className="todoItem"><span className='closeIcon'></span><span className='editIcon'></span> <span className='completeIcon'></span><p className='content'>{contenido}</p></li>
    )
}

export {TodoItem};