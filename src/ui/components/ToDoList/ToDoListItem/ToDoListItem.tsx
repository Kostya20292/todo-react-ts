import type { ToDo } from '../../../../models/todo-item';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../../../bll/todo/todoSlice';
import {
  ToDoListItemButton,
  ToDoListItemButtons,
  ToDoListItemSpan,
  ToDoListItemWrapper,
} from './ToDoListItem.styled';

import checkIcon from '../../../../assets/check.png';
import uncheckIcon from '../../../../assets/uncheck.png';
import trashIcon from '../../../../assets/trash.png';

interface Props {
  toDoItem: ToDo;
}

export const ToDoListItem = ({ toDoItem }: Props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(toDoItem));
  };

  const handleUpdate = () => {
    dispatch(updateTodo(toDoItem));
  };

  return (
    <ToDoListItemWrapper>
      <ToDoListItemSpan>{toDoItem.text}</ToDoListItemSpan>
      <ToDoListItemButtons>
        <ToDoListItemButton $icon={trashIcon} onClick={handleDelete}></ToDoListItemButton>
        <ToDoListItemButton
          $icon={toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={handleUpdate}
        ></ToDoListItemButton>
      </ToDoListItemButtons>
    </ToDoListItemWrapper>
  );
};
