import styles from './ToDoList.module.scss';
import { ToDoListItem } from './ToDoListItem/ToDoListItem';

export const ToDoList = () => (
  <div className={styles.container}>
    <ul className={`${styles.list} ${styles.failed}`}>
      <ToDoListItem />
    </ul>
    <ul className={`${styles.list} ${styles.completed}`}>
      <ToDoListItem />
    </ul>
  </div>
);
