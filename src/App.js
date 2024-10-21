//import logo from './platzi.webp';
import { MainSection } from './MainSection';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
    {text: 'Cortar cebolla',
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
      <TodoCounter cantidad={4}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} contenido={todo.text}/>
        ))} 
      </TodoList>
      <TodoButton/>
    </MainSection>
  );
}

// const lista = document.getElementsByTagName('ul');
// console.log(lista[0].children.length);
export default App;
