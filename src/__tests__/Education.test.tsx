import React from 'react';
import { render, screen } from './test-utils';
import Education from '../components/Education/Education';
import { education } from '../data/constants';

// Mock Framer Motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

describe('Education Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders education section title', () => {
    render(<Education isDarkMode={false} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Academic journey and professional development')).toBeInTheDocument();
  });

  it('renders all education entries', () => {
    render(<Education isDarkMode={false} />);
    education.forEach((edu) => {
      expect(screen.getByText(edu.program)).toBeInTheDocument();
      expect(screen.getByText(edu.institution)).toBeInTheDocument();
      expect(screen.getByText(`${edu.period} • ${edu.type}`)).toBeInTheDocument();
      if (edu.Grade) {
        expect(screen.getByText(`Grade: ${edu.Grade}`)).toBeInTheDocument();
      }
    });
  });

  it('renders courses for each education entry', () => {
    render(<Education isDarkMode={false} />);
    education.forEach((edu) => {
      edu.courses?.forEach((course) => {
        expect(screen.getByText(course)).toBeInTheDocument();
      });
    });
  });

  it('applies dark mode styles when isDarkMode is true', () => {
    render(<Education isDarkMode={true} />);
    const container = screen.getByTestId('education-container');
    expect(container.className).toContain('bg-[#080808]');
  });
}); 