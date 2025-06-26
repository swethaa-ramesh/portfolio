import { describe, it, expect } from 'vitest';
import { render } from '../../test/utils';
import PageTransition from '../PageTransition';

describe('PageTransition', () => {
  it('renders children without crashing', () => {
    const { container } = render(
      <PageTransition>
        <div>Test Content</div>
      </PageTransition>
    );
    expect(container.textContent).toContain('Test Content');
  });
}); 