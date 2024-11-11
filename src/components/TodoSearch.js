import '../styles/TodoSearch.css';
function TodoSearch () {
    return (
        <input className="search" type="text" id="nombre" placeholder="Busca el ToDo" onChange={(event) => console.log(event.target.value)}/>
    )
}

export {TodoSearch}