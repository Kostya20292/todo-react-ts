import styles from './Form.module.scss';

export const Form = () => (
  <div className={styles.wrapper}>
    <form action="#">
      <label>
        <input type="text" className={styles.input} />
        <button className={styles.button}></button>
      </label>
    </form>
  </div>
);
