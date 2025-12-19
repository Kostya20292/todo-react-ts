import type { FormEvent, ChangeEvent } from 'react';
import styles from './Form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../../../bll/todo/todoSlice';
import type { RootState } from '../../../bll/store';
import { resetText, setText } from '../../../bll/form/formSlice';

export const Form = () => {
  const { text } = useSelector((state: RootState) => state.formReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text) {
      dispatch(createTodo(text));
      dispatch(resetText());
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setText(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" className={styles.input} value={text} onChange={handleChange} />
          <button className={styles.button}></button>
        </label>
      </form>
    </div>
  );
};
