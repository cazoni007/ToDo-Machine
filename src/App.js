//import logo from './platzi.webp';
import { MainSection } from './components/MainSection';
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoButton } from './components/TodoButton';
import { ToggleTheme } from './components/ToggleTheme';
import React from 'react';

const defaultTodos = [
    {text: 'Cortar cebolla skjhdkfj ahsdlf kjahsdkf hagsk djfgaskj dfga skdjfhagsdfj',
    completed: true },
    {text: 'Jugár con la llorona',
    completed: false },
    {text: 'Acabar el curso de platzi',
    completed: false },
    {text: 'Acabar con este array xd',
      completed: true },
    {text: 'Acabar el curso de platzi1',
    completed: false },
    {text: 'Escribiendo un texto medianamente largo para ver como se comporta la pagina y si no ocurre un overflow, ya que seguramente habran personas que quieran escribir pasos o tareas largas y en ves de usar distintas lo querran poner en uno solo por lo que esto deberia funcionar normal y no bugearse, ademas poder escribir palabras como otorrinolaringologia o medescorazonare xdddddd',
      completed: true },
    {text: 'Nuevo tarea pro',
    completed: false },
  ];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const searchedValues = todos.filter(todo =>
    {
      const noTildes = (texto) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return noTildes(todo.text.toLocaleLowerCase()).includes(noTildes(searchValue.toLocaleLowerCase()));
    }) 
  console.log(searchValue);
  const completedTodos = todos.filter(todo => todo.completed).length;
  return (
    <MainSection>
      <ToggleTheme/>
      <TodoCounter cantidad={completedTodos} total={todos.length} setTodos={setTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {
           searchedValues.map(todo => (
             <TodoItem key={todo.text} contenido={todo.text} completed={todo.completed}/>))
        } 
      </TodoList>
      <TodoButton/>
    </MainSection>
  );
}

// const lista = document.getElementsByTagName('ul');
// console.log(lista[0].children.length);
export default App;
