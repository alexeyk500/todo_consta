import React from 'react';
import classes from './TodoList.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectorFilteredTodos, selectorTodoList, selectorTodoType, setTodoType } from '../../store/todoSlice';
import TodoListItem from './TodoListItem/TodoListItem';
import { Text } from '@consta/uikit/Text';
import { TodoTypeEnum } from '../types/types';
import { Tabs } from '@consta/uikit/Tabs';

export const todoTabs = [TodoTypeEnum.all, TodoTypeEnum.todo, TodoTypeEnum.done];

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectorTodoList);
  const todoType = useAppSelector(selectorTodoType) as string;

  const filteredTodo = useAppSelector(selectorFilteredTodos);

  const onChangeTodoType = ({ value }: { value: string }) => {
    dispatch(setTodoType(value));
  };

  return (
    <div className={classes.container}>
      <Text view="brand" size="xl">
        {'Список дел:'}
      </Text>
      <Tabs
        value={todoType}
        onChange={onChangeTodoType}
        items={todoTabs}
        getItemLabel={(item) => item}
        className={classes.tabs}
      />
      {todoList.length > 0 ? (
        filteredTodo.map((todoItem, ind) => <TodoListItem key={ind} ind={ind + 1} todoItem={todoItem} />)
      ) : (
        <Text view="warning">{'- у вас еще ничего не запланировано'}</Text>
      )}
    </div>
  );
};

export default TodoList;
