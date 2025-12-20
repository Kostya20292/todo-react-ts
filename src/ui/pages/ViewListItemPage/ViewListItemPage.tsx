import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import type { RootState } from '../../../bll/store';

export const ViewListItemPage = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const { id } = useParams();

  const todo = todos.find((todo) => String(todo.id) === id);

  if (!todo) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="container">
      <h1>{todo.text}</h1>
    </div>
  );
};
