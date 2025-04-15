import classes from './Form.module.scss';

export const Form = () => {
  return (
    <div className={classes.form}>
      <form action="#">
        <label>
          <input type="text" />
          <button></button>
        </label>
      </form>
    </div>
  );
};
