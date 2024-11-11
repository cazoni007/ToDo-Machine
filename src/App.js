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
    {text: 'Jugar con la llorona',
    completed: false },
    {text: 'Acabar el curso de platzi',
    completed: false },
    {text: 'Acabar con este array xd',
      completed: true }
  ];

function App() {
  // const lista = document.getElementsByTagName('ul');
  // const numbers = lista[0].children.length;
  // console.log(numbers);
  return (
    <MainSection>
      <ToggleTheme/>
      <TodoCounter cantidad={4} total={5}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} contenido={todo.text} completed={todo.completed}/>
        ))} 
      </TodoList>
      <TodoButton/>
    </MainSection>
  );
}

// const lista = document.getElementsByTagName('ul');
// console.log(lista[0].children.length);
export default App;
