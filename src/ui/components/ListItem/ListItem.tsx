import clsx from 'clsx';
import type { ToDo } from '../../../models/todo-item';
import styles from './ListItem.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  todo: ToDo;
}

export const ListItem = ({ todo }: Props) => {
  return (
    <Link
      className={clsx(styles.link, todo.isDone ? styles.done : styles.notDone)}
      to={`/list/${todo.id}`}
    >
      {todo.text}
    </Link>
  );
};
