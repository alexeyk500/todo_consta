import React from 'react';
import classes from './MainPage.module.css';
import TodoInput from '../../Components/TodoInput/TodoInput';
import TodoList from '../../Components/TodoList/TodoList';

const MainPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default MainPage;
