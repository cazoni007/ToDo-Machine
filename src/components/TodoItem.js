import '../styles/TodoItem.css';
function TodoItem (props) {
    return (
        <li className="todoItem">
            <span className='closeIcon'></span>
            <span className='editIcon'></span> 
            <span className={`completeIcon ${props.completed && "completeIcon--completed"}`}></span>
            <p className={`content ${props.completed && "content--finished"}`}>{props.contenido}</p>
        </li>
    )
}

export {TodoItem};