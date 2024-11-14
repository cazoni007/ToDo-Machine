// Importación de componentes y dependencias necesarias
import { MainSection } from './components/MainSection';
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoButton } from './components/TodoButton';
import { ToggleTheme } from './components/ToggleTheme';
import { CreateTodo } from './components/CreateTodo';
import React from 'react';

// Tareas predeterminadas para iniciar la aplicación
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
  // Estado para manejar las tareas
  const [todos, setTodos] = React.useState(defaultTodos);

  // Estado para manejar el valor de búsqueda
  const [searchValue, setSearchValue] = React.useState('');

  // Filtra las tareas según el texto de búsqueda (sin importar tildes o mayúsculas)
  const searchedValues = todos.filter(todo =>
    {
      const noTildes = (texto) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return noTildes(todo.text.toLocaleLowerCase()).includes(noTildes(searchValue.toLocaleLowerCase()));
    }) 
  
  // Obtiene la cantidad de tareas completadas
  const completedTodos = todos.filter(todo => todo.completed).length;

  // Estado para controlar si el modal está abierto o cerrado
  const [isOpen, setIsOpen] = React.useState(false);

  // Abre el modal
  const buttonClick = () => setIsOpen(true);

  // Cierra el modal
  const closeModal = () => setIsOpen(false);

  // Agrega una nueva tarea al arreglo de todos 
  const addTodo = (todo) => {
      todos.push({text: todo, completed: false}); // Agrega el nuevo TODO al array/estado todos
  };

  const completado = (elemento) => {
    const newArray = [...todos];
    newArray.forEach(todo => {
      if(todo.text === elemento) {
        todo.completed = !todo.completed;
      } 
    })
    console.log(elemento);
    setTodos(newArray);
  };
  return (
    <MainSection>
      <ToggleTheme/>
      <TodoCounter cantidad={completedTodos} total={todos.length} setTodos={setTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {
           searchedValues.map(todo => (
             <TodoItem key={todo.text} contenido={todo.text} completed={todo.completed} completado = {completado}/>))
        } 
      </TodoList>
      <TodoButton buttonClick = {buttonClick}/>
      {isOpen && <CreateTodo closeModal = {closeModal} addTodo = {addTodo}/>} 
    </MainSection>
  );
}

export default App;
