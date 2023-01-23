import React from 'react';
import {TextField} from "@consta/uikit/TextField";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {selectorNewTodoTitle, setNewTodo} from "../../store/todoSlice";
import {Button} from "@consta/uikit/Button";
import classes from './TodoInput.module.css'

const TodoInput = () => {

  const dispatch = useAppDispatch();
  const newTodoTitle = useAppSelector(selectorNewTodoTitle);
  const onChangeHandler = ({ value }: { value: string | null }) => {
    dispatch(setNewTodo(value))
  }

  return (
    <>
      <TextField
        onChange={onChangeHandler}
        value={newTodoTitle}
        type="text"
        placeholder="введите дело..."
        label="Новое дело" labelPosition="top"
      />
      <div className={classes.buttonContainer}>
        <Button label={'Создать'} />
      </div>

    </>

  );
};

export default TodoInput;
