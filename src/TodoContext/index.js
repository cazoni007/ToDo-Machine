import React from "react";
import Swal from "sweetalert2";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}) {
    // Estado para manejar las tareas
    const {value: todos, 
        newValue: setTodos,
        loading,
        error, 
        todoList} = useLocalStorage('todos', []); 

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
    const updatedTodo = todos.map((todo) =>
    todo.id === idTodo ? { ...todo, text: editedTodo } : todo)
    setTodos(updatedTodo)
    }
    const closeEdit = () => setEditModal(false);
    const {value: theme, newValue: setTheme} = useLocalStorage('theme', 'lightTheme');
    const toggleTheme = () => {
    setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')
    }
    React.useEffect(() => {
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add(theme === 'lightTheme' ? "light-theme" : "dark-theme");
    }, [theme]);

    return (
    <TodoContext.Provider value={{
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
    }}>
        {children}
    </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}