import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import MainPage from '../../Pages/MainPage/MainPage';
import classes from './App.module.css';
import Footer from '../Footer/Footer';

const App: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <HeaderComponent />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
};

export default App;
