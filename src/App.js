// Importación de componentes y dependencias necesarias
import { MainSection } from './components/MainSection';
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoButton } from './components/TodoButton';
import { ToggleTheme } from './components/ToggleTheme';
import { CreateTodo } from './components/CreateTodo';
import { TodoEdit } from './components/TodoEdit'
import React from 'react';
import Swal from "sweetalert2";

// Tareas predeterminadas para iniciar la aplicación
const defaultTodos = JSON.parse(localStorage.getItem("todos") || "[]");;

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
  let contadorId = React.useRef(
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
  ); 
  const addTodo = (todo) => {
      const nuevoTodo = {text: todo, completed: false, id: contadorId.current};
      contadorId.current++;
      const nuevoArray = [...todos, nuevoTodo]; // Agrega el nuevo TODO al array/estado todos
      localStorage.setItem("todos", JSON.stringify(nuevoArray));
      setTodos(nuevoArray);
  };

  const completado = (elemento) => {
    const newArray = [...todos];
    newArray.forEach(todo => {
      if(todo.id === elemento) {
        todo.completed = !todo.completed;
      } 
    })
    console.log(elemento);
    localStorage.setItem("todos", JSON.stringify(newArray));
    setTodos(newArray);
  };
  const cerrar = async (id) => {
    // Encuentra el todo basado en el id
    const todoParaEliminar = todos.find((todo) => todo.id === id);
  
    if (todoParaEliminar.completed) {
      // Mostrar mensaje directo si está completado
      await Swal.fire({
        title: "Eliminado",
        text: `La tarea ha sido eliminada.`,
        icon: "success",
      });
  
      // Actualiza el estado eliminando el todo
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    } else {
      // Mostrar confirmación si NO está completado
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: `La tarea no está completada. ¿Deseas eliminarla de todas formas?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });
  
      if (result.isConfirmed) {
        // Actualiza el estado eliminando el todo
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        // Mostrar mensaje de éxito
        Swal.fire("¡Eliminado!", `La tarea ha sido eliminada.`, "success");
      }
    }
  };
  const [editModal, setEditModal] = React.useState(false);
  const [idTodo, setIdTodo] = React.useState(null)
  const editar = (id) => {
    setEditModal(true);
    setIdTodo(id)
  };
  const editedTodo = () => {
    const todoParaEditar = todos.find((todo) => todo.id === idTodo);
    return(todoParaEditar.text)
  }
  const confirmEdit = (editedTodo) => {
    
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === idTodo ? { ...todo, text: editedTodo } : todo
      )
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return updatedTodos
    });
  }
  const closeEdit = () => setEditModal(false);
  const [theme, setTheme] = React.useState(() =>{
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'lightTheme';
  }); 
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
      localStorage.setItem('theme', newTheme)
      return newTheme;
    })
  }
  React.useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme === "lightTheme" ? "light-theme" : "dark-theme");
  }, [theme]);
  return (
    <MainSection>
      <ToggleTheme toggleTheme = {toggleTheme} theme={theme}/>
      <TodoCounter cantidad={completedTodos} total={todos.length} setTodos={setTodos} theme={theme}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {
           searchedValues.map(todo => (
             <TodoItem key={todo.id} contenido={todo.text} completed={todo.completed} 
              completado = {completado} id ={todo.id} cerrar = {cerrar} editar = {editar} theme = {theme}/>))
        } 
      </TodoList>
      <TodoButton buttonClick = {buttonClick} todoLength = {[...todos].length} theme={theme}/>
      {isOpen && <CreateTodo closeModal = {closeModal} addTodo = {addTodo} theme = {theme}/>}
      {editModal && <TodoEdit closeEdit = {closeEdit} editedTodo = {editedTodo} confirmEdit = {confirmEdit} theme = {theme}/>}  
    </MainSection>
  );
}

export default App;