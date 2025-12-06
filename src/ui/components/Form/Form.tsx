import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import styles from './Form.module.scss';

interface Props {
  createTodo: (text: string) => void;
}

export const Form = ({ createTodo }: Props) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text) {
      createTodo(text);
      setText('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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
