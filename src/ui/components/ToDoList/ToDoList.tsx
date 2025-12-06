import type { ToDo } from '../../../models/todo-item';
import styles from './ToDoList.module.scss';
import { ToDoListItem } from './ToDoListItem/ToDoListItem';

interface Props {
  todos: ToDo[];
  updateTodo: (todoItem: ToDo) => void;
  deleteTodo: (todoItem: ToDo) => void;
}

export const ToDoList = ({ todos, updateTodo, deleteTodo }: Props) => {
  const failedTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className={styles.container}>
      <ul className={`${styles.list} ${styles.failed}`}>
        {failedTodos.map((todo) => (
          <ToDoListItem
            key={todo.id}
            toDoItem={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <ul className={`${styles.list} ${styles.completed}`}>
        {completedTodos.map((todo) => (
          <ToDoListItem
            key={todo.id}
            toDoItem={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
