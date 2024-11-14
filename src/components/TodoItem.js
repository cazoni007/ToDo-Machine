import '../styles/TodoItem.css';
function TodoItem (props) {
    const completado = (event) => {
        props.completado(event.target.closest('li').innerText);
    }
    return (
        <li className="todoItem">
            <span className='closeIcon'></span>
            <span className='editIcon'></span> 
            <span className={`completeIcon ${props.completed && "completeIcon--completed"}`} onClick={completado}></span>
            <p className={`content ${props.completed && "content--finished"}`}>{props.contenido}</p>
        </li>
    )
}

export {TodoItem};