import { describe, it } from 'vitest';
import { render } from '../../test/utils';
import { LoadingProvider } from '../LoadingContext';

describe('LoadingContext', () => {
  it('renders without crashing', () => {
    render(
      <LoadingProvider>
        <div>Test Child</div>
      </LoadingProvider>
    );
  });
}); 