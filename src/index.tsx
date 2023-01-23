import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'normalize.css';
import './index.css';
import MainPage from './Pages/MainPage/MainPage';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <MainPage />
  </Provider>
);
