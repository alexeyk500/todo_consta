import React from 'react';
import { TextField } from '@consta/uikit/TextField';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addNewTodo, selectorNewTodoTitle, setNewTodoTitle } from '../../store/todoSlice';
import { Button } from '@consta/uikit/Button';
import classes from './TodoInput.module.css';

const TodoInput = () => {
  const dispatch = useAppDispatch();
  const newTodoTitle = useAppSelector(selectorNewTodoTitle);

  const onChangeHandler = ({ value }: { value: string | null }) => {
    dispatch(setNewTodoTitle(value));
  };

  const onClickAddTodo = () => {
    dispatch(addNewTodo(newTodoTitle));
  };

  return (
    <div className={classes.container}>
      <TextField
        onChange={onChangeHandler}
        value={newTodoTitle}
        type="text"
        placeholder="введите дело..."
        label="Новое дело"
        labelPosition="top"
      />
      <div className={classes.buttonContainer}>
        <Button label={'Создать'} onClick={onClickAddTodo} />
      </div>
    </div>
  );
};

export default TodoInput;
