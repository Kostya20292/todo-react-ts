import { useState } from 'react';
import { Form } from '../../components/Form/Form';
import { Header } from '../../components/Header/Header';
import { ToDoList } from '../../components/ToDoList/ToDoList';
import type { ToDo } from '../../../models/todo-item';

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const createTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        text,
        isDone: false,
      },
    ]);
  };

  const updateTodo = (todoItem: ToDo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoItem.id) {
          todo.isDone = !todo.isDone;
        }

        return todo;
      })
    );
  };

  const deleteTodo = (todoItem: ToDo) => {
    setTodos(todos.filter((todo) => todo.id !== todoItem.id));
  };

  return (
    <>
      <Header />
      <Form createTodo={createTodo} />
      <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </>
  );
};
