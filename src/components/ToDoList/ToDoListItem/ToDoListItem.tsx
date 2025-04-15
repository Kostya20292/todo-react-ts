import classes from './ToDoListItem.module.scss';

export const ToDoListItem = () => {
  return (
    <li className={classes.item}>
      <span>Первая задача</span>
      <div className={classes.buttons}>
        <button className={classes.trash}></button>
        <button className={classes.uncheck}></button>
      </div>
    </li>
  );
};
