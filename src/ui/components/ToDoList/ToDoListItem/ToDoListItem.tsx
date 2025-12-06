import clsx from 'clsx';
import type { ToDo } from '../../../../models/todo-item';
import styles from './ToDoListItem.module.scss';

interface Props {
  toDoItem: ToDo;
  updateTodo: (todoItem: ToDo) => void;
  deleteTodo: (todoItem: ToDo) => void;
}

export const ToDoListItem = ({ toDoItem, updateTodo, deleteTodo }: Props) => {
  const handleDelete = () => {
    deleteTodo(toDoItem);
  };

  const handleUpdate = () => {
    updateTodo(toDoItem);
  };

  return (
    <li className={styles.wrapper}>
      <span>{toDoItem.text}</span>
      <div className={styles.buttons}>
        <button className={clsx(styles.button, styles.trash)} onClick={handleDelete}></button>
        <button
          className={clsx(styles.button, toDoItem.isDone ? styles.check : styles.uncheck)}
          onClick={handleUpdate}
        ></button>
      </div>
    </li>
  );
};
