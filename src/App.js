//import logo from './platzi.webp';
import { MainSection } from './MainSection';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css';

function App() {
  // const lista = document.getElementsByTagName('ul');
  // const numbers = lista[0].children.length;
  // console.log(numbers);
  return (
    <MainSection>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>  
      </TodoList>
      <TodoButton/>
    </MainSection>
  );
}
// const lista = document.getElementsByTagName('ul');
// console.log(lista[0].children.length);
export default App;
