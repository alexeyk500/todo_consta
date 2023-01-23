import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainPage from './Pages/MainPage/MainPage';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <MainPage />
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
