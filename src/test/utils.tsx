import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LoadingProvider } from '../contexts/LoadingContext';
import { HelmetProvider } from 'react-helmet-async';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LoadingProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </LoadingProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

// Re-export everything
export * from '@testing-library/react';

// Override render method and export commonly used utilities
export { customRender as render, screen, fireEvent }; 