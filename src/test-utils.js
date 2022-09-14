import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';

const Wrapper = ({ children }) => {
  <MemoryRouter initialEntries={['/']}>
    {children}
    <MyRoutes />
  </MemoryRouter>;
};

export const renderWithRouter = (ui) => {
  render(<Wrapper>{ui}</Wrapper>);
};
