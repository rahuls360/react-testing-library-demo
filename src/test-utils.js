import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';

export const renderWithRouter = (ui) => {
  render(ui, { wrapper: BrowserRouter });
};

export const renderWithMemoryRouter = (ui, { routes }) => {
  return render(<MemoryRouter initialEntries={routes}>{ui}</MemoryRouter>);
};
