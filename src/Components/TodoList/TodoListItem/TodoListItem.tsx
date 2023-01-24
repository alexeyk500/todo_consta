import React from 'react';
import { deleteTodo, TodoItemType, toggleStatusTodo } from '../../../store/todoSlice';
import classes from './TodoListItem.module.css';
import { Checkbox } from '@consta/uikit/Checkbox';
import { useAppDispatch } from '../../../hooks/hooks';
import { IconTrash } from '@consta/uikit/IconTrash';
import { TodoStatusEnum } from '../../types/types';

type PropsType = {
  ind: number;
  todoItem: TodoItemType;
};

const TodoListItem: React.FC<PropsType> = ({ ind, todoItem }) => {
  const dispatch = useAppDispatch();

  const onChange = () => {
    dispatch(toggleStatusTodo(todoItem.id));
  };

  const onClickDelete = () => {
    dispatch(deleteTodo(todoItem.id));
  };

  return (
    <div className={classes.container}>
      <div className={classes.ind}>{ind}</div>
      <div className={classes.title}>{todoItem.title}</div>
      <Checkbox
        size={'l'}
        label="готово"
        view="primary"
        align="center"
        checked={todoItem.status === TodoStatusEnum.done}
        onChange={onChange}
        className={classes.checkbox}
      />
      <IconTrash view="alert" onClick={onClickDelete} className={classes.deleteBtn} />
    </div>
  );
};

export default TodoListItem;
