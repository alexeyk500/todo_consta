import React, { ReactElement } from 'react';
import { IconComponent } from '@consta/uikit/Icon';
import { presetGpnDark, presetGpnDefault, Theme, ThemePreset } from '@consta/uikit/Theme';
import { IconSun } from '@consta/uikit/IconSun';
import { IconMoon } from '@consta/uikit/IconMoon';
import { useAppSelector } from '../../hooks/hooks';
import { selectorAppThemeKey } from '../../store/appSlice';

type PropsType = {
  children: ReactElement;
};

export type ThemeItem = {
  icon: IconComponent;
  key: string;
  label: string;
  preset: ThemePreset;
};

export const themesItems: ThemeItem[] = [
  {
    key: '1',
    label: 'Светлая',
    icon: IconSun,
    preset: presetGpnDefault,
  },
  {
    key: '2',
    label: 'Темная',
    icon: IconMoon,
    preset: presetGpnDark,
  },
];

const ThemeProvider: React.FC<PropsType> = ({ children }) => {
  const themeKey = useAppSelector(selectorAppThemeKey);
  const currentTheme = themesItems.find((themeItem) => themeItem.key === themeKey);

  return <Theme preset={currentTheme?.preset ? currentTheme.preset : themesItems[0].preset}>{children}</Theme>;
};

export default ThemeProvider;
