import styles from './ToDoListItem.module.scss';

export const ToDoListItem = () => (
  <li className={styles.wrapper}>
    <span>Первая задача</span>
    <div className={styles.buttons}>
      <button className={`${styles.button} ${styles.trash}`}></button>
      <button className={`${styles.button} ${styles.check}`}></button>
    </div>
  </li>
);
