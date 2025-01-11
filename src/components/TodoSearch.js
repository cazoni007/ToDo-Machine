import React from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch () {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return (
        <input className="search" type="text" id="nombre" placeholder="Busca el ToDo" value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}/> 
    )
}

export {TodoSearch}