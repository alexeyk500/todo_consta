import React from 'react';
import logo from '../../../images/Logo.png';
import classes from './Logo.module.css';
import { Text } from '@consta/uikit/Text';

const Logo = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="logo" />
      <div className={classes.textContainer}>
        <Text view="brand" size="xl" weight="bold">
          :&nbsp;&nbsp;&nbsp;{'демо приложение - "Список дел"'}
        </Text>
      </div>
    </div>
  );
};

export default Logo;
