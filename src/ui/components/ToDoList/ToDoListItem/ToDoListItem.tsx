import clsx from 'clsx';
import type { ToDo } from '../../../../models/todo-item';
import styles from './ToDoListItem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../../../bll/todo/todoSlice';

interface Props {
  toDoItem: ToDo;
}

export const ToDoListItem = ({ toDoItem }: Props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(toDoItem));
  };

  const handleUpdate = () => {
    dispatch(updateTodo(toDoItem));
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
