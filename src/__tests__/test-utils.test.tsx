import React from 'react';
import { render } from './test-utils';

describe('Custom render function', () => {
  it('renders component with ThemeProvider wrapper', () => {
    const TestComponent = () => <div>Test Content</div>;
    const { getByText } = render(<TestComponent />);
    expect(getByText('Test Content')).toBeInTheDocument();
  });
}); 