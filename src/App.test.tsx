import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text on next hint button', () => {
  render(<App />);
  const button = screen.getByText(/Next Hint/gmi);
  expect(button).toBeDefined();
});
