import React from 'react';
import '../styles/TodoSearch.css';
function TodoSearch ({searchValue, setSearchValue}) {
    return (
        <input className="search" type="text" id="nombre" placeholder="Busca el ToDo" value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}/> 
    )
}

export {TodoSearch}