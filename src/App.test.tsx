import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react app', () => {
  render(<App />);
  const header = screen.getByText(/my pokedex/i);
  expect(header).toBeInTheDocument();
});

