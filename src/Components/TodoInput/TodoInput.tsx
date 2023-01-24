import React from 'react';
import { TextField } from '@consta/uikit/TextField';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  addNewTodo,
  selectorNewTodoTitle,
  selectorTodoList,
  selectorTodoType,
  setNewTodoTitle,
  setTodoType,
} from '../../store/todoSlice';
import { Button } from '@consta/uikit/Button';
import classes from './TodoInput.module.css';
import { TodoTypeEnum } from '../types/types';
import ModalComponent from './ModalComponent/ModalComponent';

const TodoInput = () => {
  const dispatch = useAppDispatch();
  const todoType = useAppSelector(selectorTodoType);
  const todoList = useAppSelector(selectorTodoList);
  const newTodoTitle = useAppSelector(selectorNewTodoTitle);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onChangeHandler = ({ value }: { value: string | null }) => {
    dispatch(setNewTodoTitle(value));
  };

  const onClickAddTodo = () => {
    if (todoList.length < 5) {
      if (todoType !== TodoTypeEnum.all) {
        dispatch(setTodoType(TodoTypeEnum.all));
      }
      dispatch(addNewTodo(newTodoTitle));
    } else {
      setIsModalOpen(true);
    }
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
      <ModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default TodoInput;
