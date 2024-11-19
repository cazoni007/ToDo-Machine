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
    const setLiTheme = props.theme === "lightTheme" ?  "todoItem--lightTheme" : "todoItem--darkTheme";
    const setParaphTheme = props.theme === "lightTheme" ?  "content--lightTheme" : "content--darkTheme";
    const setCloseTheme = props.theme === "lightTheme" ?  "closeIcon--lightTheme" : "closeIcon--darkTheme";
    const setEditTheme = props.theme === "lightTheme" ?  "editIcon--lightTheme" : "editIcon--darkTheme";
    const setCompleteTheme = props.theme === "lightTheme" ?  "completeIcon--lightTheme" : "completeIcon--darkTheme";
    return (
        <li className={`todoItem ${setLiTheme}`} id={props.id}>
            <span className={`closeIcon ${setCloseTheme}`} onClick={cerrar}></span>
            <span className={`editIcon ${setEditTheme}`} onClick={editar}></span> 
            <span className={`completeIcon ${props.completed && "completeIcon--completed"} ${setCompleteTheme}`} onClick={completado}></span>
            <p className={`content ${props.completed && "content--finished"} ${setParaphTheme}`}>{props.contenido}</p>
        </li>
    )
}

export {TodoItem};