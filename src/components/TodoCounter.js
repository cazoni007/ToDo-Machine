import '../styles/TodoCounter.css';
function TodoCounter ({cantidad, total}) {
    return (
        <h1 className='counter'>Has completado <b>{cantidad}</b> de <b>{total}</b> TODOs</h1>
    )
}

export {TodoCounter};