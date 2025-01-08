import { useEffect, useState } from 'react';

const useLocalStorage = (item, initialValue) => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todos')));
  const getStoreValue = () => {
    const storeValue = localStorage.getItem(item) 
    try {    
      return storeValue ? JSON.parse(storeValue) : initialValue
    } catch (error) {
      return  storeValue || initialValue  
    }
  }
  const [value, setValue] = useState(getStoreValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] =  useState(false);
  useEffect(() => {
    setTimeout(() => {
      try {
        setLoading(false);
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        setTodoList(savedTodos)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }, 2000);
  },[]);
  const newValue = (value) => {
    const isString = typeof(value);
    const valueToStore = isString === "string" ? value : JSON.stringify(value);
    setValue(value);
    localStorage.setItem(item, valueToStore);
  }

  return {value, newValue, loading, error, todoList}
}

export {useLocalStorage}