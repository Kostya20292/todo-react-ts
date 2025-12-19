import { useSelector } from 'react-redux';
import styles from './ToDoList.module.scss';
import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import type { RootState } from '../../../bll/store';

export const ToDoList = () => {
  const { todos } = useSelector((state: RootState) => state.todoReducer);

  const failedTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className={styles.container}>
      <ul className={`${styles.list} ${styles.failed}`}>
        {failedTodos.map((todo) => (
          <ToDoListItem key={todo.id} toDoItem={todo} />
        ))}
      </ul>
      <ul className={`${styles.list} ${styles.completed}`}>
        {completedTodos.map((todo) => (
          <ToDoListItem key={todo.id} toDoItem={todo} />
        ))}
      </ul>
    </div>
  );
};
