import type { FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../../../bll/todo/todoSlice';
import type { RootState } from '../../../bll/store';
import { resetText, setText } from '../../../bll/form/formSlice';
import { FormButton, FormElement, FormInput, FormLabel, FormWrapper } from './Form.styled';
import plusIcon from '../../../assets/plus.png';

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
    <FormWrapper>
      <FormElement onSubmit={handleSubmit}>
        <FormLabel>
          <FormInput type="text" value={text} onChange={handleChange} />
          <FormButton $icon={plusIcon} />
        </FormLabel>
      </FormElement>
    </FormWrapper>
  );
};
