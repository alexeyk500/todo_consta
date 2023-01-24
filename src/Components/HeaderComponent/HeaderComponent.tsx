import React from 'react';
import { Header } from '@consta/header/Header';
import { ThemeItem, themesItems } from '../ThemeProvider/ThemeProvider';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectorAppThemeKey, setThemeKey } from '../../store/appSlice';
import Logo from './Logo/Logo';

const HeaderComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const themeKey = useAppSelector(selectorAppThemeKey);
  const currentTheme = themesItems.find((themeItem) => themeItem.key === themeKey);

  const onChangeTheme = ({ value }: { e: React.MouseEvent; value: ThemeItem }) => {
    dispatch(setThemeKey(value.key));
  };

  return <Header logo={<Logo />} themeItems={themesItems} theme={currentTheme} onThemeChange={onChangeTheme} />;
};

export default HeaderComponent;
