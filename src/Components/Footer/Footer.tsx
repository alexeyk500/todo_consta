import React from 'react';
import classes from './Footer.module.css';
import { Text } from '@consta/uikit/Text';

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <Text view="primary" size="l" className={classes.title}>
          {'Репозиторий проекта:'}
          <link rel="stylesheet" href="" />
        </Text>
        <a href="https://github.com/alexeyk500/todo_consta" target="_blank" rel="noreferrer">
          <Text view="link" size="l">
            {'https://github.com/alexeyk500/todo_consta'}
            <link rel="stylesheet" href="" />
          </Text>
        </a>
      </div>
    </div>
  );
};

export default Footer;
