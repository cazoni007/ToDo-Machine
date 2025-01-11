// Importación de componentes y dependencias necesarias
import { MainSection } from '../components/MainSection';
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoButton } from '../components/TodoButton';
import { ToggleTheme } from '../components/ToggleTheme';
import { CreateTodo } from '../components/CreateTodo';
import { TodoEdit } from '../components/TodoEdit';
import { LoadingTodos } from '../components/LoadingTodo';
import { TodoContext } from '../TodoContext';
import React from 'react';

function AppUI() {
    const {isOpen, editModal} = React.useContext(TodoContext)
    return (
    <MainSection>
      <ToggleTheme/>
      <TodoCounter/>
      <TodoSearch/>
      <TodoContext.Consumer>
        {({loading, todoList, theme, error, searchedValues, completado, cerrar, editar}) => (
          <TodoList>
            {loading && todoList.map(todo => (<LoadingTodos theme={theme} key={todo.id}/>))}
            {error && <p style={{width:'80%',margin:'2rem auto', maxWidth:'120rem'}}>Ocurrio algun problema...</p>}
            {
              !loading && searchedValues.map(todo => (
                <TodoItem key={todo.id} contenido={todo.text} completed={todo.completed} 
                completado = {completado} id ={todo.id} cerrar = {cerrar} editar = {editar} theme = {theme}/>))
            } 
          </TodoList>
        )}
      </TodoContext.Consumer>
      <TodoButton/>
      {isOpen && <CreateTodo/>}
      {editModal && <TodoEdit/>}  
    </MainSection>
    )
}

export {AppUI}