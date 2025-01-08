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

function AppUI(
    {
        toggleTheme,
        theme,
        completedTodos,
        todos,
        setTodos,
        searchValue,
        setSearchValue,
        loading,
        searchedValues,
        todoList,
        error,
        completado,
        cerrar,
        editar,
        buttonClick,
        isOpen,
        editModal,
        closeEdit,
        closeModal,
        addTodo,
        editedTodo,
        confirmEdit
      }
) {
    return (
    <MainSection>
      <ToggleTheme toggleTheme = {toggleTheme} theme={theme}/>
      <TodoCounter cantidad={completedTodos} total={todos.length} setTodos={setTodos} theme={theme}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {loading &&  todoList.map(todo => (<LoadingTodos theme={theme} key={todo.id}/>))}
        {error && <p style={{width:'80%',margin:'2rem auto', maxWidth:'120rem'}}>Ocurrio algun problema...</p>}
        {
          !loading && searchedValues.map(todo => (
            <TodoItem key={todo.id} contenido={todo.text} completed={todo.completed} 
             completado = {completado} id ={todo.id} cerrar = {cerrar} editar = {editar} theme = {theme}/>))
        } 
      </TodoList>
      <TodoButton buttonClick = {buttonClick} todoLength = {[...todos].length} theme={theme}/>
      {isOpen && <CreateTodo closeModal = {closeModal} addTodo = {addTodo} theme = {theme}/>}
      {editModal && <TodoEdit closeEdit = {closeEdit} editedTodo = {editedTodo} confirmEdit = {confirmEdit} theme = {theme}/>}  
    </MainSection>
    )
}

export {AppUI}