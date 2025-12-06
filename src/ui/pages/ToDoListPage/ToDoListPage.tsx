import { useState } from 'react';
import { Form } from '../../components/Form/Form';
import { Header } from '../../components/Header/Header';
import { ToDoList } from '../../components/ToDoList/ToDoList';
import type { ToDo } from '../../../models/todo-item';
import { ToastContainer } from 'react-toastify';
import { notifyCreate, notifyUpdate, notifyDelete } from '../../../utils/notifications';

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
    notifyCreate();
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
    notifyUpdate();
  };

  const deleteTodo = (todoItem: ToDo) => {
    setTodos(todos.filter((todo) => todo.id !== todoItem.id));
    notifyDelete();
  };

  return (
    <>
      <Header />
      <Form createTodo={createTodo} />
      <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <ToastContainer />
    </>
  );
};
