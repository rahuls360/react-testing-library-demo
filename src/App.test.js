import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { renderWithMemoryRouter, renderWithRouter } from './test-utils';

import App from './App';

test('renders welcome text', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/Welcome to the website/i);
  expect(linkElement).toBeInTheDocument();
});

test('should change the theme on toggle', () => {
  renderWithRouter(<App />);

  const oldTheme = screen.getByText(/light/);
  expect(oldTheme).toBeInTheDocument();

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();

  user.click(buttonElement);
  const newTheme = screen.getByText(/dark/);
  expect(newTheme).toBeInTheDocument();

  user.click(buttonElement);
  const newerTheme = screen.getByText(/light/);
  expect(newerTheme).toBeInTheDocument();
});

test('should redirect to /page1 on clicking page1 link', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/Page 1/i);
  expect(linkElement).toBeInTheDocument();
  user.click(linkElement);
  const page1Element = screen.getByText(/Welcome to Page 1/);
  expect(page1Element).toBeInTheDocument();
});

test('should render /page1 if directly visited', () => {
  const route = '/page1';
  renderWithMemoryRouter(<App />, { routes: [route] });

  const page1Element = screen.getByText(/Welcome to Page 1/);
  expect(page1Element).toBeInTheDocument();
});
