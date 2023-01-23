import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import MainPage from '../../Pages/MainPage/MainPage';
import classes from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <HeaderComponent />
        <MainPage />
      </div>
    </div>
  );
};

export default App;
