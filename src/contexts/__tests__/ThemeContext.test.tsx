import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/utils';
import { ThemeProvider, useTheme } from '../ThemeContext';

// Test component that uses the theme context
const TestComponent = () => {
  const { theme } = useTheme();
  return <div data-testid="theme-value">{theme}</div>;
};

describe('ThemeContext', () => {
  it('provides theme value to children', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    const themeElement = screen.getByTestId('theme-value');
    expect(themeElement.textContent).toBeDefined();
    expect(['light', 'dark']).toContain(themeElement.textContent);
  });
}); 