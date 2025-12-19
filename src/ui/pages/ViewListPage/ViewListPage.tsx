import { useSelector } from 'react-redux';
import { ListItem } from '../../components/ListItem/ListItem';
import type { RootState } from '../../../bll/store';

export const ViewListPage = () => {
  const { todos } = useSelector((state: RootState) => state.todoReducer);

  return (
    <div className="container">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
