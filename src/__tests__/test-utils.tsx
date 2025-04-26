import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '../components/Theme/ThemeContext';

function render(ui: React.ReactElement, { ...renderOptions } = {}) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };

// Add a minimal test to satisfy Jest's requirement for at least one test in this file

test('test-utils should be imported without error', () => {
  expect(true).toBe(true);
}); 