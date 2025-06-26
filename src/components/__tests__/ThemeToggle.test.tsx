import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '../../test/utils';
import ThemeToggle from '../ThemeToggle';

describe('ThemeToggle', () => {
  it('renders without crashing', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('toggles theme when clicked', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    
    // Get initial theme
    const initialTheme = document.documentElement.getAttribute('data-theme');
    
    // Click the toggle
    fireEvent.click(button);
    
    // Check if theme changed
    const newTheme = document.documentElement.getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);
  });
}); 