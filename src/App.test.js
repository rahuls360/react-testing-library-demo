import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from './App';

test('renders welcome text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the website/i);
  expect(linkElement).toBeInTheDocument();
});

test('should change the theme on toggle', () => {
  render(<App />);

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

// test('should redirect to /page1 on clicking page1 link', () => {
//   renderWithRouter(<App />);
// const linkElement = screen.getByText(/Page 1/i);
// expect(linkElement).toBeInTheDocument();
// user.click(linkElement);
// const page1Element = screen.getByText(/Page1/);
// expect(page1Element).toBeInTheDocument();
// });
