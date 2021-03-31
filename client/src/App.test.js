import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Animals screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Animals/i);
  expect(linkElement).toBeInTheDocument();
});
