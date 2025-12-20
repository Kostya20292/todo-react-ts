import { ToastContainer } from 'react-toastify';

import { Form } from '../../components/Form/Form';
import { ToDoList } from '../../components/ToDoList/ToDoList';

export const ToDoListPage = () => (
  <>
    <Form />
    <ToDoList />
    <ToastContainer />
  </>
);
