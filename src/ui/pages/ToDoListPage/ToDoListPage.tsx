import { Form } from '../../components/Form/Form';
import { ToDoList } from '../../components/ToDoList/ToDoList';
import { ToastContainer } from 'react-toastify';

export const ToDoListPage = () => (
  <>
    <Form />
    <ToDoList />
    <ToastContainer />
  </>
);
