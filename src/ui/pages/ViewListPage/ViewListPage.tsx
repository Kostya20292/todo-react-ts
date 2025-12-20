import { useSelector } from 'react-redux';

import type { RootState } from '../../../bll/store';

import { ListItem } from '../../components/ListItem/ListItem';

export const ViewListPage = () => {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <div className="container">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
