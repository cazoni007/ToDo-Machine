import '../styles/TodoCounter.css';
function TodoCounter ({cantidad, total, theme}) {
    const setTheme = theme === "lightTheme" ? "counter--lightTheme" : "counter--darkTheme";
    return (
        <h1 className={`counter ${setTheme}`}>Has completado <b>{cantidad}</b> de <b>{total}</b> TODOs</h1>
    )
}

export {TodoCounter};