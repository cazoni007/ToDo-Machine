import '../styles/TodoItem.css';
function TodoItem (props) {
    const completado = (event) => {
        props.completado(Number(event.target.closest('li').id));
    }
    const cerrar = (event) => {
        props.cerrar(Number(event.target.closest('li').id));
    }
    const editar = (event) => {
        props.editar(Number(event.target.closest('li').id));
    }
    return (
        <li className="todoItem" id={props.id}>
            <span className='closeIcon' onClick={cerrar}></span>
            <span className='editIcon' onClick={editar}></span> 
            <span className={`completeIcon ${props.completed && "completeIcon--completed"}`} onClick={completado}></span>
            <p className={`content ${props.completed && "content--finished"}`}>{props.contenido}</p>
        </li>
    )
}

export {TodoItem};