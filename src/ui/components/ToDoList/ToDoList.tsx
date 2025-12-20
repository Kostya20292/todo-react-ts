import { useSelector } from 'react-redux';

import type { RootState } from '../../../bll/store';

import { ToDoListItem } from './ToDoListItem/ToDoListItem';

import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from './ToDoList.styled';

export const ToDoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);

  const failedTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <ToDoListContainer>
      <ToDoListFailed>
        {failedTodos.map((todo) => (
          <ToDoListItem key={todo.id} toDoItem={todo} />
        ))}
      </ToDoListFailed>
      <ToDoListCompleted>
        {completedTodos.map((todo) => (
          <ToDoListItem key={todo.id} toDoItem={todo} />
        ))}
      </ToDoListCompleted>
    </ToDoListContainer>
  );
};
