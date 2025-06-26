import { describe, it, expect } from 'vitest';
import { render, screen } from '../../test/utils';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
    // Check if at least one navigation link is present
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });
}); 