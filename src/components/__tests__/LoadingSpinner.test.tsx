import { describe, it, expect } from 'vitest';
import { render } from '../../test/utils';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    const { container } = render(<LoadingSpinner />);
    const spinner = container.querySelector('[role="status"]');
    expect(spinner).toBeInTheDocument();
  });

  it('accepts different size props', () => {
    const { rerender, container } = render(<LoadingSpinner size="small" />);
    expect(container.querySelector('[role="status"]')).toBeInTheDocument();

    rerender(<LoadingSpinner size="medium" />);
    expect(container.querySelector('[role="status"]')).toBeInTheDocument();

    rerender(<LoadingSpinner size="large" />);
    expect(container.querySelector('[role="status"]')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    const { container } = render(<LoadingSpinner />);
    const spinner = container.querySelector('[role="status"]');
    expect(spinner).toHaveAttribute('aria-label', 'Loading');
  });
}); 