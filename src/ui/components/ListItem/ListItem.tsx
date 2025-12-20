import type { ToDo } from '../../../models/todo-item';

import { StyledLink } from './ListItem.styled';

interface Props {
  todo: ToDo;
}

export const ListItem = ({ todo }: Props) => {
  return (
    <StyledLink $isDone={todo.isDone} to={`/list/${todo.id}`}>
      {todo.text}
    </StyledLink>
  );
};
