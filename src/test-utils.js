import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';

export const renderWithRouter = (ui) => {
  render(ui, { wrapper: BrowserRouter });
};
