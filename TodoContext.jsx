import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
