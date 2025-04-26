import React from 'react';
import { render, screen, fireEvent, waitFor } from './test-utils';
import App from '../App';

// Mock window.scrollTo
window.scrollTo = jest.fn();

describe('App Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the home section by default', async () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getAllByText(/Aditya Janjanam/i)[0]).toBeInTheDocument();
    });
  });

  it('navigates between sections when clicking nav links', async () => {
    render(<App />);
    
    // Find and click the Education nav link
    const educationLink = screen.getByRole('button', { name: /education/i });
    fireEvent.click(educationLink);
    
    // Wait for Education section to be displayed
    await waitFor(() => {
      expect(screen.getByTestId('education-container')).toBeInTheDocument();
    });
    
    // Find and click the Experience nav link
    const experienceLink = screen.getByRole('button', { name: /experience/i });
    fireEvent.click(experienceLink);
    
    // Wait for Experience section content to be displayed
    await waitFor(() => {
      expect(screen.getByText(/Atos Global/i)).toBeInTheDocument();
    });
  });

  it('renders navigation links', () => {
    render(<App />);
    const navLinks = ['Home', 'Experience', 'Education', 'Projects'];
    navLinks.forEach(link => {
      expect(screen.getByRole('button', { name: new RegExp(link, 'i') })).toBeInTheDocument();
    });
  });

  it('maintains active section state', async () => {
    render(<App />);
    
    // Click Education link
    const educationLink = screen.getByRole('button', { name: /education/i });
    fireEvent.click(educationLink);
    
    // Wait for Education section to be displayed
    await waitFor(() => {
      expect(screen.getByTestId('education-container')).toBeInTheDocument();
    });
    
    // Click Experience link
    const experienceLink = screen.getByRole('button', { name: /experience/i });
    fireEvent.click(experienceLink);
    
    // Wait for Experience section to be displayed
    await waitFor(() => {
      expect(screen.getByText(/Atos Global/i)).toBeInTheDocument();
    });
  });
}); 