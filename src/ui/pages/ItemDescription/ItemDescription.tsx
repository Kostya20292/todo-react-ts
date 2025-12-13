import type { ToDo } from '../../../models/todo-item';
import { Navigate, useParams } from 'react-router-dom';

interface Props {
  todos: ToDo[];
}

export const ItemDescription = ({ todos }: Props) => {
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
