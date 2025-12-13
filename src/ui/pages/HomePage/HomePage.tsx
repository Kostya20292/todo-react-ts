import type { ToDo } from '../../../models/todo-item';
import { ListItem } from '../../components/ListItem/ListItem';

interface Props {
  todos: ToDo[];
}

export const HomePage = ({ todos }: Props) => {
  return (
    <div className="container">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
