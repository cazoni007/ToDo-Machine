import '../styles/LoadingTodo.css'

function LoadingTodos ({theme}) {
    const setLiTheme = theme === "lightTheme" ?  "todoItem--lightTheme" : "todoItem--darkTheme";
    const setParaphTheme = theme === "lightTheme" ?  "content--lightTheme" : "content--darkTheme";
    return (
        <ul>
            <li className={`todoItem ${setLiTheme}`}>
            <p className={`content ${setParaphTheme}`}>Cargando todo...</p>
            </li>   
        </ul>
    )
}

export {LoadingTodos}