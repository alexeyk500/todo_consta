import React from 'react';
import classes from './MainPage.module.css';
import TodoInput from '../../Components/TodoInput/TodoInput';

const MainPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <TodoInput />
    </div>
  );
};

export default MainPage;
