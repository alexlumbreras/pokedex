import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react app', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1, name: /my pokedex/i });
  expect(heading).toBeInTheDocument();
});

