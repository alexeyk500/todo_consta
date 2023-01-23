import React from 'react';
import { Header } from '@consta/header/Header';
import logo from '../../images/Logo.png';
import { ThemeItem, themesItems } from '../ThemeProvider/ThemeProvider';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectorAppThemeKey, setThemeKey } from '../../store/appSlice';

const HeaderComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const themeKey = useAppSelector(selectorAppThemeKey);
  const currentTheme = themesItems.find((themeItem) => themeItem.key === themeKey);

  const onChangeTheme = ({ value }: { e: React.MouseEvent; value: ThemeItem }) => {
    console.log('value =', value);
    dispatch(setThemeKey(value.key));
  };

  return (
    <Header
      logo={<img src={logo} alt="logo" />}
      // userName="Иванов Иван"
      // userInfo="Владелец"
      // loginButtonLabel="Войти"
      // userLogined={true}
      // notifications={notifications}
      // notificationsActions={notificationsActions}
      // notificationsTitle="Уведомления"
      // notificationsGroupByDay={true}
      // tileMenu={tileMenu}
      // tileMenuTitle="Сервисы"
      // style={{ zIndex: 100 }}
      themeItems={themesItems}
      theme={currentTheme}
      onThemeChange={onChangeTheme}
    />
  );
};

export default HeaderComponent;
