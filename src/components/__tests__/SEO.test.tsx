import { describe, it } from 'vitest';
import { render } from '../../test/utils';
import SEO from '../SEO';

describe('SEO', () => {
  it('renders without crashing', () => {
    render(<SEO title="Test" description="Test description" />);
  });
}); 